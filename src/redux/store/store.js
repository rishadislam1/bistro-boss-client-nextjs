import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlcie";
import pageSliceReducer from "../features/pages/pagesSlice";
import authSliceReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        page: pageSliceReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
})