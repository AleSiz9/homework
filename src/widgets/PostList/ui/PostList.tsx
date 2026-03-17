import { ReactNode, useCallback, useMemo, useState } from "react";
import PostCard from "@/entities/post/ui/PostCard";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { PostCommentsModal } from "@/features/PoctCommentsModal";
import Button from "@/shared/ui/Button/Button";
import { IPostCard } from "@/entities/post";
import { IComment } from "@/entities/comment";
import s from './PostLict.module.css'


interface PostListProps {
    posts: IPostCard[]
    comments: IComment[];
    isLoading?: boolean;
    loadingFallback?: ReactNode;
}

const PostList = ({ posts, comments, isLoading, loadingFallback }: PostListProps) => {
    const [limit, setLimit] = useState(10);
    const step = 10;
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    const visibleCards = useMemo(() => posts.slice(0, limit), [posts, limit])
    const selectedPost = posts.find(post => post.id === selectedPostId);
    const postComments = useMemo(() => selectedPostId ? comments.filter(c => c.postId === selectedPostId) : [], [comments, selectedPostId])

    const handleShowMore = () => setLimit(prev => prev + step)
    const handleOpenComents = useCallback((postId: number) => setSelectedPostId(postId), [])
    const handleCloseModal = () => setSelectedPostId(null);

    if (isLoading) return <>{loadingFallback}</>;

    return (
        <div className={s.postContent}>
            {visibleCards.map(post => (
                <PostCard
                    key={post.id}
                    cards={post}
                    onCommentsClick={handleOpenComents}
                />
            )
            )}
            {limit < posts.length && (
                <Button
                    className={s.button}
                    type='button'
                    onClick={handleShowMore}
                >
                    Показать еще
                </Button>
            )}
                <PostCommentsModal
                    post={selectedPost ? selectedPost : null}
                    onClose={handleCloseModal}
                    isOpen={selectedPost !== null}
                    comments={postComments}
                />
        </div>
    );
};

const PostListWithLoading = withLoading(PostList)

export default PostListWithLoading