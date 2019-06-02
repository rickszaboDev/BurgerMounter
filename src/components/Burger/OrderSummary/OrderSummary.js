import React from 'react';
import Condenser from '../../../hoc/Condenser.js'

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
        </Condenser>
    );
}

export default orderSummary;