import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlcie";
import pageSliceReducer from "../features/pages/pagesSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        page: pageSliceReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
})