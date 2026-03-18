import { useParams } from "react-router-dom";
import { usePosts } from "@/entities/post/hooks/usePosts";
import { CommentList } from '@/widgets/CommentList';
import { useComments } from '@/entities/comment/hooks/useComments';
import PostPageSkeleton from '@/shared/ui/Skeleton/PostPageSkeleton/PostPageSkeleton';
import s from './PostPage.module.css'


const PostPage = () => {
    const { id } = useParams<{id: string}>()
    const {posts} = usePosts()
    const {loading, getCommentsByPostId} = useComments()
    const post = posts.find(p => p.id === Number(id))
    const postComments = post ? getCommentsByPostId(post.id) : []

    if(!posts) {
        return <div>Пост не найден</div>
    }

    if(loading) {
        return <PostPageSkeleton />
    }

    return (
        <div className={s.posts}>
                <div className={s.post}>
                    <h2 className={s.post__title}>{post?.title}</h2>
                    <p className={s.post__body}>{post?.body}</p>
                    <CommentList comments={postComments}/>
                </div>
        </div>
    );
};

export default PostPage;