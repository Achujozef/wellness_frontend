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

  export const fetchLANGUAGES = async () => {
    try {
      const response = await useraxios.get(`${API_URLS.LANGUAGES}`); 

      return response.data;
    } catch (error) {
      throw error; 
    }
  };

  export const fetchDOCTOR_BY_LANGUAGES = async (language_id) => {
    try {
      const response = await useraxios.get(`${API_URLS.DOCTOR_BY_LANGUAGES}/${language_id}`); 

      return response.data;
    } catch (error) {
      throw error; 
    }
  };

  export const fetchSPECIALIZING = async () => {
    try {
      const response = await useraxios.get(`${API_URLS.SPECIALIZING}`); 

      return response.data;
    } catch (error) {
      throw error; 
    }
  };

  export const fetchDOCTOR_BY_SPECIALIZING = async (specializing_id) => {
    try {
      const response = await useraxios.get(`${API_URLS.DOCTOR_BY_SPECIALIZING}/${specializing_id}`); 

      return response.data;
    } catch (error) {
      throw error; 
    }
  };

  export const fetch_Following_DOCTORS = async (specializing_id) => {
    try {
      const response = await useraxios.get(`${API_URLS.DOCTOR_BY_SPECIALIZING}/${specializing_id}`); 

      return response.data;
    } catch (error) {
      throw error; 
    }
  };
