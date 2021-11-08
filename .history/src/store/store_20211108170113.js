import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userCreateSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
});