import { createApi } from "@reduxjs/toolkit/query/react"
import { customBaseQuery } from "@/shared/api/baseQueryWithError"
import type { ITodo } from "../model/types"

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getTodos: builder.query<ITodo[], void>({
            query: ()=> `todos`
        }),
        getTodosByUser: builder.query<ITodo[], number>({
            query: (userId) => `users/${userId}/todos`
        })
    })
})

export const {
    useGetTodosQuery,
    useGetTodosByUserQuery
} = todosApi