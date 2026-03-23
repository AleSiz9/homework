import { createApi } from "@reduxjs/toolkit/query/react"
import { customBaseQuery } from "@/shared/api/baseQueryWithError"
import type { IAlbum } from "../model/types"

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getAlbums: builder.query<IAlbum[], void>({
            query: ()=> `albums`
        }),
        getAlbumsByUser: builder.query<IAlbum[], number>({
            query: (userId) => `users/${userId}/albums`
        }),
    })
})

export const {
    useGetAlbumsQuery,
    useGetAlbumsByUserQuery,
} = albumsApi