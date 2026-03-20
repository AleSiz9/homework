import { useParams } from 'react-router-dom';
import s from './UserPostsPage.module.css'
import { useGetPostsByUserQuery } from '@/entities/post/api/postsApi';

const UserPostsPage = () => {
    const { id } = useParams<{ id: string }>()
    const { data: posts, isLoading, error } = useGetPostsByUserQuery(Number(id))
    if (error) return <div>Ошибка {error.message}</div>
    //можно разбить на слои ниже но тк доп интерактива нету оставил так
    return (
        <div>
            {isLoading ?
                <div>Загрузка...</div>
                :
                <div className={s.userPosts}>
                    {posts?.map(post => (
                        <div key={post.id} className={s.post}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default UserPostsPage;