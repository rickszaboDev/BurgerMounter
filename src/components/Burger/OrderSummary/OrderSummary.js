import React from 'react';

import Condenser from '../../../hoc/Condenser.js'
import Button from '../../UI/Buttons/Button.js';

const orderSummary = (props) => {
    const summarizedIngredients = Object.keys(props.ingredients)
        .map(
            igKey => {
                return <li key={igKey}>
                   <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            }
        );
    
    return(
        <Condenser>
            <h3>Order Summary</h3>
            <p>Burger has these following ingredients:</p>
            <ul>
                {summarizedIngredients}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <Button type="Danger" clicked={props.onCloseModal}>CANCEL</Button>
            <Button type='Success' clicked={props.onContinue}>CONTINUE</Button>
        </Condenser>
    );
}

export default orderSummary;