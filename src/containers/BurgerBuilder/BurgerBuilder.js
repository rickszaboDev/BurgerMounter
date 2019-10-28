import React, { Component } from 'react';

import Condenser from '../../hoc/Condenser.js';
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js';

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 1.0,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchase(ingredients) {
        const sum = Object.keys(ingredients)
            .map(
                igKey => { return ingredients[igKey] }
            ).reduce(
                (sum, el) =>{
                    return sum + el;
                },
                0
            );

            this.setState({
                purchasable: (sum > 0)
            });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchase(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        
        if (oldCount <= 0) return;
        
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchase(updatedIngredients);
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true });
    }

    closeModalHandler = () => {
        this.setState({ purchasing: false });
    }

    ContinueHandler = () => {
        this.closeModalHandler();
        alert('We continue!')
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }

        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
		let { purchasing, ingredients, totalPrice } = this.state
        return (
            <Condenser>
                <Burger ingredients={ingredients}/>
                <Modal 
                    show={purchasing}
                    onModalClosed={this.closeModalHandler} 
                    >
                        <OrderSummary 
                            ingredients={ingredients}
                            price={totalPrice}
                            onCloseModal={this.closeModalHandler}
                            onContinue={this.ContinueHandler}
                        />
                </Modal>
                <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disableInfo={disableInfo} 
                    price={ttotalPrice}  
                    purchasable={purchasable}
                    onOrdering={this.purchasingHandler}
                />
            </Condenser>
        );
    }       
}

export default BurgerBuilder;