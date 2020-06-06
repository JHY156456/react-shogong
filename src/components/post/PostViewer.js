import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Helmet } from "react-helmet-async";
import { Grid, Image, Header } from "semantic-ui-react";

const PostViewerBlock = styled(Responsive)`
  margin-bottom: 4rem;
  border: #e8e8e8;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); /* 그림자 */ 
  word-break:break-all;
`;
const PostViewerBlockNoBackground = styled.div`
  margin-bottom: 4rem;

`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons, ownPost }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }

  const [bodyCharacters, setbodyCharacters] = useState(100);
  const [isFold, setIsFold] = useState(true);
  function handleClickUnFold(e, i) {
    e.preventDefault();
    setbodyCharacters(i);
    setIsFold(false);
  }
  function handleClickFold(e, i) {
    e.preventDefault();
    setbodyCharacters(i);
    setIsFold(true);
  }

  return (
    <>
      <PostViewerBlock>
        <Grid>
          <Grid.Column width={6} floated="left" style={{ marginLeft: "1rem" }}>
            <Grid.Row>
              <Header as="h2">{post.title}</Header>
            </Grid.Row>
            <Grid.Row>{post.representativeName}</Grid.Row>
          </Grid.Column>
          <Grid.Column floated="right" width={4}>
            <Grid.Row floated="right">
              <Header as="h2">{post.sellPrice}</Header>
            </Grid.Row>
            <Grid.Row>
                수수료 {post.fee}
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </PostViewerBlock>

      <strong>제품설명</strong>
      <PostViewerBlock>
        <PostContent>
          {post.body.length < bodyCharacters
            ? post.body
            : `${post.body.slice(0, bodyCharacters)}...`}
        </PostContent>
        {isFold && (
          <a
            href="#"
            className="btn"
            roel="button"
            onClick={(e) => handleClickUnFold(e, 1000000)}
          >
            더보기 ▽
          </a>
        )}
        {!isFold && (
          <a
            href="#"
            className="btn"
            roel="button"
            onClick={(e) => handleClickFold(e, 100)}
          >
            줄이기 △
          </a>
        )}
      </PostViewerBlock>

      <PostViewerBlockNoBackground>
        <Grid>
          <Grid.Column width={3} style={{ marginLeft: "1rem" }}>
            <Grid.Row className="header">옵션별 재고수량</Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>sdf</Grid.Row>
            <Grid.Row>asdf</Grid.Row>
          </Grid.Column>
        </Grid>
      </PostViewerBlockNoBackground>
    </>
  );
};

export default PostViewer;
