import CommentsCard from '@/entities/comment/ui/CommentsCard';
import { useGetCommentsByPostQuery } from '@/entities/comment/api/commentsApi';
import { CommentSkeleton } from "@/shared/ui/Skeleton/CommentSkeleton/CommentSkeleton";
import s from './CommentList.module.css';

interface CommentListProps {
    id: number
}

const CommentList = ({id }: CommentListProps) => {
    const {data: comments, isLoading, error} = useGetCommentsByPostQuery(id)

    if (isLoading) return <><CommentSkeleton /></>;
    if(error) return <div>Ошибка {error.message}</div>
    
    return (
        <div className={s.commentList}>
            {comments?.length === 0 ? (
                <p className={s.emptyMessage}>Нет коментариев</p>
            ) : (
            <div className={s.list}>
                {comments?.map(item => (
                    <CommentsCard comment={item} key={item.id} />
                ))}
            </div>)
            }
        </div>
    );
};

export default CommentList