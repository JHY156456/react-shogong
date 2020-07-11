import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { readPost, unloadPost } from "../../modules/post";
import StoreViewr from "../../components/post/StoreViewr";
import PostActionButtons from "../../components/post/PostActionButtons";
import { setOriginalPost } from "../../modules/write";
import { removePost } from "../../lib/api/posts";

const StoreViewerContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, user, manufacturer } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      manufacturer: post.manufacturer,
      error: post.error,
      loading: loading["post/READ_POST"],
      user: user.user,
    })
  );

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    console.log(post);
    dispatch(setOriginalPost(post));
    history.push("/write");
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push("/postlistpage"); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };
  const onManufacturerClick = (userId) => {
    console.log("StoreViewerContainer onManufacturerClick");
    dispatch(readManufacturer(userId));
  };
  //const ownPost = (user && user._id) === (post && post.user._id);
  const ownPost = true;

  return (
    <StoreViewr
      post={post}
      manufacturer={manufacturer}
      loading={loading}
      error={error}
      onManufacturerClick={onManufacturerClick}
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default withRouter(StoreViewerContainer);
