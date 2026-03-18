import { usePosts } from '@/entities/post/hooks/usePosts';
import { usePostSort } from '@/entities/post/hooks/usePostSort';
import { PostList } from '@/widgets/PostList';
import { Skeleton } from '@/shared/ui/Skeleton/MainSkeleton/Skeleton';
import { PostControlPanel } from '@/widgets/ControlPanel';
import s from './MainPage.module.css';

const MainPage = () => {
    //сделал рефакторинг для чистоты MainPage и удобства тестирования
    const { posts, loading, error } = usePosts();
    const { sortedPosts, sortOrder, setSortOrder } = usePostSort(posts);

    return (
        <div className={s.container}>
                <PostList
                    posts={sortedPosts}
                    isLoading={loading}
                    loadingFallback={<Skeleton />}
                />
            <aside className={s.panel}>
                <PostControlPanel sortOrder={sortOrder} onSortChange={setSortOrder} />
            </aside>
            {error && <div className={s.error}>{error}</div>}
        </div>
    );
};


export default MainPage;