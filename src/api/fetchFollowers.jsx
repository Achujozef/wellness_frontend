import axios from "../axios";
import  useraxios from '../useraxios'
import { API_URLS } from "./config";
export const fetchFollowers = async () => {
    try {
      const response = await axios.get('http://localhost:8001/api/doctor-followers/'); 
        console.log("Followerssssssss",response.data);
      return response.data;
    } catch (error) {
      throw error; 
    }
  };


  export const Fetch_User_Followings = async ()=>{
    try {
      const response = await useraxios.get(`${API_URLS.FETCH_FOLLOWINGS}`); 
        console.log("Followerssssssss",response.data);
      return response.data;
    } catch (error) {
      throw error; 
    }
  }