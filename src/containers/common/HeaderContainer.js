import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../common/Sidebar";
import { logout } from "../../modules/user";

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Sidebar user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
