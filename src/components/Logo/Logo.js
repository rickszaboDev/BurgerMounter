import React from 'react';

import LogoImg from '../../assets/burger-logo.png';
import './Logo.css';

const logo = (props) => {
    return(
        <div className='Logo'>
            <img src={ LogoImg } />
        </div>
    );
}

export default logo;