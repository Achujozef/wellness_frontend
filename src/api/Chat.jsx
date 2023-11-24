
import useraxios from "../useraxios";
import { API_URLS } from "./config";


export const fetchMessages = async(chat_id)=>{
    try{
        const response = await useraxios.get(`${API_URLS.GET_MESSAGES}/${chat_id}`)
        return response.data;
    }catch(error){
        console.error("Error fetching Chat Messages: " ,error)
        throw error
    }
}
// export const SentMessages  = async (chat_id) => {
//     try {
//       const response = await useraxios.get(`${API_URLS.POST_BY_DOCTOR}/${doctor_id}`)
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//     console.error('Error fetching doctor posts:', error);
//       throw error; 
//     }
//   };
