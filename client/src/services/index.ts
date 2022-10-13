// import * as getCourseList from './modules/course';
import { getCourseList } from './modules/course';
import { getEnglishList, addEnglish, deleteEnglish } from './modules/english';
import { getDetailList } from './modules/order';
import { getGoodsList } from './modules/goods';
import { getRouterAuth, login } from './modules/system/login';
// export const API = Object.assign(
//     {},
//     login,
//     getCourseList,
//     getEnglishList,
//     addEnglish,
//     deleteEnglish,
//     getDetailList,
//     getRouterAuth,
// );
export {
    login,
    getRouterAuth,
    getCourseList,
    getEnglishList,
    addEnglish,
    deleteEnglish,
    getDetailList,
    getGoodsList,
};
