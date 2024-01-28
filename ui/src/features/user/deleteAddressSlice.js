/**
 * Delete Address Api Slice for profile
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import { apiSlice } from "../../app/api/apiSlice";

export const deleteAddressApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        deleteAddress: builder.mutation({
        query: (address) => ({
            url: '/address/delete/' + address.id,
            method: 'GET',
           })
        })  
    })
});

export const { useDeleteAddressMutation } = deleteAddressApiSlice;