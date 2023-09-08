import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../hooks/context/useUserContext';
import { ABOUT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Header = () => {
  let navigate = useNavigate();

  const { user, setUser } = useUserContext();
  const { isAuth } = user;

  const logOut = () => {
    setUser({
      email: '',
      isAuth: false,
    });

    localStorage.removeItem("token");

    navigate(HOME_ROUTE);
  }

  return (
    <header className='header'>
      <ul className="menu menu-vertical lg:menu-horizontal text-center text-white">
        <li><Link to={HOME_ROUTE}>Home</Link></li>
        <li><Link to={ABOUT_ROUTE}>About</Link></li>
      </ul>
      <div>

        {
          isAuth ?
            <>
              <Link className="btn mr-5" to={PROFILE_ROUTE}>Profile</Link>
              <button className="btn" onClick={() => logOut()}>Logout</button>
            </>
            :
            <>
              <Link className="btn mr-5" to={LOGIN_ROUTE}>Sign In</Link>
              <Link className="btn mr-5" to={REGISTRATION_ROUTE}>Sign Up</Link></>
        }

      </div>
    </header>
  )
}

export { Header };
