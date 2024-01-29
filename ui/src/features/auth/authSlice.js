/**
 * Auth Slice for authentication operations
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null, //initiall state of user before api call
        token: null //token for later JWT auth
    },
    reducers: {
        /**
         * Set Credentials in store along with token
         * 
         * @param Object state 
         * @param Object actions 
         */
        setCreds: (state, actions) => {
            const {values, token, refreshToken} = actions.payload; 
            state.user = values;
            state.token = token;
            state.refreshToken = refreshToken;
        },
        /**
         * Logout reset user and token
         * 
         * @param Object state 
         * @param Object actions 
         */
        logout: (state, actions) => {
            state.user = null;
            state.token = null;
            state.refreshToken = null;
        }
    }
});

export const {setCreds, logout} = authSlice.actions;

export default authSlice.reducer;

export const currentUser = (state) => state.auth.user;

export const currentToken = (state) => state.auth.token;