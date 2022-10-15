import { IRouter } from '@/types';
/**
 *
 * @param data
 * @returns
 */
export const formatRouteTree = (data: IRouter[]) => {
    const parents = data.filter((routeInfo) => routeInfo.pid === 0);
    const children = data.filter((routeInfo) => routeInfo.pid !== 0);
    dateToTree(parents, children);
    return parents;
    function dateToTree(parents: IRouter[], children: IRouter[]) {
        parents.map((parent) => {
            children.map((child, index) => {
                if (child.pid === parent.id) {
                    let _children: IRouter[] = JSON.parse(
                        JSON.stringify(children),
                    );
                    _children.splice(index, 1);
                    dateToTree([child], _children);
                    if (parent.children) {
                        parent.children.push(child);
                    } else {
                        parent.children = [child];
                    }
                }
            });
        });
    }
};

const mobileReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
/**
 *
 * @param value
 * @returns true | false
 */
export const isMobile = (value: string) => {
    return mobileReg.test(value);
};
///^[0-9a-zA-Z]+$/
var passReg = /^[0-9]\d{5}$/;
/**
 *
 * @param value
 * @returns true | false
 */
export const isPassword = (value: string) => {
    return passReg.test(value);
};

export const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
};

export const spliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
};

export const comb = (arr1, arr2) => {
    let index = 0;
    const res = [];
    for (let a1 of arr1) {
        for (let a2 of arr2) {
            //debugger;
            if (Array.isArray(a1)) {
                res[index++] = [...a1, ...a2];
            } else {
                res[index++] = [a1, a2];
            }
        }
    }
    console.log('射门地');

    console.log(res);

    return res;
};

export const doComb = (arr) => {
    console.log('传参过来进行多维数组组合');
    console.log(arr);
    if (arr.length === 0) return;
    return arr.reduce((prev, current) => {
        return comb(prev, current);
    });
};
