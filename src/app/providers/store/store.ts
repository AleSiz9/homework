import { albumsApi } from "@/entities/album/api/albumsApi";
import { commentsApi } from "@/entities/comment/api/commentsApi";
import { photoApi } from "@/entities/photo/api/photoApi";
import { postsApi } from "@/entities/post/api/postsApi";
import postReducer from "@/entities/post/model/slice/postSlice";
import { todosApi } from "@/entities/todos/api/todoApi";
import { usersApi } from "@/entities/user/api/usersApi";
import { configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        posts: postReducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [photoApi.reducerPath]: photoApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            postsApi.middleware,
            albumsApi.middleware,
            commentsApi.middleware,
            todosApi.middleware,
            usersApi.middleware,
            photoApi.middleware
        )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch