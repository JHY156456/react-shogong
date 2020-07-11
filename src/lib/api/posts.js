// import qs from 'qs';
// import client from './client';

// export const writePost = ({ title, body, tags }) =>
//   client.post('/api/posts', { title, body, tags });

// export const readPost = id => client.get(`/api/posts/${id}`);

// export const listPosts = ({ page, username, tag }) => {
//   const queryString = qs.stringify({
//     page,
//     username,
//     tag,
//   });
//   return client.get(`/api/posts?${queryString}`);
// };
import qs from "qs";
import client from "./client";

export const writePost = ({ title, body, tags }) =>
  client.post("/api/posts", { title, body, tags });

export const readPost = (id) => client.get(`/businessUserInfo/get/${id}`);
export const readManufacturerByUserId = (id) => client.get(`/manufacturer/getbyuserid/${id}`);
export const readManufacturerByPostId = (id) => client.get(`/manufacturer/getbypostid/${id}`);

export const listPosts = ({ page, username}) => {
  const queryString = qs.stringify({
    page,
    username,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const listStores = (page) => {
  console.log("listStores");

  const queryString = qs.stringify({
    page
  });
  return client.get(`/api/stores?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
