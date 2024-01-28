/**
 * Profile Slice for Profile operations
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: null,
    },
    reducers: {
        /**
         * Set Profile in store
         * 
         * @param Object state 
         * @param Object actions 
         */
        setProfile: (state, actions) => {
            const  profile = actions.payload;
            state.profile = profile;
        },
    }
});

export const {setProfile} = profileSlice.actions;

export default profileSlice.reducer;

export const profile = (state) => state.profile.profile;