import { apiSlice } from "../api/apiSlcie";

export const addToCardApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        postAddToCard: builder.mutation({
            query: (data)=>({
                url: '/carts',
                method: "POST",
                body: data
            })
        }),
        getAddToCard: builder.query({
            query: ({userEmail,accessToken})=>({
                url: `/carts?email=${userEmail}`,
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            }),
            providesTags: ['addToCartQuery']
        }),
        deleteCart: builder.mutation({
            query: (id)=>({
                url: `/carts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['addToCart']
        })
    })
})

export const {usePostAddToCardMutation,useGetAddToCardQuery,useDeleteCartMutation} = addToCardApi;