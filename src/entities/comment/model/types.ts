export interface IComment {
    id: number;
    postId: number;
    name: string;
    userId: number;
    email?: string;
    body: string;
    createdAt: string;
}