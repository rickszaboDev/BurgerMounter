import React, { Component } from 'react';

import Condenser from '../../hoc/Condenser.js';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';

class Layout extends Component {

    state = {
        sideDrawerShow: true
    }

    closeSideDrawerHandler = () => {
        this.setState({ sideDrawerShow: false });
    }

    render(){
        return(
            <Condenser>
                <SideDrawer show={this.state.sideDrawerShow} closed={this.closeSideDrawerHandler}/>
                <Toolbar />
                <main className="Content">
                    {this.props.children}
                </main>
            </Condenser>
        );
    }
}

export default Layout;