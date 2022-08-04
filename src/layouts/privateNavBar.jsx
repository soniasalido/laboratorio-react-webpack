import React, {useContext} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../core/auth/';

export const PrivateNavBar = () => {


    const navigate = useNavigate();
    const { user, logout } =  useContext(AuthContext);


    // Cuando ponemos replace a true para que reemplace la url, no se ejecuta el cambio de url. Se evita que se pueda
    // volver atrás.
    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

                <Link
                    className="navbar-brand"
                    to="/members"
                >
                    Miembros
                </Link>


                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                            to="/search?q=lemoncode"
                        >
                            Buscar
                        </NavLink>

                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary">
                        { user?.name }
                    </span>

                        <button
                            className="nav-item nav-link btn"
                            onClick={ onLogout }
                        >
                            Logout
                        </button>

                    </ul>
                </div>
            </nav>

        </>

    )
}