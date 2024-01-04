import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "",
        prepareHeaders: async(headers,{getState})=>{
            const token = getState()?.auth?.accessToken;
            if(token){
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: [],
    endpoints: (builder)=>({}),
})