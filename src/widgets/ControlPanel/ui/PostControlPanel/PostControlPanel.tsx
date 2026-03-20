import { PostLengthFilter } from '@/features/PostLengthFilter';
import { SortOrder } from '@/shared/types/sort';
import s from './PostControlPanel.module.css'

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