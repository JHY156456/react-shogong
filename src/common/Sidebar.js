import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import styled from "styled-components";
import Responsive from "../components/common/Responsive";
import Button from "../components/common/Button";
import { Header } from "semantic-ui-react";

const Sidebar = ({ user, onLogout }) => {
  const HeaderBlock = styled.div`
    //position: fixed; //이속성 넣으니 가운데로 오더라..
    width: 100%;
    background: white;
    //box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    @media (max-width: 1024px) {
      display: none;
    }
  `;

  /**
   * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
   */
  const Wrapper = styled(Responsive)`
    height: 4rem;
    // display: flex; /* 이속성 넣으니 수평정렬 되더라.. */
    align-items: right;
    
    justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
    .logo {
      font-size: 1.125rem;
      font-weight: 800;
      letter-spacing: 2px;
    }
    .right {
      display: flex;
      align-items: center;
    }
  `;

  /**
   * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
   */
  const Spacer = styled.div`
    margin-bottom: 6rem;
  `;

  const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
  `;

  return (
    <section id="sidebar">
      <div className="inner">
        <>
          <HeaderBlock>
            <Wrapper>
              <Link to="/">
                <Header as="h2">
                  쇼핑을
                  <br />
                  공장에서
                </Header>
              </Link>
              {user ? (
                <div className="right">
                  <UserInfo>{user.username}</UserInfo>
                  <Button onClick={onLogout}>로그아웃</Button>
                </div>
              ) : (
                <div className="right">
                  <Button to="/">로그인</Button>
                </div>
              )}
            </Wrapper>
          </HeaderBlock>
          <Spacer />
        </>
        <nav>
          <ul>
            {user.type === "administrator" ? (
              <>
                <li>
                  <Link exact to="/postlistpage/:stores">
                    입점사 리스트
                  </Link>
                </li>
                <li>
                  <Link exact to="/postlistpage/products">
                    상품 리스트
                  </Link>
                </li>
                <li>
                  <Link to="/Sample">쇼공 가이드</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link exact to="/register">
                    기본정보
                  </Link>
                </li>
                <li>
                  <Link to="/manufacturerstory">제조사스토리</Link>
                </li>
                <li>
                  <Link to="/postlistpage/:products">상품목록</Link>
                </li>
                <li>
                  <Link to="/Sample">쇼공 가이드</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
