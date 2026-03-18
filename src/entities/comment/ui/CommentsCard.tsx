import { Link } from 'react-router-dom';
import { IComment } from '../model/types';
import s from './CommentsCard.module.css';
import { useUsers } from '@/entities/user/hooks/useUsers';

interface CommentsCardProps {
    comment: IComment;
}

const CommentsCard = ({ comment }: CommentsCardProps) => {

    const {users} = useUsers()
    const user = users.find(i => i.id === comment.userId)
    const firstLetterName = user?.name.charAt(0).toUpperCase()
    const formattedDate = comment.createdAt
        ? new Date(comment.createdAt).toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }) : null;

    return (
        <article className={s.card}>
            <div className={s.content}>
                <div className={s.info}>
                    <Link to={`/users/${comment.userId}`} className={s.avatar}>
                        <span>{firstLetterName}</span>
                    </Link>
                    <div className={s.userInfo}>
                        <span className={s.name}>{user?.name}</span>
                        {user?.email && <span className={s.email}>{user.email}</span>}
                    </div>
                </div>
            </div>
            <p className={s.cardBody}>{comment.body}</p>
                {formattedDate && <time className={s.date}>{formattedDate}</time>}
        </article>
    );
};

export default CommentsCard;