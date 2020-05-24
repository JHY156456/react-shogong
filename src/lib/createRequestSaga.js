import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../modules/loading";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const posts = new Array();
  const post = new Object();
  if (type == "posts/LIST_POSTS") {
    post.title = "제목이다앙";
    post.fee =
      "25%";
    post.error = "쉬벌탱";
    const user = new Object();
    user.username = "박윤범";
    post.user = user;
    post.sellPrice="13,000";
    post._id = 1;
    posts.push(post);
  }
  return function* (action) {
    console.log("서버요청");
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload); //authAPI.register(action.payload)
      console.log("서버요청성공 : " + response);

      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (e) {
      console.log("서버요청실패");
      yield put({
        type: FAILURE,
        payload: posts,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
