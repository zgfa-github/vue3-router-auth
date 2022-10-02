export interface IUid { 
    uid: number;
}
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
    children?: IRouter[]
}

export interface IState { 
    uid: number;
    hasAuth: boolean;
    routeTree: IRouter[]
}