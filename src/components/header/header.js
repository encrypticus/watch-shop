import React from 'react';
import Logo from '#comps/logo';
import Userbar from '#comps/userbar';
import Hamburger from '#comps/hamburger';

const Header = () => {

  return (
    <div className='row align-items-center'>

      <div className='col no-v-gutters flex f-start'>
        <Hamburger/>
        <Logo/>
      </div>

      <div className='col no-v-gutters'>
        <Userbar/>
      </div>

    </div>
  );
};

export default Header;
