import { usePosts } from '@/entities/post/hooks/usePosts';
import { usePostSort } from '@/entities/post/hooks/usePostSort';
import { mockComments } from '@/shared/mock/coments';
import { PostList } from '@/widgets/PostList';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { PostControlPanel } from '@/widgets/ControlPanel';
import s from './MainPage.module.css';

const MainPage = () => {
  const { posts, loading, error } = usePosts();
  const { sortedPosts, sortOrder, setSortOrder } = usePostSort(posts);

  return (
    <div className={s.container}>
      <div className={s.postList}>
        <PostList
          comments={mockComments}
          posts={sortedPosts}
          isLoading={loading}
          loadingFallback={<Skeleton />}
        />
      </div>
      <aside className={s.panel}>
        <PostControlPanel sortOrder={sortOrder} onSortChange={setSortOrder} />
      </aside>
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};


export default MainPage;