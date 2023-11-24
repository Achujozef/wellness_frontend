const POST_BASE_URL = 'http://localhost:8003';
const DOCTOR_BASE_URL = 'http://localhost:8002';
const USER_BASE_URL = 'http://localhost:8001';
const APPOINMENT_BASE_URL = 'http://localhost:8004';

const POSTS_API_PATH = '/gate';
const DOCTOR_API_PATH = '/api/doctor';
const CREATE_COMMENT_API_PATH = '/api/create-comment';
const DELETE_POST_DOCTOR ='/gate/posts';
const DOCTOR_PROFILE = '/api/doctor'
const DOCTOR_POST ='/gate/posts/by-doctor'
const DOCTOR_LIST ='/api/doctors/'
const USER_FEEDS='/gate/packeposts'
const FETCH_MESSAGES = '/gate/fetch_messages'
const SENT_MESAGES = '/gate/sent_messages'
const FETCH_NOTIFICATION ='/gate/notifications'
const CLEAR_NOTIFICATION ='/gate/clear-notifications'
const DELETE_NOTIFICATION ='/gate/delete-notification'
export const API_URLS = {
  POST_LIKE_DISLIKE: `${POSTS_API_PATH}`,
  POST_DELETE: `${DELETE_POST_DOCTOR}`,
  POST_BY_DOCTOR: `${DOCTOR_POST}`,
  DOCTOR_PROFILE:`${DOCTOR_PROFILE}`,
  DOCTOR_LIST:`${DOCTOR_LIST}`,
  USER_FEEDS:`${USER_FEEDS}`,
  GET_MESSAGES :`${FETCH_MESSAGES}`,
  POST_MESSAGES :`${SENT_MESAGES}`,
  FETCH_NOTIFICATION:`${FETCH_NOTIFICATION}`,
  CLEAR_NOTIFICATION:`${CLEAR_NOTIFICATION}`,
  DELETE_NOTIFICATION:`${DELETE_NOTIFICATION}`,
  GET_DOCTOR_LIST : `${DOCTOR_BASE_URL}${DOCTOR_API_PATH}`,
  CREATE_COMMENT : `${POST_BASE_URL}${CREATE_COMMENT_API_PATH}`,
};