const POST_BASE_URL = 'http://localhost:8003';
const DOCTOR_BASE_URL = 'http://localhost:8002';


const POSTS_API_PATH = '/gate';
const DOCTOR_API_PATH = '/api/doctor';
const CREATE_COMMENT_API_PATH = '/gate/create-comment';
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
const FOLLOWER_POST='/gate/follower-post'
const GRADUATIONS ='/api/doctor-graduations'
const LANGUAGES ='/api/languages'
const DOCTOR_BY_LANGUAGES='api/users-by-language'
const SPECIALIZING ='api/specializing'
const DOCTOR_BY_SPECIALIZING='api/users-by-specializing'
const SLOT_BY_DOCTOR ='/gate/list-slots'
const BOOK_SLOT='gate/book-slot'
const VERIFY_PAYMENT ='gate/verify-payment/'
const FETCH_FOLLOWINGS ='api/user-followed-doctors/'
const FETCH_COMMENTS='gate/comments'





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
  CREATE_COMMENT : `${CREATE_COMMENT_API_PATH}`,
  FOLLOWER_POST:`${FOLLOWER_POST}`,
  SLOT_BY_DOCTOR:`${SLOT_BY_DOCTOR}`,
  DOCTOR_GRADUATIONS:`${GRADUATIONS}`,
  LANGUAGES:`${LANGUAGES}`,
  DOCTOR_BY_LANGUAGES:`${DOCTOR_BY_LANGUAGES}`,
  SPECIALIZING:`${SPECIALIZING}`,
  DOCTOR_BY_SPECIALIZING:`${DOCTOR_BY_SPECIALIZING}`,
  BOOK_SLOT:`${BOOK_SLOT}`,
  VERIFY_PAYMENT:`${VERIFY_PAYMENT}`,
  FETCH_FOLLOWINGS:`${FETCH_FOLLOWINGS}`,
  FETCH_COMMENTS:`${FETCH_COMMENTS}`,
};