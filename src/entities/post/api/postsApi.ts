import { createApi } from "@reduxjs/toolkit/query/react";
import { IPostCard } from "../ui/type";
import { customBaseQuery } from "@/shared/api/baseQueryWithError";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getPosts: builder.query<IPostCard[], void>({
            query: ()=> `posts`
        }),
        getPost: builder.query<IPostCard, number>({
            query: (postId) => `posts/${postId}`
        }),
        getPostsByUser: builder.query<IPostCard[], number>({
            query: (userId) => `users/${userId}/posts`
        })
    })
})

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useGetPostsByUserQuery,
} = postsApi