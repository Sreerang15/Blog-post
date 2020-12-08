import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isPrivate, ...rest }) => {
  if (isPrivate && localStorage.getItem("token") === null) {
    console.log(localStorage.getItem("token"));
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
export default PrivateRoute;
