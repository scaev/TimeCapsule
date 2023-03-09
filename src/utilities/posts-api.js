import sendRequest from "./send-request";
const BASE_URL = "/api/posts";

export function addPost(posts) {
  return sendRequest(`${BASE_URL}/new`, "POST", posts);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function deletePost(_id) {
  return sendRequest(`${BASE_URL}/${_id}`, "DELETE");
}

export function updatePost(postId, updatedPostData) {
  return sendRequest(`${BASE_URL}/${postId}`, "PUT", updatedPostData);
}
