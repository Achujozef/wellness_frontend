import axios from "axios"

export const fetchDoctorSlotList = async(doctor_id)=>{
    try{
        console.log("REACHED API CALLING",doctor_id)
        const response = await axios.get(`http://localhost:8004/doctor/${doctor_id}/slots`)
        console.log(response.data);
        return response
    }catch(error){
        console.log("Error fetching on Slots of doctor", error)
        throw error
    }
}

