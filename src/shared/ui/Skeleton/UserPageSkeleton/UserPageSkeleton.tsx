import s from './UserPageSleleton.module.css';

const UserPageSkeleton = () => {
    return (
        <div className={s.profile}>
            {/* Скелетон компонента User */}
            <div className={s.skeletonUser}>
                <div className={s.skeletonAvatar}></div>
                <div className={s.skeletonUserInfo}>
                    <div className={s.skeletonName}></div>
                    <div className={s.skeletonEmail}></div>
                </div>
            </div>

            <div className={s.container}>
                <section className={s.section}>
                    {/* Кнопки-вкладки (скелетон) */}
                    <div className={s.tabButtons}>
                        <div className={s.skeletonTabButton}></div>
                        <div className={s.skeletonTabButton}></div>
                    </div>

                    {/* Контент вкладок (скелетон) */}
                    <div className={s.tabContent}>
                        <div className={s.skeletonTabContent}>
                            <div className={s.skeletonItem}></div>
                            <div className={s.skeletonItem}></div>
                            <div className={s.skeletonItem}></div>
                        </div>
                    </div>
                </section>

                {/* Список постов (скелетон) */}
                <div className={s.userPosts}>
                    <div className={s.skeletonPost}></div>
                    <div className={s.skeletonPost}></div>
                    <div className={s.skeletonPost}></div>
                </div>
            </div>
        </div>
    );
};

export default UserPageSkeleton;