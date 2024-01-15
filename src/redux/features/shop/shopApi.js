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
        }),
        addMenu: builder.mutation({
            query: (data)=>({
                url: '/menu',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useGetShopQuery, useGetRandomQuery, useGetMenuCardQuery, useAddMenuMutation} = shopApi;