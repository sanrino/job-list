import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <ul className="menu menu-vertical lg:menu-horizontal text-center text-white">
        <li><Link to="/">Home</Link></li>
      </ul>
    </header>
  )
}

export { Header };
