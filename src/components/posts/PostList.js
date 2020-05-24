import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";
import { Search } from "semantic-ui-react";

const PostListBlock = styled(Responsive)`
  background: white;
  font-size: medium;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;
const PostItem = ({ post, boardType }) => {
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <tbody>
      <tr>
        <td>{post._id}</td>
        <td>
          <Link to={`/${boardType}/${_id}`}>
            {post.title < 10 ? post.title : `${post.title.slice(0, 10)}`}
          </Link>
        </td>
        <td>{post.sellPrice}</td>
        <td>{post.fee}</td>
        <td>
          {" "}
          <Button>수정</Button>
        </td>
      </tr>
    </tbody>
  );
};

const PostList = ({ posts, loading, error, showWriteButton, boardType }) => {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Search
        loading={false}
        style={{marginTop:"1rem"}}
        // loading={isLoading}
        // onResultSelect={this.handleResultSelect}
        // onSearchChange={_.debounce(this.handleSearchChange, 500, {
        //   leading: true,
        // })}
        // results={results}
        // value={value}
        // {...this.props}
        />
      </WritePostButtonWrapper>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>
              {(() => {
                if (boardType == ":stores") {
                  return "제조사명";
                } else if (boardType == "products") {
                  return "상품명";
                }
              })()}
            </th>
            <th>
              {(() => {
                if (boardType == ":stores") {
                  return "카테고리";
                } else if (boardType == "products") {
                  return "판매가격";
                }
              })()}
            </th>
            <th>수수료</th>
            <th> </th>
          </tr>
        </thead>
        {!loading && posts && (
          <>
            {posts.map((post) => (
              <PostItem boardType={boardType} post={post} key={post._id} />
            ))}
          </>
        )}
        {/* <PostItem />
        <PostItem />
        <PostItem /> */}
      </table>
      <WritePostButtonWrapper>
        <Button cyan to="/write">
          새글작성하기
        </Button>
      </WritePostButtonWrapper>
    </PostListBlock>
  );
};

// const PostItem = ({ post }) => {
//   const { publishedDate, user, tags, title, body, _id } = post;
//   return (
//     <PostItemBlock>
//       <h2>
//         <Link to={`/@${user.username}/${_id}`}>{title}</Link>
//       </h2>
//       <SubInfo
//         username={user.username}
//         publishedDate={new Date(publishedDate)}
//       />
//       <Tags tags={tags} />
//       <p>{body}</p>
//     </PostItemBlock>
//   );
// };

// const PostList = ({ posts, loading, error, showWriteButton }) => {
//   // 에러 발생 시
//   if (error) {
//     return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
//   }

//   return (
//     <PostListBlock>
//       <WritePostButtonWrapper>
//         {showWriteButton && (
//           <Button cyan to="/write">
//             새 글 작성하기
//           </Button>
//         )}
//       </WritePostButtonWrapper>
//       {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
//       {!loading && posts && (
//         <div>
//           {posts.map(post => (
//             <PostItem post={post} key={post._id} />
//           ))}
//         </div>
//       )}
//     </PostListBlock>
//   );
// };

export default PostList;
