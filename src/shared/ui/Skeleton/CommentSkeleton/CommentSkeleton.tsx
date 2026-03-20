import s from './CommentSkeleton.module.css';

interface SkeletonCommentProps {
  count?: number; // количество заглушек (по умолчанию 3)
}

export const CommentSkeleton = ({ count = 3 }: SkeletonCommentProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <article key={index} className={s.skeletonCard}>
          <div className={s.content}>
            <div className={s.info}>
              <span className={s.skeletonAvatar}></span>
              <div className={s.userInfo}>
                <div className={s.skeletonName}></div>
                <div className={s.skeletonEmail}></div>
              </div>
            </div>
          </div>
          <div className={s.skeletonBody}></div>
        </article>
      ))}
    </>
  );
};