import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="inner" >
        <nav>
          <ul>
            <li><Link exact to="/register">입점사리스트</Link></li>
            <li><Link to="/manufacturerstory">상품리스트</Link></li>
            <li><Link to="/Sample">쇼공가이드</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar;