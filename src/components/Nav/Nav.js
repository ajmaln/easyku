import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom'
import appRoutes from '../../routes';


class Nav extends React.Component {

    render() {
        return(
            <nav className='nav'>
                {
                    appRoutes.map((route, index) => 
                        <Link key={index} to={route.path} className={window.location.pathname === route.path ? 'active' : ''}>{route.title}</Link>
                    )
                }
            </nav>
        )
    }
}

export default Nav;