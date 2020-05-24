import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from "../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes("posts/LIST_POSTS");
const [
  LIST_STORES,
  LIST_STORES_FAILURE,
  LIST_STORES_SUCCESS,
] = createRequestActionTypes("posts/LIST_STORES");

export const listPosts = createAction(LIST_POSTS, ({ username, page }) => ({
  username,
  page,
}));

export const listStores = createAction(LIST_STORES,(page)=>(page));

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
const listStoresSaga = createRequestSaga(LIST_STORES, postsAPI.listStores);

export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
  yield takeLatest(LIST_STORES, listStoresSaga);
}

const initialState = {
  posts: null,
  error: null,
  lastPage: 1,
};

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      lastPage: parseInt(response.headers["last-page"], 10), // 문자열을 숫자로 변환
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    // [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   error,
    // }),
    [LIST_STORES_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      //lastPage: parseInt(response.headers["last-page"], 10), // 문자열을 숫자로 변환
    }),
    [LIST_STORES_FAILURE]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
  },
  initialState
);

export default posts;
