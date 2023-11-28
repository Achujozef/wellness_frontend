import useraxios  from "../useraxios";
import { API_URLS } from "./config";


export const postComment =async (post, comment,user) => {
    console.log("USer Id is : ",user.id)
    try {
        console.log("REached Post COmment API ", post.id,"Comment:",comment);
        
        const response = await useraxios.post (
            
            `${API_URLS.CREATE_COMMENT}/${post.id}/`

            ,{ comment: comment });

    } catch (error){
        console.log("ERROR HAPPENING IN API CALL");
        console.error("Errorrrrrr on Posting Comment API  : ",error)
        throw error

    }
};

export const Get_Comments = async (post_id) => {
    try {
      const response = await useraxios.get(`${API_URLS.FETCH_COMMENTS}/${post_id}/`); 
      console.log("The Comment Get Resposne",response.data)
      
      return response.data;

    } catch (error) {
      throw error; 
    }
  };
