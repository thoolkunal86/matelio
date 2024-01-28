/**
 * Add Profile Api Slice for profile
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import { apiSlice } from "../../app/api/apiSlice";

export const addProfileApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addProfile: builder.mutation({
        query: (addProfile) => ({
            url: '/profile/update',
            method: 'POST',
            body: {...addProfile}
        })
        })  
    })
    });

  
export const { useAddProfileMutation } = addProfileApiSlice;