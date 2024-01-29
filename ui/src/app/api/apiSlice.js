/**
 * Api Slice for api call with token and refresh token
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setCreds, logout } from '../../features/auth/authSlice';

/**
 * Set base Query url and headers
 */
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3002/api',
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token;
        
        //If token set authorization header
        if (token) {
            headers.set("authorization", token);
        }

        return headers;
    }
});

/**
 * Api call with refresh token
 * 
 * @param Object args 
 * @param Object api 
 * @param Object options
 * 
 * @returns Object results;
 */
const baseQueryWithRefreshAuth = async(args, api, options) => {
    let results = await baseQuery(args, api, options);

    if (results?.error?.status == 401) {
        console.log("Refreshing Token");
        
        //if token expires send request for refresh token
        const refreshToken = await baseQuery(
            '/refresh-token/' + api.getState().auth.refreshToken, 
            api,
            options
        );
        console.log(refreshToken);

        if (refreshToken?.data) {
            //store the new user and token
            const user = api.getState().auth.user;

            //Dispath set credentials
            api.dispatch(setCreds({...refreshToken.data, user}));
            
            //Call previously failed 403 query
            results = await baseQuery(args, api, options);
        } else {
            api.dispatch(logout());
        }
    }

    return results;
};

export const apiSlice = createApi(({
    baseQuery: baseQueryWithRefreshAuth,
    endpoints: builder => ({

    })
}));