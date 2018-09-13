import Home from './views/Home';
import {Results, Notifications} from './views/Results';


const fullPath = (path) => process.env.PUBLIC_URL + path;

const appRoutes = [
    {
        title: 'Home',
        path: fullPath('/'),
        exact: true,
        view: Home
    },
    {
        title: 'Results',
        path: fullPath('/results'),
        view: Results
    },
    {
        title: 'Notifications',
        path: fullPath('/notifications'),
        view: Notifications
    }
]

export default appRoutes;