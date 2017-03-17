/**
 * 命名统一用request结尾
 */

import request, { transFormData } from '../utils/request.js';

//token登录
export function tokenLoginRequest(values) {

  return request('/api/tklogin', {
    method: 'POST',
    body: transFormData(values),
  })
}

//推荐页面
export function questionsRecommendRequest() {
  return request('/api/questions/recommend');
}


//找人模块
export function followsAndRecommendationsRequest(user_id) {
  return request(`/api/users/${user_id}/followsAndRecommendations`);
}

//我的模块
export function profileRequest(user_id) {
  return request(`/api/users/${user_id}`);
}

//问题细节
export function questionDetailRequest(question_id) {
  return request(`/api/questions/${question_id}`);
}

//用户介绍
export function userIntroductionRequest(user_id, id) {
  return request(`/api/users/${user_id}/introduction?id=${id}`);
}

//关注用户---旧的接口
export function userfollowedRequest(followed_uid) {
  return request('/api/users/12/follows', {
    method: 'POST',
    body: transFormData({followed_uid}),
  })
}

//取消关注 DELETE通过search parameter传递
export function userUnfollowedRequest(followed_uid) {
  return request(`/api/users/12/follows?followed_uid=${followed_uid}`, {
    method: 'DELETE',
  })
}