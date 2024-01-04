import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlcie";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
})