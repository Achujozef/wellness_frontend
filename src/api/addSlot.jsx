import axios from 'axios';
const API_URL = 'http://localhost:5000'; 

export const addDoctorSlots = async (doctorId, newSlotData) => {
  try {
    const response = await axios.post(`${API_URL}/doctors/${doctorId}/slots`, newSlotData);
    console.log('Slot added:', response.data); 
  } catch (error) {
    console.error('Error adding slots:', error); 
  }
};


