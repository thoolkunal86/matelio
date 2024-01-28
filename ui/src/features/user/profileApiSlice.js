/**
 * Profile Api Slice for profile
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import { apiSlice } from "../../app/api/apiSlice";

const getProfileApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
      profile: builder.mutation({
        query: (profile) => ({
            url: '/profile',
            method: 'POST',
            body: {...profile}
        })
      })  
    })
});



export const { useProfileMutation } = getProfileApiSlice;