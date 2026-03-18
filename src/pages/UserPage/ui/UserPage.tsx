import { useUsers } from "@/entities/user/hooks/useUsers";
import { User } from "@/shared/ui/User";
import { Outlet, useParams } from "react-router-dom";
import UserPageSkeleton from "@/shared/ui/Skeleton/UserPageSkeleton/UserPageSkeleton";
import s from './UserPage.module.css'
import { UserTabs } from "@/widgets/UserTabs";

const UserPage = () => {
    const { id } = useParams<{ id: string }>()
    const { loading, getUserById } = useUsers()
    const user = getUserById(Number(id))

    if (loading) return <div><UserPageSkeleton /></div>
    if (!user) return <div>Пользователь не найден</div>


    return (
        <div className={s.profile}>
            <User user={user} />
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
