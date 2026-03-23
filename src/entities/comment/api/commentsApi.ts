import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "@/shared/api/baseQueryWithError";
import type { IComment } from "../model/types";

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getComments: builder.query<IComment[], void>({
            query: () => 'comments'
        }),
        getCommentsByPost: builder.query<IComment[], number>({
            query: (postId) => `posts/${postId}/comments`
        })
    })
})

export const { useGetCommentsQuery, useGetCommentsByPostQuery } = commentsApi