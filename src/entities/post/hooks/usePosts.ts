import { useCallback, useEffect, useState } from "react";
import { IPostCard } from "../ui/type";
import { mockPosts } from "@/shared/mock/posts";


export const usePosts = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [posts, setPosts] = useState<IPostCard[]>([]);

    async function mockFetch() {
        return new Promise<IPostCard[]>((resolve) => {
            const delay = Math.random() * 1000 + 500
            setTimeout(() => {
                resolve(mockPosts)
            }, delay)
        }
        )
    }
    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true);
            setError('');
            const result = await mockFetch();
            setPosts(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return { posts, loading, error, refetch: fetchPosts };
};