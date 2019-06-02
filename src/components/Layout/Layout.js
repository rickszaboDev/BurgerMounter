import React from 'react';

import Condenser from '../../hoc/Condenser.js';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';

const Layout = (props) => (
    <Condenser>
        <SideDrawer />
        <Toolbar />
        <main className="Content">
            {props.children}
        </main>
    </Condenser>
);

export default Layout;