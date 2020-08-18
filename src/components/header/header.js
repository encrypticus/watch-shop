import React from 'react';
import Logo from '#comps/logo';
import Userbar from '#comps/userbar';
import Hamburger from '#comps/hamburger';
import './header.scss';
import HeaderNav from '#comps/header-nav';

const Header = (props) => {
  let hamburgerClassList = 'page-header__hamburger';
  let navClassList = 'page-header__nav';

  if (props.menuHidden) {
    hamburgerClassList += ' page-header__hamburger_hidden';
  }

  if (props.navHidden) {
    navClassList += ' page-header__nav_hidden';
  }

  return (
    <div className='page-header row align-items-center'>

      <div className='col no-v-gutters flex f-start'>
        <div className='logo-wrapper'>
          <div className={hamburgerClassList}>
            <Hamburger/>
          </div>
          <Logo to='/'/>
        </div>
      </div>

      <div className={`col no-v-gutters ${navClassList}`}>
        <HeaderNav/>
      </div>

      <div className='col no-v-gutters'>
        <Userbar/>
      </div>

    </div>
  );
};

export default Header;
