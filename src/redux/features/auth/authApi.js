import { apiSlice } from "../api/apiSlcie";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        register: builder.mutation({
            query: (data)=>({
                url: '/register',
                method: 'POST',
                body: data
            }),
           
        }),
        login: builder.mutation({
            query: (data)=>({
                url: '/login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const result = await queryFulfilled;
           
                    const accessToken = result?.data?.accessToken;
      
                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: accessToken,
                        user: result.data.newUser
                    }));
                   dispatch(
                    userLoggedIn({
                        accessToken: accessToken,
                        user: result.data.user
                    })
                   )
                }catch(err){
                    // do nothing
                }
            }
        }),
        jwt: builder.mutation({
            query: ()=>({
                url: '/jwt',
                method: post
            })
        })
    })
});

export const {useLoginMutation, useRegisterMutation,useJwtMutation} = authApi;