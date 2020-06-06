import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/manufacturer";

const CHANGE_FIELD = "manufacturer/CHANGE_FIELD";
const INITIALIZE_FORM = "manufacturer/INITIALIZE_FORM"; //이것을 하지않으면 다른페이지에 갔다왔을때 값이 유지된 상태로 보이게된다.
const SET_FORM = "manufacturer/SET_FORM";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "manufacturer/REGISTER"
);
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  "manufacturer/CHECK"
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }) => ({
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  })
);

export const register = createAction(REGISTER, (form) => ({
  form
}));
export const setForm = createAction(SET_FORM,(form)=>form);
export const checkRegisteredManufacturer = createAction(CHECK);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register / login

export const registerManufacturer = createAction(REGISTER, (form) => ({
  form
}));
// saga 생성 미들웨어,
const registerManufacturerSaga = createRequestSaga(REGISTER, authAPI.register);
const checkSaga = createRequestSaga(CHECK,authAPI.check);

export function* manufacturerSaga() {
  yield takeLatest(CHECK,checkSaga);
  yield takeLatest(REGISTER, registerManufacturerSaga);
}

const initialState = {
  manufacturer: {
    motive: "",
    toBusinessAbilityPublic: "",
    toBusinessAbilityPrivate: "",
    importantIdea: "",
    valueOrBelief: "",
    reward: "",
    orientation: "",
    otherQuestion: "",
  },
  check: 1,
  loginAuth: null,
  authError: null,
};

const manufacturer = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: {form, key, value } }) =>
      produce(state, (draft) => {
        draft["manufacturer"][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 제조사이야기 등록 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth: auth,
    }),
    // 제조사이야기 등록 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 제조사이야기 등록 체크 성공
    [CHECK_SUCCESS]: (state, { payload: check }) => ({
      ...state,
      authError: null,
      check: check,
    }),
    // 제조사이야기 등록 체크 실패
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SET_FORM]:(state,{payload:form})=>({
      ...state,
      form:form,
    })
  },
  initialState
);

export default manufacturer;
