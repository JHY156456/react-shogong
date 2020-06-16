import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ user, component: Component, render, ...rest }) {
  console.log(user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user!=null ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default AuthRoute;
