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
  return function* (action) {
    console.log("서버요청 : " + type);
    yield put(startLoading(type)); // 로딩 시작
    try {
      console.log("request");
      console.log(request);
      console.log("action.payload");
      console.log(action.payload);
      const response = yield call(request, action.payload); //authAPI.register(action.payload)
      console.log("response");
      console.log(response);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response, //http헤더, 상태 코드를 쉽게 조회 할수 있음
      });
    } catch (e) {
      console.log("서버요청실패");
      //console.log(post);
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
