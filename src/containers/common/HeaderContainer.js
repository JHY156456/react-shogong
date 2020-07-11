import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../common/Sidebar";
import { logout } from "../../modules/user";
import { withRouter } from "react-router";

const HeaderContainer = ({ history }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  //로그아웃 성공시
  useEffect(() => {
    if (!user) {
      localStorage.removeItem("user"); // localStorage 에서 user 제거
      console.log("HeaderContainer user : " + user);
      console.log("headerContainer user remove");
      localStorage.removeItem("access_token"); // localStorage 에서 access_token 제거
      history.push("/");
    }
  }, [user]);
  return <Sidebar user={user} onLogout={onLogout} />;
};

export default withRouter(HeaderContainer);
