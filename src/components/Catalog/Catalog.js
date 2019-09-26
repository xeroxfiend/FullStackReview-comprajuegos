import React, {Component} from "react";
import Hero from './Hero'
import Game from './Game'

class Catalog extends Component {
  constructor() {
    super()
    this.state = {
        
    }
  }

  render() {
      return(
          <div className="Catalog">
              <Hero />
              <Game />
          </div>
      )
  }
}

export default Catalog;
