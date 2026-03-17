import { SortOrder } from "@/shared/types/sort";
import s from './PostFilter.module.css'
import { ChangeEvent } from "react";


interface PostLengthFilterProps {
    sortOrder: SortOrder;
    onSortChange: (order: SortOrder) => void;
}

const PostLengthFilter = ({ sortOrder, onSortChange }: PostLengthFilterProps) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        onSortChange(value === 'null' ? null : (value as SortOrder));
    };

    return (
        <select
            className={s.select}
            value={sortOrder === null ? 'null' : sortOrder}
            onChange={handleChange}
            aria-label="Сортировка постов по длинне"
        >
            <option value="null">Без сортировки</option>
            <option value="asc">Сначала короткие</option>
            <option value="desc">Сначала длинные</option>
        </select>
    );
};

export default PostLengthFilter;