import { createApi } from "@reduxjs/toolkit/query/react";
import { IPhoto } from "../model/types";
import { customBaseQuery } from "@/shared/api/baseQueryWithError";

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