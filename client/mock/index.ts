import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: "/mock/api/getRouterAuth",
        method: 'get',
        response: () => { 
            return {
                code: 200,
                message: "ok",
                data: ['a','b']
            }
        }
    }
] as MockMethod[]