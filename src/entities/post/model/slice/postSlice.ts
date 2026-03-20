import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostCard } from "../../ui/type";
import { RootState } from "@/app/providers/store/store";


interface PostState{
    items: IPostCard
}

const postsAdapter = createEntityAdapter({
    selectId: (post: PostState) => post.items.id
})
const initialState = postsAdapter.getInitialState({
    loading: 'idle',
    // 'idle'(ожидает) | 'pending'(в процессе) | 'succeeded'(успешно) | 'failed'(отклонен)
    error: null as string | null
})


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: postsAdapter.addOne,
        addPosts: postsAdapter.addMany,
        setPosts: postsAdapter.setAll,
        // updatePost:
        // removePost:
        setLoading: (state, actions: PayloadAction<'idle' | 'pending' | 'succeeded' | 'failed'>) => {
            state.loading = actions.payload;
        },
        setError: (state, actions: PayloadAction<string | null>) => {
            state.error = actions.payload
        }
    }
})

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
  //selectTotal
} = postsAdapter.getSelectors((state: RootState) => state.posts);

const {reducer: postReducer, actions} = postSlice
export const {addPost, addPosts, setError,setPosts, setLoading} = actions
export default postReducer