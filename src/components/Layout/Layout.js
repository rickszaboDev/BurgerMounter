import React from 'react';

import Condenser from '../../hoc/Condenser.js';
import './Layout.css';

const Layout = (props) => (
    <Condenser>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Condenser>
);

export default Layout;