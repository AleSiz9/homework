import { usePosts } from '@/entities/post/hooks/usePosts';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import s from './UserPostsPage.module.css'

const UserPostsPage = () => {
    const { id } = useParams<{ id: string }>()
    const { posts } = usePosts()
    const userPosts = useMemo(() => posts.filter(item => item.userId === Number(id)), [posts, id])
    return (
        <div>
            <div className={s.userPosts}>
                {userPosts.map(post => (
                    <div key={post.id} className={s.post}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPostsPage;