import CommentsCard from '@/entities/comment/ui/CommentsCard';
import { IComment } from '@/entities/comment';
import s from './CommentList.module.css';

interface CommentListProps {
    comments: IComment[];
}

const CommentList = ({ comments }: CommentListProps) => {

    return (
        <div className={s.commentList}>
            {comments.length === 0 ? (
                <div className={s.emptyMessage}>Нет коментариев</div>
            ) : (
            <div className={s.list}>
                {comments.map(item => (
                    <CommentsCard comment={item} key={item.id} />
                ))}
            </div>)
            }
        </div>
    );
};

export default CommentList