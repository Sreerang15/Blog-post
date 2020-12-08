import React, { Component } from "react";

import "./Blog.css";
import Posts from "./Posts/Posts";

import Header from "../../components/Header";

class Blog extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#483D8B" }}>
          <Header />
        </div>
        <Posts />
      </div>
    );
  }
}

export default Blog;
