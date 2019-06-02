import React from 'react';

import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem.js'

const navigationItems = (props) => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem
                link='/'
                active
            >Burger Build</NavigationItem>
            <NavigationItem
                link='/'
                
            >Checkout</NavigationItem>
        </ul>
        
    );
}

export default navigationItems;