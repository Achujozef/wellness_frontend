import axios from "../axios"
import { API_URLS } from "./config";
export const postDelete= async(postId)=>{
    try{
        const response = await axios.delete(`${API_URLS.POST_DELETE}/${postId}`)
        console.log("RESPONSE IN POST DELETE",response)
        if (response.status === 204){
            return response
        }
        
    }catch(error){
        console.error("Failed To delete Post")
    }
}