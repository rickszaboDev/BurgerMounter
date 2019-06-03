import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';

const toolbar = (props) => {
    return (
    <header className='Toolbar'>
        <div>MENU</div>
        <div style={{height:'80%'}}>
            <Logo />
        </div>
        <nav className='DesktopOnly'><NavigationItems /></nav>
    </header>
    );
}

export default toolbar;
