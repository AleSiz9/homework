import { NavLink } from 'react-router-dom';
import s from './UserTabs.module.css'

interface UserTabsProps {
    id: number
}

const UserTabs = ({id}: UserTabsProps) => {
    return (
        <div className={s.tabs}>
            <NavLink
            to={`/users/${id}/posts`}
            className={({ isActive }) => (isActive ? `${s.tab} ${s.active}` : s.tab)}
            >
                Посты
            </NavLink>
            <NavLink
            to={`/users/${id}/albums`}
            className={({ isActive }) => (isActive ? `${s.tab} ${s.active}` : s.tab)}
            >
                Альбомы
            </NavLink>
            <NavLink
            to={`/users/${id}/todos`}
            className={({ isActive }) => (isActive ? `${s.tab} ${s.active}` : s.tab)}
            >
                Задачи
            </NavLink>
        </div>
    );
};

export default UserTabs;