import { apiSlice } from "../api/apiSlcie";

export const shopApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getShop: builder.query({
            query: ()=>`/menu`
        }),
        getRandom: builder.query({
            query: ()=>`/menusix`
        }),
        getMenuCard: builder.query({
            query: ()=>`/menucard`
        })
    })
})

export const {useGetShopQuery, useGetRandomQuery, useGetMenuCardQuery} = shopApi;