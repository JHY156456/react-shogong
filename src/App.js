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
  const user = useSelector(({ user }) => ({
    user: user.user,
  }));
  const [authenticated,setAuthenticated] = useState("");
  useEffect(() => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(true);
    }
  }, [user]);
  return (
    <>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/manufacturerstory" component={ManufacturerPage} />
      {/* <Route path="/postlistpage" component={PostListPage} /> */}
      <AuthRoute
        authenticated={authenticated}
        path="/postlistpage"
        render={props => <PostListPage user={user} {...props}/>}
      />
      <Route path="/write" component={WritePage} />
      <Route path="/seller/inquire/:postId" component={PostPage} />
      <Route path="/stores/inquire/:postId" component={StoreListsDetailPage} />
    </>
  );
};
export default App;
