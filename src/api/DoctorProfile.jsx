
import useraxios from "../useraxios";
import { API_URLS } from "./config";


export const fetchDoctorDetails = async(doctor_id)=>{
    try{
        const response = await useraxios.get(`${API_URLS.DOCTOR_PROFILE}/${doctor_id}`)
        return response.data;
    }catch(error){
        console.error("Error fetching doctor data: " ,error)
        throw error
    }
}
export const fetchDoctorPosts  = async (doctor_id) => {
    try {
      const response = await useraxios.get(`${API_URLS.POST_BY_DOCTOR}/${doctor_id}`)
      console.log(response.data);
      return response.data;
    } catch (error) {
    console.error('Error fetching doctor posts:', error);
      throw error; 
    }
  };

  export const fetchDOCTOR_GRADUATIONS = async () => {
    try {
      const response = await useraxios.get(`${API_URLS.DOCTOR_GRADUATIONS}`); 

      return response.data;
    } catch (error) {
      throw error; 
    }
  };