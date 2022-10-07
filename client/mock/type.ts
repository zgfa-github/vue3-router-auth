export interface IUser { 
    id: number;
    username: string;
    auth: Array<number>;
}

export interface IRouter { 
    id: number;
    pid: number;
    path: string;
    link?: string; 
    name: string;
    title: string;
}