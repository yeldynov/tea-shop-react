import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>
            <img className='logo' src={logo} alt='logo' />
          </div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='shop'>
            МАГАЗИН
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              ВИЙТИ
            </span>
          ) : (
            <Link className='nav-link' to='auth'>
              УВІЙТИ
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
