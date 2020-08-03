import React from 'react';
import Logo from '#comps/logo';
import Userbar from '#comps/userbar';
import Hamburger from '#comps/hamburger';
import './header.scss';

const Header = (props) => {
  let classList = 'page-header__hamburger';
  if (props.menuHidden) {
    classList += ' page-header__hamburger_hidden'
  }

  return (
    <div className='page-header row align-items-center'>

      <div className='col no-v-gutters flex f-start'>
        <div className={classList}>
          <Hamburger/>
        </div>
        <Logo to='/'/>
      </div>

      <div className='col no-v-gutters'>
        <Userbar/>
      </div>

    </div>
  );
};

export default Header;
