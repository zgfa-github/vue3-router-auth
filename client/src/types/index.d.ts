/**
 * 这是路由权限声明：如下
 */
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
/**
 * 订单声明：如下
 */
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
/**  英语单词列表接口声明类型
 *
 */
export interface IEnglist {
    params: {
        info: {
            pageNum: number;
            pageSize: number;
            searchKey: string;
        };
    };
}
export interface IWord {
    params: {
        index: number | null;
        world: string;
        chinese: string;
    };
}
export interface IWordId {
    params: {
        english: null;
    };
}
//End
//这个在Paging导入会报错，提示加载不进来
export interface IChildProps {
    tableData: {
        data: IOrderDetails[];
        th: { name: string; label: string }[];
        total: number;
    };
}
