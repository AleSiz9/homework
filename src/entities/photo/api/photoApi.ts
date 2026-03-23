import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "@/shared/api/baseQueryWithError";
import type { IPhoto } from "../model/types";

export const photoApi = createApi({
    reducerPath: 'photoApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getPhotos: builder.query<IPhoto[], void>({
            query: () => `photos`
        }),
        getPhotosByAlbum: builder.query<IPhoto[], number>({
            query: (albumsId) => `albums/${albumsId}/photos`
        })
    })
})

export const{ useGetPhotosQuery, useGetPhotosByAlbumQuery } = photoApi