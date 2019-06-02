import React from 'react';
import './Modal.css';

const modal = (props) => {
   return(
    <div 
        className="Modal"
        style={{
            transform: props.show ? 'translateY(0)' : "translateY(-100vh)",
            opacity: props.show ? '0' : '1',
        }}
        >
        {props.children}
    </div>
   );
}

export default modal;