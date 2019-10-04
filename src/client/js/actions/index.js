// import { ARTICLE } from '../constants/action-types';
// import { ADD_ARTICLE } from '../constants/action-types';
// import { UPDATE_ARTICLE } from '../constants/action-types';
// import { DELETE_ARTICLE } from '../constants/action-types';

// export function accessArticle(payload) {
//   return { type: "ARTICLE", payload }
// };

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};

// export function updateArticle(payload) {
//   return { type: "UPDATE_ARTICLE", payload }
// };

export function deleteArticle(payload) {
  return { type: "DELETE_ARTICLE", payload }
};