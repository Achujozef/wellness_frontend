import useraxios  from "../useraxios";
import { API_URLS } from "./config";


export const likeOrDislikePost =async (post, user) => {

    try {
        const response = await useraxios.post (

            `${API_URLS.POST_LIKE_DISLIKE}/${post.id}/like-dislike/?user_id=${user}`
        
        );
        console.log("DDDDDDDDDDDDDFFFFFFFFF",response)
        if (response.data.message === 'Liked' || response.data.message === 'Disliked') {
           
            return {

                isLiked: response.data.message ==='Liked',
                
                isCount: response.data.like_count
                
            }
        }
    } catch (error){
        console.log("ERROR HAPPENING IN API CALL");
        console.error("Errorrrrrr liking/unliking post : ",error)
        throw error

    }
};