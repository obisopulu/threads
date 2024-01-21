export interface thread{
    id: string;
    author: User;
    content: string;
    image?: string;
    replies?: Reply[];
    repliesCount: Number;
    likesCount: Number;
    mention?: boolean;
    mentionUser?: User;
    CreatedAt: string;
}

export interface Reply{
    id: string;
    author: User;
    content: string;
    likes: Number;
    CreatedAt: string;
}

export interface User{
    id: string;
    name: string;
    username: string;
    verified: boolean;
    photo: string;
    bio: string;
    link?: string;
    followers: User[];
}