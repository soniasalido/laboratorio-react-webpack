import React from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';

export const NavBar = () => {

    const user = true;

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/login"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/about"
                    >
                        About
                    </NavLink>

                </div>
            </div>


        </nav>

    )
}