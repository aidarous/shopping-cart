import React, { Component } from 'react';
{ /*
* Display each item in cart as well as calculated total of all items 
* Allow user to wrap item as gift
* Calculate sales tax and add it to the subtotal of the items being purchased
 */ }
export default class Shoppingcart extends Component {
    constructor() {
        super();
      
        this.state = {
      
          item: [
          {
          quantity: 0,
          price: 25.00,
          name: "Basketball"
          },
          {
          quantity: 0,
          price: 5.00,
          name: "Pizza"
          },
          {
          quantity: 0,
          price: 80.00,
          name: "Tablet"
          }
          ],
          cartSubTotal: 0,
          tax: 0.04,
          total: 0,
        }
    }

    addQuantity = (index) =>{
      this.setState( {
        quantity:this.state.item[index].quantity++
      })
    }
    minusQuantity = (index) =>{
      this.setState ({
        quantity:this.state.item[index].quantity--
      })
    }
      

      render () {

        let basketball = this.state.item[0];
        let pizza = this.state.item[1];
        let tablet = this.state.item[2];
        let SumTotalItems = basketball.quantity + pizza.quantity + tablet.quantity;

        let cartSubTotal = (basketball.quantity * basketball.price) + (pizza.quantity * pizza.price) + (tablet.quantity * tablet.price)
        let tax = cartSubTotal * this.state.tax;
        let total = cartSubTotal + tax

        return (
        <div className="wrapper">
      
            <div className="items">
              {/*====================================================================*/}
              <div className="firstItem">
                {basketball.name} ${basketball.price}

              <button onClick={() => {this.addQuantity(0)}}> + </button>

              {basketball.quantity}

              <button onClick={() => {this.minusQuantity(0)}}> - </button>

              </div>
            
              <div className="secondItem">
                {pizza.name} ${pizza.price}
                
                <button onClick={() => {this.addQuantity(1)}}> + </button>

              {pizza.quantity}

              <button onClick={() => {this.minusQuantity(1)}}> - </button>
              </div>
              <div className="thirdItem">
                {tablet.name} ${tablet.price}
                
                <button onClick={() => {this.addQuantity(2)}}> + </button>

              {tablet.quantity}

              <button onClick={() => {this.minusQuantity(2)}}> - </button> <br />

             <label> wrap it for $5.99 <input type="checkbox"></input></label>
              </div>
              
            </div>

          <div className="checkOut">
            <h2> order summary</h2>
            Items: {SumTotalItems} <br />
            Tax: ${tax} <br />
            Subtotal: ${cartSubTotal} <br />
            Total: ${total}
            
          </div>
        </div>
        );    
  }
}
