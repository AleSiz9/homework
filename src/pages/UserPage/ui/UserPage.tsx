import { Outlet, useParams } from "react-router-dom";
import UserPageSkeleton from "@/shared/ui/Skeleton/UserPageSkeleton/UserPageSkeleton";
import s from './UserPage.module.css'
import { UserTabs } from "@/widgets/UserTabs";
import { useGetUserByIdQuery } from "@/entities/user/api/usersApi";

const UserPage = () => {
    const { id } = useParams<{ id: string }>()
    const { data: user, isLoading, error } = useGetUserByIdQuery(Number(id))

    if (isLoading) return <div><UserPageSkeleton /></div>
    if (!user ) return <div>Пользователь не найден</div>
    if(error) return <div>Ошибка {error.message}</div>
    const firstLetterName = user.name.charAt(0).toUpperCase()
//можно разбить на слои ниже но тк доп интерактива нету оставил так
    return (
        <div className={s.profile}>
            <div className={s.userContainer}>
                <div className={s.userInfo}>
                    <span className={s.avatar}>
                        {firstLetterName}
                    </span>
                    <div className={s.meta}>
                        <span className={s.name}>{user.name}</span>
                        {user.email && <span className={s.email}>{user.email}</span>}
                    </div>
                </div>
            </div>
            <div className={s.container}>
                <UserTabs id={Number(id)} />
                <div className={s.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UserPage;
