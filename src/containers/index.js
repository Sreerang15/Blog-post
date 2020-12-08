import React, { Component } from "react";
import "../index.css";
import axios from "axios";
import "../containers/Blog/Blog.css";
import { Link } from "react-router-dom";

class Index extends Component {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {
      email: "",
      msg: "",
    },
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.state.data[name] = value;
    if (name === "password") {
      if (this.state.data["password"].length < 3) {
        this.state.errors.password =
          "Password must be more than 3 characters long";
      } else {
        this.state.errors.password = "";
      }
    }
    this.setState({
      data: this.state.data,
      error: this.state.errors,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/api/login", {
        email: this.state.data.email,
        password: this.state.data.password,
      })
      .then((response) => {
        console.log(response, "sds");
        const token = response.data.data.token;
        localStorage.setItem("token", token);

        this.props.history.push("/home");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        this.setState({ errors: { msg: error.response.data.message } });
      });
  };

  validate = () => {};

  testing = () => {
    console.log(this.props.history);
    this.props.history.push("/home");
  };

  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            color: "white",
            backgroundColor: "#483D8B",
            margin: 0,
            height: "60px",
            display: "flow",
            fontFamily: "inherit",
          }}
        >
          <div style={{ textAlign: "center", marginTop: 0 }}>Welcome</div>
        </div>
        <form
          style={{ marginLeft: "35%", marginTop: "10%" }}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <label className="form">
            Email
            <input
              type="text"
              style={{ marginLeft: 40.5 }}
              name="email"
              value={this.state.data.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <p>{this.state.errors.email}</p>
          <label className="form">
            Password
            <input
              type="password"
              name="password"
              style={{ marginLeft: 10 }}
              required
              onChange={this.handleChange}
            />
          </label>

          <Link to="/forgot-password" style={{ color: "blue", fontSize: 14 }}>
            Forgot Password ?
          </Link>

          <input
            type="submit"
            value="Login"
            style={{
              marginLeft: 20,
              marginTop: 10,
              width: 97,
              backgroundColor: "#483D8B",
              color: "white",
            }}
          />

          <div style={{ color: "red" }}>{this.state.errors.msg}</div>
        </form>
      </div>
    );
  }
}
export default Index;
