import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
});

// Export Type chuẩn cho TypeScript
export type RootState = ReturnType < typeof store.getState > ;
export type AppDispatch = typeof store.dispatch;