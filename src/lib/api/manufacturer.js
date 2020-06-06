import client from './client';


// 제조사이야기 등록
export const register = (form) =>
  client.post('/manufacturer/register', form);
  
// 제조사이야기 등록확인
export const check = () => client.get('/manufacturer/check');