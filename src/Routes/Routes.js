import { Route, Switch } from "react-router-dom";
import ChangePassword from "../containers/ChangePassword";
import FullPost from "../containers/Blog/FullPost/FullPost";
import NewPost from "../containers/Blog/NewPost/NewPost";
import Index from "../containers/index";
import Blog from "../containers/Blog/Blog";
import React from "react";
import ForgotPassword from "../containers/ForgotPassword";
import PrivateRoute from "./index";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/home" component={Blog} />
      <Route exact path="/new-post" component={NewPost} />
      <Route exact path="/home/:id" component={FullPost} />
      <PrivateRoute
        isPrivate
        exact
        path="/change-password"
        component={ChangePassword}
      />
      <Route exact path="/forgot-password" component={ForgotPassword} />
    </Switch>
  );
};

export default routes;
