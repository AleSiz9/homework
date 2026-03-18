import s from './PostCard.module.css';
import Button from '@/shared/ui/Button/Button';
import { IPostCard } from './type';
import { memo } from 'react';

interface PostCardProps {
    cards: IPostCard
    onCommentsClick: (id: number) => void
}


const PostCard = memo(({ cards, onCommentsClick }: PostCardProps) => {

    return (
        <div className={s.posts}>
                <div className={s.post}>
                    <h2 className={s.post__title}>{cards.title}</h2>
                    <p className={s.post__body}>{cards.body}</p>
                    <Button type='button' onClick={() =>onCommentsClick(cards.id)}
                        >
                        Коментарии
                    </Button>
                </div>
        </div>
    );
});

export default PostCard;