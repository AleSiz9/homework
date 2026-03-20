import { createApi } from "@reduxjs/toolkit/query/react"
import { IAlbum } from "../model/types"
import { customBaseQuery } from "@/shared/api/baseQueryWithError"

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