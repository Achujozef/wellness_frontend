import axios from "../axios";


export const fetchFollowers = async () => {
    try {
      const response = await axios.get('http://localhost:8001/api/doctor-followers/'); 
        console.log("Followerssssssss",response.data);
      return response.data;
    } catch (error) {
      throw error; 
    }
  };