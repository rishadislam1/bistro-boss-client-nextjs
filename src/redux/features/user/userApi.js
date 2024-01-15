import { apiSlice } from "../api/apiSlcie";

export const userApi = apiSlice.injectEndpoints({
    endpoints: builder=>({
        getUser: builder.query({
            query: ({userEmail,accessToken})=> ({
                url:  `/user/admin/${userEmail}`,
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            }),
     
               
       
            
        }),
        getAllUsers: builder.query({
            query: ()=>({
                url: `/users`,
              
            }),
            providesTags:['getUser']
        }),
        deleteUser: builder.mutation({
            query: (id)=>({
                url: `/deleteuser/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['deleteUser']
        }),
        updateUser: builder.mutation({
            query: (id)=>({
                url: `/updateuser/${id}`,
                method: 'PATCH'
            }),
            invalidatesTags: ['updateUser']
        })
     
    
    })
})

export const {useGetUserQuery, useGetAllUsersQuery, useDeleteUserMutation, useUpdateUserMutation} = userApi;