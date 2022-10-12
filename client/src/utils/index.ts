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
