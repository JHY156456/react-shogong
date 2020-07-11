import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Home from "./common/Home";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ManufacturerPage from "./pages/ManufacturerPage";
import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import WritePage from "./pages/WritePage";
import StoreListsDetailPage from "./pages/StoreListsDetailPage";
import AuthRoute from "./AuthRoute";
import ProductDetailPage from "./pages/ProductDetailPage";
import MenufacturerStoryDetail from "./pages/ProductDetailPage";
import Button from "./components/common/Button";
import ManufacturerStory from "./components/register/ManufacturerStory";
const App = ({user}) => {
  console.log("app.js user : " + user);
  return (
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/register" component={RegisterPage} />
      {/* <Route path="/manufacturerstory" component={ManufacturerPage} /> */}

      <AuthRoute
        user={user}
        path="/manufacturerstory"
        render={props => <ManufacturerPage {...props} />}
      />
      <Route path="/postlistpage/:boardType/" component={PostListPage} />
      <Route path="/write" component={WritePage} />
      <Route path="/products/inquire/:postId" component={ProductDetailPage} />
      <Route path="/stores/inquire/:postId" component={StoreListsDetailPage} />
      {/* <Route path="/stores/inquire/:postId" component={MenufacturerStoryDetail} /> */}
      <Route
        render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
          </div>
        )}
      />
    </Switch>
  );
};
export default App;
