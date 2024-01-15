import { apiSlice } from "../api/apiSlcie";

export const paymentApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        addPayment: builder.mutation({
            query: (data)=>({
                url: `/create-payment-intent`,
                method: 'POST',
                body: data
            })
        }),
      
    })
})

export const {useAddPaymentMutation} = paymentApi;