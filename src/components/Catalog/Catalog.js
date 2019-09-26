import React, {Component} from "react";
import Hero from "./Hero";
import Game from "./Game";
import axios from "axios";
import "../../components/Catalog/catalog.css";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    axios.get("/api/games").then(res => {
      this.setState({games: res.data});
    });
  }

  render() {
    return (
      <div className="catalog">
        <Hero />
        <div className="game-list">
          {this.state.games.map(game => (
            <Game data={game} />
          ))}
        </div>
      </div>
    );
  }
}

export default Catalog;
