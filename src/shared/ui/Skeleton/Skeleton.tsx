import s from './Skeleton.module.css';

interface SkeletonProps {
  count?: number;
  className?: string;
}

export const Skeleton = ({ count = 3, className = '' }: SkeletonProps) => {
  return (
    <div className={`${s.skeleton} ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={s.skeleton__item}>
          <div className={s.skeleton__title} />
          <div className={s.skeleton__text} />
          <div className={s.skeleton__button} />
        </div>
      ))}
    </div>
  );
};