import React, { useEffect } from "react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../../components/posts/PostList";
import { listPosts, listStores } from "../../modules/posts";

const PostListContainer = ({ location, history, match }) => {
  const { boardType } = match.params;
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading["posts/LIST_POSTS"],
      user: user.user,
    })
  );
  useEffect(() => {
    if (!user.status) {
      console.log("??");
      alert("로그인 후 이용해주세요");
      history.push("/");
      //return을하면 그자리에서 남네..ㅠㅠ
    }

    const { username, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    // console.log("boardType " + boardType);
    // console.log("username : " + username);
    // console.log("page : " + page);
    // console.log("boardType.search(products) : " + boardType.search("products"));
    if (boardType.search("stores")>=0) {
      dispatch(listStores(1));
    } else if (boardType.search("products")>=0) {
      dispatch(listPosts({ username, page }));
    }
  }, [dispatch, location.search,boardType]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
      boardType={boardType}
    />
  );
};

export default withRouter(PostListContainer);
