/**
 * Add Address Api Slice for profile
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import { apiSlice } from "../../app/api/apiSlice";

export const addProfileApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addAddress: builder.mutation({
        query: (address) => ({
            url: '/address/add',
            method: 'POST',
            body: {...address}
        })
        })  
    })
    });

  
export const { useAddAddressMutation } = addProfileApiSlice;