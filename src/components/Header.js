import { NavLink, withRouter } from "react-router-dom";
import React from "react";
import "../containers/Blog/Blog.css";

const header = (props) => {
  const logOut = () => {
    localStorage.clear();
    props.history.push("/");
  };

  const changePassword = () => {
    props.history.push("/change-password");
  };

  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink style={{ color: "white" }} exact to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ color: "white" }}
                to={{
                  pathname: "/new-post",
                }}
              >
                New Post
              </NavLink>
            </li>
            <li>
              <button className="b1" onClick={changePassword}>
                Change Password
              </button>
            </li>
            <li>
              <button onClick={logOut}>Log Out</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default withRouter(header);
