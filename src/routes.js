import Home from './views/Home';
import {Results, Notifications} from './views/Results';


const appRoutes = [
    {
        title: 'Home',
        path: '/',
        exact: true,
        view: Home
    },
    {
        title: 'Results',
        path: '/results',
        view: Results
    },
    {
        title: 'Notifications',
        path: '/notifications',
        view: Notifications
    }
]

export default appRoutes;