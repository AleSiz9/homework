import { IComment } from '../model/types';
import s from './CommentsCard.module.css';

interface CommentsCardProps {
    comment: IComment;
}

const CommentsCard = ({ comment }: CommentsCardProps) => {
    // Форматируем дату (если есть)
    const formattedDate = comment.createdAt
        ? new Date(comment.createdAt).toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
        : null;

    return (
        <article className={s.card}>
            <div className={s.content}>
                <div className={s.info}>
                    <div className={s.avatar}>
                        <span>{comment.name?.charAt(0).toUpperCase()}</span>
                    </div>
                    <div className={s.userInfo}>
                        <span className={s.name}>{comment.name}</span>
                        {comment.email && <span className={s.email}>{comment.email}</span>}
                    </div>
                </div>
            </div>
            <p className={s.cardBody}>{comment.body}</p>
                {formattedDate && <time className={s.date}>{formattedDate}</time>}
        </article>
    );
};

export default CommentsCard;