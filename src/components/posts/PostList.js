import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";

const PostListBlock = styled(Responsive)`
  background: white;
  font-size: medium
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
const PostItem = () => {
  return (
    <tbody>
      <tr>
        <td>제목</td>
        <td><Link to='/seller/inquire/0'>박윤범ㄴㅇㄹㅁㄴㅇㄹㄴㅁㅇㄹㄴㅁㅇㄹㄴㅁㅇㄹㄴㅁㅇㄹ</Link></td>
        <td>{new Date().toLocaleDateString()}</td>
        <td>내용일부분...</td>
        <td>
          {" "}
          <Tags tags={["수정"]} />
        </td>
      </tr>
    </tbody>
  );
};

const PostList = () => {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button cyan to="/write">
          새글작성하기
        </Button>
      </WritePostButtonWrapper>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>판매가격</th>
            <th>수수료</th>
            <th> </th>
          </tr>
        </thead>
        <PostItem />
        <PostItem />
        <PostItem />
      </table>
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
