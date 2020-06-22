import React from "react";
import { Route, Redirect } from "react-router-dom";
import AskModal from "./components/common/AskModal";
function AuthRoute({ user, component: Component, render, ...rest }) {
  console.log(user);
  return (
    <>
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
          <Redirect to={{ pathname: "/", state: { reason: "login" } }} />
        )
      }
    />
    </>
  );
}

export default AuthRoute;
