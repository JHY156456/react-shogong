import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
import HeaderContainer from "../containers/common/HeaderContainer"
const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="inner" >
      <HeaderContainer></HeaderContainer>
        <nav>
          <ul>
            <li><Link exact to="/register">기본정보</Link></li>
            <li><Link to="/manufacturerstory">제조사스토리</Link></li>
            <li><Link to="/postlistpage">상품목록</Link></li>
            <li><Link to="/Sample">쇼공가이드</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar;