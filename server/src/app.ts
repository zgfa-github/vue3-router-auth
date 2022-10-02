import express, { Application, IRoute, Request, Response} from 'express'
import bodyParser from 'body-parser';
import { 
    users,
    Routes
} from './data'
import { IUser ,IRouter} from './data/type';

const app: Application = express();
const PORT: number = 8081;
interface IBody { 
    uid: number;
}
/**
 * 中间件
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/getRouterAuth', (request: Request, response: Response) => { 
    const { uid }: IBody = request.body;
    let authRouteList: IRouter[] = []
    if (uid) {
        const userInfo: IUser | undefined = users.find(user => user.id == uid)
        if (userInfo) {
            userInfo.auth.map(rid => {
                Routes.map((route: IRouter) => {
                    if (route.id === rid) {
                        authRouteList.push(route)
                    }

                })
            })
            response.status(200).send({
                data: authRouteList
            })
        } else {
            response.status(200).send({
                msg: 'No userInfo for this UID',
                data: null
            })
        }
    } else { 
        response.status(200).send({
            msg: 'No UID received',
            data: null
        })
    }
})
app.listen(PORT, () => {
    console.log('Server is running on' + PORT + '.')
})