import React from 'react';

import BuildControl from './BuildControl/BuildControl.js'
import './BuildControls.css';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
];

const buildControls = (props) =>{
    return(
    <div className='BurgerControls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(
            el => {
                return <BuildControl 
                    key={el.type}
                    label={el.label}
                    type={el.type} 
                    added={() => props.addIngredient(el.type)}
                    removed={() => props.removeIngredient(el.type)}
                    disabled={props.disableInfo[el.type]} 
                />
            }
        )}
    </div>
    );
}

export default buildControls;