import { IComment } from '../model/types';
import s from './CommentsCard.module.css';

interface CommentsCardProps {
    comment: IComment;
}

const CommentsCard = ({ comment }: CommentsCardProps) => {

    const firstLetterName = comment.email.charAt(0).toUpperCase()

    return (
        <article className={s.card}>
            <div className={s.content}>
                <div className={s.info}>
                    <span className={s.avatar}>
                        <span>{firstLetterName}</span>
                    </span>
                    <div className={s.userInfo}>
                        <span className={s.email}>{comment.email}</span>
                    </div>
                </div>
            </div>
            <p className={s.cardBody}>{comment.body}</p>
        </article>
    );
};

export default CommentsCard;