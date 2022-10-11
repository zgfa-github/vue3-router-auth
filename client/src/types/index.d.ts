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
    children?: IRouter[];
}

export interface IState {
    uid: number;
    hasAuth: boolean;
    routeTree: IRouter[];
    courseInfo: { courseList: []; total: number };
    token: string | null;
}
export interface IOrderDetails {
    name: string;
    num: number;
    sales: number;
    size: string;
    address: string;
}
export interface IProps {
    data: IOrderDetails[];
    th: { name: string; label: string }[];
    total: number;
}
//这个在Paging导入会报错，提示加载不进来
export interface IChildProps {
    tableData: {
        data: IOrderDetails[];
        th: { name: string; label: string }[];
        total: number;
    };
}
