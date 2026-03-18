import s from './PostPageSkeleton.module.css';

const PostPageSkeleton = () => {
  return (
    <div className={s.posts}>
      <div className={s.post}>
        <div className={s.skeletonTitle}></div>
        <div className={s.skeletonBody}></div>
        <div className={s.skeletonBody}></div>
        <div className={s.skeletonBody}></div>
        <div className={s.skeletonCommentTitle}></div>
        <div className={s.skeletonComment}></div>
        <div className={s.skeletonComment}></div>
        <div className={s.skeletonComment}></div>
      </div>
    </div>
  );
};

export default PostPageSkeleton;