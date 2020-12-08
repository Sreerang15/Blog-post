import axios from "axios";
import React, { Component } from "react";
import Header from "../components/Header";
import "../index.css";

class changePassword extends Component {
  state = {
    data: {
      currentPassword: "",
      newPassword: "",
    },
    errors: {
      old: "",
      new: "",
    },
    enable: false,
    success: false,
  };
  newData = {
    data: {
      currentPassword: "",
      newPassword: "",
    },
    errors: {
      old: "",
      new: "",
    },
    enable: false,
    success: false,
  };

  handleChange = (e) => {
    e.preventDefault();

    let name = e.target.name;
    let value = e.target.value;

    if (name === "current") {
      if (value.length === 0) {
        this.newData.errors.old = "Current Password must not be empty";
      }
      this.newData.data.currentPassword = value;

      this.setState({ data: this.newData.data, errors: this.newData.errors });
    }

    if (name === "new") {
      if (value.length < 5) {
        this.newData.errors.new =
          "Password must be more than 5 characters long";
        this.newData.enable = false;
      } else {
        this.newData.errors.new = "";
        this.newData.enable = true;
      }
      this.newData.data.newPassword = value;
      this.setState({
        data: this.newData.data,
        errors: this.newData.errors,
        enable: this.newData.enable,
      });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        url: "http://127.0.0.1:3001/api/change-password",
        method: "patch",

        data: {
          currentPassword: this.state.data.currentPassword,
          newPassword: this.state.data.newPassword,
        },
      });

      this.newData = {
        data: {
          currentPassword: "",
          newPassword: "",
        },
        errors: {
          old: "",
          new: "",
        },
        enable: false,
        success: true,
      };
      this.setState({
        data: this.newData.data,
        errors: this.newData.errors,
        success: true,
      });
      localStorage.clear();
      setTimeout(() => {
        this.props.history.push("/");
      }, 1000);
    } catch (err) {
      this.newData.errors.new = err.response.data.message;
      this.setState({ data: this.newData.data, errors: this.newData.errors });
    }
  };
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#483D8B" }}>
          <Header />
        </div>

        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label className="form">
            Current Password
            <input
              type="text"
              style={{ marginLeft: 30 }}
              name="current"
              onChange={this.handleChange}
              required
            />
          </label>

          <label className="form">
            New Password
            <input
              type="text"
              style={{ marginLeft: 52 }}
              name="new"
              required
              onChange={this.handleChange}
            />
          </label>
          <p style={{ color: "red", fontSize: 15 }}>{this.state.errors.new}</p>
          <input
            type="submit"
            value="Change Password"
            disabled={!this.state.enable}
            style={{ marginLeft: 158 }}
          />
        </form>
        <p style={{ color: "green", fontSize: 15 }}>
          {this.state.success ? "Password Changed successfully" : ""}
        </p>
      </div>
    );
  }
}

export default changePassword;
