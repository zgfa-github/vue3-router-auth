import { MockMethod } from 'vite-plugin-mock';
import {
    resultSuccess,
    resultError,
    getRequestToken,
    requestParams,
} from '../_utils';
export default [
    {
        url: '/mock/api/getGoodsList',
        timeout: 3000,
        method: 'get',
        response: () => {
            return resultSuccess({});
        },
    },
] as MockMethod[];
