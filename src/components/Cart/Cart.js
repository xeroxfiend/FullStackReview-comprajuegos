import React, {Component} from "react";
import CartGame from './CartGame'

class Cart extends Component {
  constructor() {
    super()
    this.state = {
        
    }
  }

  render() {
      return(
          <div className="Cart">
              Cart
              <CartGame />
          </div>
      )
  }
}

export default Cart;
