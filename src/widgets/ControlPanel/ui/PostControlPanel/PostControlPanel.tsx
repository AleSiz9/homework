import { PostLengthFilter } from '@/features/PostLengthFilter';
import { SortOrder } from '@/shared/types/sort';

interface PostControlPanelProps {
    sortOrder: SortOrder;
    onSortChange: (order: SortOrder) => void;
}

const PostControlPanel = ({ sortOrder, onSortChange }: PostControlPanelProps) => {

    return (
        <>
            <PostLengthFilter sortOrder={sortOrder} onSortChange={onSortChange} />
        </>
    );
};

export default PostControlPanel;