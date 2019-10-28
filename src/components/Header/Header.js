import React from 'react';

import './header.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Facebook logo" />
      <strong>Meu perfil</strong>
    </header>
  );
}

export default Header;
