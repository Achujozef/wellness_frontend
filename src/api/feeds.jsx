
import useraxios from "../useraxios";
import { API_URLS } from "./config";

export const fetchFeeds = async (user) => {
  const token = await localStorage.getItem('userauthToken')
    try {
      console.log("Reached the fetch feeds")
      const response = await useraxios.get(`${API_URLS.USER_FEEDS}/?user_id=${user}`) 

      console.log("data from the feeds",response.data);
      return response.data;
    } catch (error) {
      throw error; 
    }
  };