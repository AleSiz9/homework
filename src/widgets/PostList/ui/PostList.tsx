import { ReactNode, useCallback, useMemo, useState } from "react";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { IPostCard } from "@/entities/post";
import { PostModal } from "@/features/PostModal";
import PostCard from "@/entities/post/ui/PostCard";
import Button from "@/shared/ui/Button/Button";
import s from './PostLict.module.css'

interface PostListProps {
    posts: IPostCard[]
    isLoading?: boolean;
    loadingFallback?: ReactNode;
}

const PostList = ({ posts, isLoading, loadingFallback }: PostListProps) => {
    const [limit, setLimit] = useState(10);
    const step = 10;
    const visibleCards = useMemo(() => posts.slice(0, limit), [posts, limit])
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
    
    const handleShowLimit = () => setLimit(prev => prev + step)
    const handleOpenComents = useCallback((postId: number) => setSelectedPostId(postId), [])
    const handleCloseModal = () => setSelectedPostId(null);
    
    if (isLoading) return <>{loadingFallback}</>;

    return (
        <div className={s.postContent}>
            {visibleCards.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                    onCommentsClick={handleOpenComents}
                />
            )
            )}
            {limit < posts.length && (
                <Button
                    className={s.button}
                    type='button'
                    onClick={handleShowLimit}
                >
                    Показать еще
                </Button>
            )}
            {selectedPostId !== null &&
                <PostModal
                    id={selectedPostId}
                    onClose={handleCloseModal}
                    isOpen={selectedPostId !== null}
                />
            }
        </div>
    );
};

const PostListWithLoading = withLoading(PostList)

export default PostListWithLoading