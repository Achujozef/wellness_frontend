
import useraxios from "../useraxios";
export const followUnfollow = async(doctor_id)=>{
    try{
        const response = await useraxios.post(`/api/follow-doctor/${doctor_id}/`)
        return response.data;
    }catch(error){
        console.error("Error to follow the doctor: " ,error)
        throw error
    }
}