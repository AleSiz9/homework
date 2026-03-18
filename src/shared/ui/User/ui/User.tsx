import { IUser } from '@/entities/comment/model/types';
import s from './User.module.css'

interface UserProps {
    user: IUser
}

const User = ({ user }: UserProps) => {
    const firstLetterName = user.name.charAt(0).toUpperCase()
    return (
        <div className={s.user}>
            <div className={s.conteiner}>
            {user.avatar ? (
                <img src={user.avatar} alt={user.name} className={s.avatarImage} />
            ) : (
                <span className={s.avatar}>
                    {firstLetterName}
                </span>
            )}
            <div className={s.info}>
                <span className={s.name}>{user.name}</span>
                {user.email && <span className={s.email}>{user.email}</span>}
            </div>
            </div>
        </div>
    );
};

export default User;