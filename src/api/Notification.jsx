import useraxios from "../useraxios";
import { API_URLS } from "./config";

export const Notification = async (user) => {
    try {
      console.log("Reached the fetch feeds")
      const response = await useraxios.get(`${API_URLS.FETCH_NOTIFICATION}`) 

      console.log("data from the feeds",response.data);
      return response.data;
    } catch (error) {
      throw error; 
    }
  };

export const ClearNotification = async (user) => {
    try {
      console.log("Reached the Clear Notification ")
      const response = await useraxios.delete(`${API_URLS.CLEAR_NOTIFICATION}`) 

      console.log("data from the feeds",response.data);
      return response.data;
    } catch (error) {
      throw error; 
    }
  };

  export const DeleteNotification = async (notification_id) => {
    try {
      console.log("Reached the Clear Notification ")
      const response = await useraxios.delete(`${API_URLS.DELETE_NOTIFICATION}/${notification_id}`) 

      console.log("data from the feeds",response.data);
      return response.data;
    } catch (error) {
      throw error; 
    }
  };