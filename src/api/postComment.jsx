import axios  from "axios";
import { API_URLS } from "./config";


export const postComment =async (post, comment,user) => {
    console.log("USer Id is : ",user.id)
    try {
        console.log("REached Post COmment API ", post.id,"Comment:",comment);
        
        const response = await axios.post (
            
            `${API_URLS.CREATE_COMMENT}/${post.id}/?user_id=${user.user_id}`

            ,{ comment: comment });

    } catch (error){
        console.log("ERROR HAPPENING IN API CALL");
        console.error("Errorrrrrr on Posting Comment API  : ",error)
        throw error

    }
};