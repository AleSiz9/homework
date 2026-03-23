import { usePostSort } from '@/entities/post/hooks/usePostSort';
import { PostList } from '@/widgets/PostList';
import { Skeleton } from '@/shared/ui/Skeleton/MainSkeleton/Skeleton';
import { PostControlPanel } from '@/widgets/ControlPanel';
import s from './MainPage.module.css';
import { useGetPostsQuery } from '@/entities/post/api/postsApi';

const MainPage = () => {
    const { data: posts, isLoading, error} = useGetPostsQuery()
    const { sortedPosts, sortOrder, setSortOrder } = usePostSort(posts ?? []);
    return (
        <div className={s.container}>
            {error ? (
                <div>Произошла ошибка, {error.message}</div>
            ) : (
                <PostList
                    posts={sortedPosts}
                    isLoading={isLoading}
                    loadingFallback={<Skeleton />}
                />
            )}
            <aside className={s.panel}>
                <PostControlPanel sortOrder={sortOrder} onSortChange={setSortOrder} />
            </aside>
        </div>
    );
};


export default MainPage;