import React, { useEffect, useState } from 'react'
import {fetchDoctorSlotList} from '../../../api/fetchDoctorSlotList'
import { useNavigate } from 'react-router-dom';
export default function DoctorSlotList(id) {
    const navigate = useNavigate()
    const [slots,setSlots]=useState()

    useEffect(() => {
        
        console.log("REached Slot Page with Id :", id.id);
        fetchDoctorSlotList(id.id)
        .then((response)=>{
            setSlots(response.data)
        })
        .catch((error)=>{
            console.log("Error fetching Slots", error)
        })

    }, [])
    
  return (
<div className="w-2/4 p-4 flex flex-col items-center">
  <div className="max-w-2xl mx-auto">
  <div
        className="overflow-y-auto mt-4"
        style={{ maxHeight: "780px" }}
      >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {slots?.map((slot) => (
        <div
          key={slot._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <p className="text-gray-800 text-lg font-semibold mb-2">
              {slot.slot_time}
            </p>
            <p className="text-gray-800 text-lg font-semibold mb-2">
              {slot.status}
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <button className="bg-green-500 text-white rounded-md px-4 py-2 mr-1">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>
</div>


    
  )
}
