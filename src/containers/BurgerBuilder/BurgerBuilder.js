import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControl from '../../components/Burger/BuildControlls/BuildControlls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends Component{
state = {
  ingredients : {
    salad: 0,
    bacon: 0,
    cheese:0,
    meat: 0
  },
  totalPrice: 4,
  purchasable: false,
  purchasing: false
}


updatePurchaseSate = (ingredients) =>{
  const sum = Object.keys(ingredients)
  .map(igKey => {
    return ingredients[igKey];
  })
  .reduce((sum,el)=> {
    return sum + el;
  },0);
  this.setState({purchasable: sum>0});
}


addIngredientHandler = (type) => {
  const oldCount  = this.state.ingredients[type];
  const updatedCount = oldCount +1;
  const updatedIngredients = {
    ...this.state.ingredients
  };
  updatedIngredients[type] = updatedCount;
  const priceAddition = INGREDIENT_PRICE[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice + priceAddition;
  this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  this.updatePurchaseSate(updatedIngredients);
}

removeIgredientHandler = (type) => {
  const oldCount  = this.state.ingredients[type];
  const updatedCount = oldCount - 1;
  const updatedIngredients = {
    ...this.state.ingredients
  };
  updatedIngredients[type] = updatedCount;
  const priceDeduction = INGREDIENT_PRICE[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice - priceDeduction;
  this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  this.updatePurchaseSate(updatedIngredients);
}

purchasehandler = () => {
  this.setState({purchasing: true});
}

purchaseCancleHAndler = () =>{
   this.setState({purchasing: false});
}

purchaseContinueHandler = () =>{
  alert('You continue !!')
}

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return(
        <Aux>

          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHAndler}>
                <OrderSummary
                   ingredients={this.state.ingredients}
                   purchaseCancelled ={this.purchaseCancleHAndler}
                   purchaseContinued = {this.purchaseContinueHandler}
                   price={this.state.totalPrice}
                   />
          </Modal>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControl
            indgredientAdded = {this.addIngredientHandler}
            indgredientDeducted = {this.removeIgredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchasehandler}
            price={this.state.totalPrice}

           />
        </Aux>

    );
  }
}
export default BurgerBuilder;
