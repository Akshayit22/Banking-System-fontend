import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import accountReducer from './slices/accountSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        account: accountReducer,
        count: counterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store