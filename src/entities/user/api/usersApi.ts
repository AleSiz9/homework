import { createApi } from "@reduxjs/toolkit/query/react"
import { IUser } from "../model/types"
import { customBaseQuery } from "@/shared/api/baseQueryWithError"

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: ()=> `users`,
        }),
        getUserById: builder.query<IUser, number>({
            query: (userId) => `users/${userId}`
        }),
    })
})

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi