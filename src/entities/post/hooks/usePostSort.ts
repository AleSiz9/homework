// hooks/usePostSort.ts
import { useMemo, useState } from 'react';
import { IPostCard } from '../ui/type';
import { sortByTitleLengthAsc, sortByTitleLengthDesc } from '@/features/PostLengthFilter/lib/filterByLength';
import { SortOrder } from '@/shared/types/sort';

export const usePostSort = (initialPosts: IPostCard[]) => {
    const [sortOrder, setSortOrder] = useState<SortOrder>(null);

    const sortedPosts = useMemo(() => {
        switch (sortOrder) {
            case 'asc':
                return sortByTitleLengthAsc(initialPosts);
            case 'desc':
                return sortByTitleLengthDesc(initialPosts);
            default:
                return initialPosts
        }
    }, [initialPosts, sortOrder]);

    return { sortedPosts, sortOrder, setSortOrder };
};