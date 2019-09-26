import React, {Component} from "react";
import './hero.css'

class Hero extends Component {
  constructor() {
    super()
    this.state = {
        
    }
  }

  render() {
      return(
          <div className="hero">
              <div className="hero-image">
                <div className="register-form">
                  <h2>Register Account</h2>
                  <input placeholder='Name' type="text"/>
                  <input placeholder='Email' type="Email"/>
                  <input placeholder='Password' type="Password"/>
                  <input placeholder='Repeat Password' type="Password"/>
                </div>
              </div>
          </div>
      )
  }
}

export default Hero;
