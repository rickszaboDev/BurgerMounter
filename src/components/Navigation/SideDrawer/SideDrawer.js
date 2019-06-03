import React from 'react';

import './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import Logo from '../../Logo/Logo.js';
import Backdrop from '../../UI/Backdrop/Backdrop.js';
import Condenser from '../../../hoc/Condenser.js';

const sideDrawer = (props) => {

    const sideDrawerShow = props.show ? 'Open' : 'Closed';
    console.log(sideDrawerShow);
    return(
        <Condenser>
            <Backdrop show={props.show} onClosed={props.closed} />
            <div className={'SideDrawer ' + sideDrawerShow}> 
                <div style={{ height: '11%'}}>
                    <Logo />
                </div>
                
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Condenser>
    );
}

export default sideDrawer;