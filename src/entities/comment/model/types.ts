export interface IComment {
    id: number;
    postId: number;
    userId: number;
    body: string;
    createdAt: string;
}

export interface IUser{
    id: number;
    name: string;
    email: string;
    avatar?: string;
}