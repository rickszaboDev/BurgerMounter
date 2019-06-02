import React from 'react';

import './SideDrawer.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem.js';
import Logo from '../../Logo/Logo.js';

const sideDrawer = (props) => {

    return(
        <div className='SideDrawer'> 
            <NavigationItem link='/'>Teste</NavigationItem>
            <Logo />
        </div>
    );
}

export default sideDrawer;