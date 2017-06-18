/**
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';


/**
 * Component
 */
const Nav = () => (
  <nav>
    <NavLink exact to="/">Accueil</NavLink>
    <NavLink exact to="/urls">Vos urls</NavLink>
  </nav>
);


/**
 * Export defulat
 */
export default Nav;
