import React, {Component} from "react";
import "./hero.css";
import axios from "axios";
import swal from "sweetalert2";

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password1: "",
      password2: ""
    };
  }

  handleChange = (value, key) => {
    this.setState({
      [key]: value
    });
  };

  register = async () => {
    const {email, name, password1, password2} = this.state;
    if (password1 === password2) {
      const res = await axios.post("/auth/register", {
        name,
        email,
        password: password1
      });
      console.log(res);
    } else {
      swal.fire({type: "error", text: `Passwords don't match`});
    }
  };

  render() {
    return (
      <div className="hero">
        <div className="hero-image">
          <div className="register-form">
            <h2>Register Account</h2>
            <input
              value={this.state.name}
              onChange={e => this.handleChange(e.target.value, "name")}
              placeholder="Name"
              type="text"
            />
            <input
              value={this.state.email}
              onChange={e => this.handleChange(e.target.value, "email")}
              placeholder="Email"
              type="Email"
            />
            <input
              value={this.state.password1}
              onChange={e => this.handleChange(e.target.value, "password1")}
              placeholder="Password"
              type="Password"
            />
            <input
              value={this.state.password2}
              onChange={e => this.handleChange(e.target.value, "password2")}
              placeholder="Repeat Password"
              type="Password"
            />
            <button onClick={() => this.register()}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
