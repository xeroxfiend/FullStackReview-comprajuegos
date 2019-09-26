import React, {Component} from "react";
import john from '../../assets/john_sombrero.png'
import './header.css'

class Header extends Component {
  constructor() {
    super()
    this.state = {
        
    }
  }

  render() {
      return(
          <div className="header">
              <div className="logo">
                <img src={john} alt=""/>
                <h1>Comprajuegos</h1>
              </div>
              <div className="login-form">
                <input placeholder='Email' type="text"/>
                <input placeholder='Password' type="password"/>
                <button className="login">Login</button>
              </div>
          </div>
      )
  }
}

export default Header;
