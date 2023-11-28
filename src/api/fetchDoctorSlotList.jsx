import useraxios from "../useraxios";
import { API_URLS } from "./config";

export const fetch_Slot_by_Doctor = async (doctor_id) => {
    try {
      const response = await useraxios.get(`${API_URLS.SLOT_BY_DOCTOR}/${doctor_id}`); 
      console.log("The Slot Resposne",response.data)
      return response.data;

    } catch (error) {
      throw error; 
    }
  };

  export const Book_Slot = async (slot_id) => {
    try {
      const response = await useraxios.post(`${API_URLS.BOOK_SLOT}/${slot_id}/`); 
      console.log("The Book Slot Resposne",response.data)
      return response.data;

    } catch (error) {
      throw error; 
    }
  };
