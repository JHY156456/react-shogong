import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const CHANGE_ADDRESS = "auth/CHANGE_ADDRESS"
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "auth/REGISTER"
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN"
);
const [TEST, TEST_SUCCESS, TEST_FAILURE] = createRequestActionTypes(
  "auth/TEST"
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  })
);

export const changeAPIField = createAction(
  CHANGE_ADDRESS,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register / login

export const test = createAction(TEST, (form) => form);

export const register = createAction(REGISTER, (form) => ({
  form
}));

export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

// saga 생성 미들웨어,
const testSaga = createRequestSaga(TEST, authAPI.test);
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(TEST, testSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    id: "",
    password: "",
    passwordConfirm: "",
    businessLicenseNumber: "",
    businessOperatorName: "",
    sellCategory: "",
    businessLicense: "",
    copyAccount: "",
    businessAddress: "",
    shippingAddress: "",
    deliveryCompany: "",
    deliveryFee: "",
    deliveryConditions: "",
    mainProducts: "",
    majorBusiness: "",
    producingCountry: "",
    operationStartYear: "",
    manager: "",
    representativeNumber: "",
    representativeEmail: "",
  },
  login: {
    username: "",
    password: "",
  },
  auth: null,
  loginAuth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_ADDRESS]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth: auth,
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      //response.data를 auth로 할당하겠다!
      ...state,
      authError: null,
      loginAuth: auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [TEST_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [TEST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default auth;
