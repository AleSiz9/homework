import { useParams } from "react-router-dom";
import { CommentList } from '@/widgets/CommentList';
import PostPageSkeleton from '@/shared/ui/Skeleton/PostPageSkeleton/PostPageSkeleton';
import { useGetPostQuery } from "@/entities/post/api/postsApi";
import s from './PostPage.module.css'

const PostPage = () => {
    const { id } = useParams<{ id: string }>()
    const { data: post, isLoading} = useGetPostQuery(Number(id))

    if (isLoading) {
        return <PostPageSkeleton />
    }

    //можно разбить на слои ниже но тк доп интерактива нету оставил так
    return (
        <div className={s.posts}>
            {post ? (
                <div className={s.post}>
                    <h2 className={s.post__title}>{post.title}</h2>
                    <p className={s.post__body}>{post.body}</p>
                    <CommentList id={Number(id)} />
                </div>
            ) : (
                <div>Пост не найден</div>
            )}
        </div>
    );
};

export default PostPage;