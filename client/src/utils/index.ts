import { IRouter } from "@/types";

export const formatRouteTree = (data: IRouter[]) => { 
    const parents = data.filter(routeInfo => routeInfo.pid === 0);
    const children = data.filter(routeInfo => routeInfo.pid !== 0);
    dateToTree(parents, children);
    return parents;
    function dateToTree(parents: IRouter[], children: IRouter[]) { 
        parents.map((parent) => { 
            children.map((child, index) => { 
                if (child.pid === parent.id) {
                    let _children: IRouter[] = JSON.parse(JSON.stringify(children))
                    _children.splice(index, 1)
                    dateToTree([child], _children);
                    if (parent.children) {
                        parent.children.push(child);
                    } else { 
                        parent.children = [child]
                    }
                 }
            })
        })
    }
}

