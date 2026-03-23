import { createApi } from "@reduxjs/toolkit/query/react"
import { customBaseQuery } from "@/shared/api/baseQueryWithError"
import type { IUser } from "../model/types"

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