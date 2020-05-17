import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Helmet } from "react-helmet-async";

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
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
  const { title, body, user, publishedDate, tags } = post;
  return (
    <div>
      <PostViewerBlock>
        <Helmet>
          <title> - REACTERS</title>
        </Helmet>

        <PostHead>
          <h1>{title}</h1>
          <SubInfo
            username="{user.username}"
            publishedDate={publishedDate}
            hasMarginTop
          />
          {/* <Tags tags={tags} /> */}
        </PostHead>
        {actionButtons}

        {/* <PostContent dangerouslySetInnerHTML={{ __html: body }} /> */}
      </PostViewerBlock>

      <PostViewerBlock>
        <PostContent>
          {body.length < bodyCharacters
            ? body
            : `${body.slice(0, bodyCharacters)}...`}
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
    </div>
  );
};

export default PostViewer;