import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Home from "./common/Home";
import { Route } from "react-router-dom";
import Sidebar from "./common/Sidebar";
import RegisterPage from "./pages/RegisterPage";
import ManufacturerPage from "./pages/ManufacturerPage";
import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";
import AuthRoute from "./AuthRoute";
import StoreListsDetailPage from "./pages/StoreListsDetailPage";
const App = () => {
  return (
    <>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/manufacturerstory" component={ManufacturerPage} />
      <Route path="/postlistpage/:boardType" component={PostListPage} />
      {/* <AuthRoute
        authenticated={user.status}
        path="/postlistpage"
        render={props => <PostListPage {...props}/>}
      /> */}
      <Route path="/write" component={WritePage} />
      <Route path="/product/inquire/:postId" component={PostPage} />
      <Route path="/stores/inquire/:postId" component={StoreListsDetailPage} />
    </>
  );
};
export default App;
