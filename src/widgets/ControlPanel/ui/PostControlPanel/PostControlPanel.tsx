import { PostLengthFilter } from '@/features/PostLengthFilter';
import s from './PostControlPanel.module.css'
import type { SortOrder } from '@/shared/types/sort';

interface PostControlPanelProps {
    sortOrder: SortOrder;
    onSortChange: (order: SortOrder) => void;
}
//панель для сбора всех фильтров
const PostControlPanel = ({ sortOrder, onSortChange }: PostControlPanelProps) => {
    
    return (
        <aside className={s.panel}>
            <PostLengthFilter sortOrder={sortOrder} onSortChange={onSortChange} />
        </aside>
    );
};

export default PostControlPanel;