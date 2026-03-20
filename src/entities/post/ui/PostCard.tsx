import Button from '@/shared/ui/Button/Button';
import { IPostCard } from './type';
import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CommentOutlined } from '@ant-design/icons';
import s from './PostCard.module.css';
import { useGetUserByIdQuery } from '@/entities/user/api/usersApi';

interface PostCardProps {
    post: IPostCard;
    onCommentsClick: (id: number) => void;
}

const PostCard = memo(({ post, onCommentsClick}: PostCardProps) => {

    const { data: user, isError } = useGetUserByIdQuery(post.userId)
    const firstLetterName = user?.name.charAt(0).toUpperCase()

    const truncatedText = useMemo(() => {
        const words = post.body.split(' ')
        const wordsLimit = 20
        if (words.length >= wordsLimit) {
            return words.slice(0, wordsLimit).join(' ') + '...'
        }
        return post.body;
    }, [post.body])

    return (
        <div className={s.posts}>
            <div className={s.post}>
                <div className={s.postTitle}>
                    <Link
                        to={`/posts/${post.id}`}
                        className={s.postText}
                    >
                        {post.title}
                    </Link>
                    <div className={s.postIconContainer}>
                        <Link
                            to={`/users/${post.userId}`}
                            className={s.postIconUser}
                        >
                            {isError ? <span>Упс..</span> : <span >{firstLetterName}</span>}
                        </Link>
                    </div>
                </div>
                <p className={s.post__body}>{truncatedText}</p>
                <Button
                    className={s.btn}
                    type='button'
                    onClick={() => onCommentsClick(post.id)}
                >
                    <CommentOutlined className={s.icon} />
                </Button>
            </div>
        </div>
    );
});

export default PostCard;