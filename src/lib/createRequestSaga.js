import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../modules/loading";

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
}; 

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload); //authAPI.register(action.payload)
      console.log(response);
      if (type == "post/READ_POST") {
        const post = new Object();
        post.title = "제목이다앙";
        post.body = "내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이"
        +"다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙"
        +"다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙"
        +"다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙"
        +"다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙"
        +"다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙"
        +"다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙"
        +"다앙내용이다앙내123123123용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙내용이다앙";
        post.error = "쉬벌탱";
        const user = new Object();
        user.username = "박윤범";
        post.user = user;
        response.data = post;
      }
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
