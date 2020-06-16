import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../common/Sidebar";
import { logout } from "../../modules/user";
import { withRouter } from 'react-router';

const HeaderContainer = ({ history }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  return <Sidebar user={user} onLogout={onLogout} />;
};

export default withRouter(HeaderContainer);
