import { createApi } from "@reduxjs/toolkit/query/react"
import { ITodo } from "../model/types"
import { customBaseQuery } from "@/shared/api/baseQueryWithError"

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