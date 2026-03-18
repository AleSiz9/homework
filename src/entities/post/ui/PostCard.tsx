import Button from '@/shared/ui/Button/Button';
import { IPostCard } from './type';
import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CommentOutlined } from '@ant-design/icons';
import s from './PostCard.module.css';
import { useUsers } from '@/entities/user/hooks/useUsers';


interface PostCardProps {
    cards: IPostCard
    onCommentsClick: (id: number) => void
}


const PostCard = memo(({ cards, onCommentsClick }: PostCardProps) => {
    const { getUserById } = useUsers()
    const user = getUserById(cards.userId)
    const firstLetterName = user?.name.charAt(0).toUpperCase()
    const truncatedText = useMemo(() => {
        const words = cards.body.split(' ')
        const wordsLimit = 30
        if (words.length >= wordsLimit) {
            return words.slice(0, wordsLimit).join(' ') + '...'
        }
        return cards.body;
    }, [cards.body])

    return (
        <div className={s.posts}>
            <div className={s.post}>
                <div className={s.postTitle}>
                    <Link
                        to={`/posts/${cards.id}`}
                        className={s.postText}
                    >{cards.title}
                    </Link>
                    <div className={s.postIconContainer}>
                    <Link
                        to={`/users/${cards.userId}`}
                        className={s.postIconUser}
                    >
                        <span >
                            {firstLetterName}</span>
                    </Link>
                    </div>
                </div>
                <p className={s.post__body}>{truncatedText}</p>
                <Button className={s.width100} type='button' onClick={() => onCommentsClick(cards.id)}
                >
                    <CommentOutlined className={s.icon} />
                </Button>
            </div>
        </div>
    );
});

export default PostCard;