import type { IPostCard } from "@/entities/post";
import type { SortOrder } from "@/shared/types/sort";

interface SortOptions<T> {
  order?: SortOrder;
  key?: keyof T;
  compareFn?: (a: T, b: T) => number;
}

function sortBy<T>(items: T[], options: SortOptions<T>): T[] {
  const { order = 'asc', key, compareFn } = options;
  const sorted = [...items];

  if (compareFn) {
    sorted.sort(compareFn);
  } else if (key) {
    sorted.sort((a, b) => {
      const valA = a[key];
      const valB = b[key];
      if (valA < valB) return order === 'asc' ? -1 : 1;
      if (valA > valB) return order === 'asc' ? 1 : -1;
      return 0;
    });
  } else {
    throw new Error('Необходимо указать key или compareFn');
  }
  return sorted;
}

export const sortByTitleLengthAsc = (posts: IPostCard[]): IPostCard[] =>
  sortBy(posts, { compareFn: (a, b) => a.title.length - b.title.length });

export const sortByTitleLengthDesc = (posts: IPostCard[]): IPostCard[] =>
  sortBy(posts, { compareFn: (a, b) => b.title.length - a.title.length });

export default sortBy;
