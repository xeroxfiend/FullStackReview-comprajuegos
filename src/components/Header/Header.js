import React, {Component} from "react";
import john from "../../assets/john_sombrero.png";
import "./header.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {updateUser} from "../../ducks/reducer";
import {connect} from "react-redux";
import Swal from "sweetalert2";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      email: ""
    };
  }

  handleChange(value, key) {
    this.setState({
      [key]: value
    });
  }

  login = async () => {
    const {email, password} = this.state;
    const res = await axios.post("/auth/login", {email, password});
    if (res.data.user) {
      this.props.updateUser(res.data.user);
    }
    Swal.fire(res.data.message);
  };

  async logout() {
    const res = await axios.delete('/auth/logout')
    this.props.updateUser(null)
    Swal.fire(res.data.message)
  }

  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src={john} alt="" />
            <h1>Comprajuegos</h1>
          </div>
        </Link>
        {this.props.user ? (
          <button onClick={() => this.logout()}>Logout</button>
        ) : (
          <div className="login-form">
            <input
              onChange={e => this.handleChange(e.target.value, "email")}
              placeholder="Email"
              type="text"
            />
            <input
              onChange={e => this.handleChange(e.target.value, "password")}
              placeholder="Password"
              type="password"
            />
            <button onClick={() => this.login()} className="login">
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const {user} = reduxState;
  return {user};
}

export default connect(
  mapStateToProps,
  {updateUser}
)(Header);
