import React from 'react';
import './Modal.css';

import Condenser from '../../../hoc/Condenser.js';
import Backdrop from '../Backdrop/Backdrop.js';

const modal = (props) => {
   return(
    <Condenser>
        <Backdrop show={ props.show } onClosed={props.onModalClosed} />
        <div 
            className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : "translateY(-100vh)",
                opacity: props.show ? '1' : '0',
            }}
            >
            {props.children}
        </div>
    </Condenser>
   );
}

export default modal;