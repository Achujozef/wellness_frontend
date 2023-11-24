import useraxios from "../useraxios";
import { API_URLS } from "./config";

export const fetchDoctors = async () => {
    try {
      const response = await useraxios.get(`${API_URLS.DOCTOR_LIST}`); 

      return response.data;
    } catch (error) {
      throw error; 
    }
  };