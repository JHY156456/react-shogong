import client from "./client";

// 로그인
export const login = ({ id, password }) =>
  client.post("/api/auth/login", { id, password });

// 회원가입
export const register = (form) => client.post("/api/auth/register", form);

// 로그인 상태 확인
export const check = () => client.get("/api/auth/check");

// 로그아웃
export const logout = () => client.post("/api/auth/logout");

export const test = ({ ssibal }) => client.post("/test", { ssibal });
