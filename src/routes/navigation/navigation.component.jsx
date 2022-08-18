import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './navigation.styles.scss';

const Navigation = () => {
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
          <Link className='nav-link' to='auth'>
            УВІЙТИ
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
