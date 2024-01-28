/**
 * Auth Api Slice for authentication api
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
      login: builder.mutation({
        query: credentials => ({
            url: '/login',
            method: 'POST',
            body: {...credentials}
        })
      })  
    })
});

export const { useLoginMutation } = authApiSlice;