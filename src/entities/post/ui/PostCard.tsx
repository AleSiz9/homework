import { useState } from 'react';
import { IPostCard } from '../model/types';
import s from './PostCard.module.css';

interface PostCardProps  {
    cards: IPostCard[]
}

const PostCard = ({cards}: PostCardProps) => {
    const [limit, setLimit] = useState(10)
    const step = 10

    const handleShowMore = () => {
        setLimit(prev => prev + step)
    }
    const visibleCards = cards.slice(0, limit)
    return (
        <div className={s.posts}>
            {visibleCards.map(card => (
                <div key={card.id} className={s.post}>
                    <h2 className={s.post__title}>{card.title}</h2>
                    <p className={s.post__body}>{card.body}</p>
                </div>
            ))}
            {limit < cards.length && (
                <button
                className={s.button}
                type='button'
                onClick={handleShowMore}
                >Показать еще
                </button>
            )}
        </div>
    );
};

export default PostCard;