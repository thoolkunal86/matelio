/**
 * Store
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/user/profileSlice";

/**
 * Configure store with middleware
 */
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        profile: profileReducer,
    },
    middleware: getDefaultMiddleware => 
                getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});