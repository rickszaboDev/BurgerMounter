import React from 'react';

import BuildControl from './BuildControl/BuildControl.js'
import './BurgerControls.css';

state = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
];

const buildControls = (props) =>{
    return(
    <div className='BurgerControls'>
        {this.state.map(
            el => {
                return <BuildControl label={el.label} type={el.type} />
            }
        )}
    </div>
    );
}

export default buildControls;