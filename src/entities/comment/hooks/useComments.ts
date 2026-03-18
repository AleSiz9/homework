import { useState, useEffect, useCallback } from 'react';
import { IComment } from '../model/types';
import { mockComments } from '../mocks/coments';


export const useComments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function mockFetch() {
        return new Promise<IComment[]>((resolve) => {
            const delay = Math.random() * 1000 + 500
            setTimeout(() => {
                resolve(mockComments)
            }, delay)
        }
        )
    }
    const fetchComments = useCallback(async () => {
        try {
            setLoading(true);
            setError('');
            const result = await mockFetch();
            setComments(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchComments()
    }, [fetchComments])

    const getCommentsByPostId = (postId: number) => {
        return comments.filter(c => c.postId === postId);
    };

    return { comments, loading, error, getCommentsByPostId };
};