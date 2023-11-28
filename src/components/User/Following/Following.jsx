import React, { useEffect, useState } from "react";
import { fetch_Following_DOCTORS  } from "../../../api/fetchDoctors";
import { fetchDoctorDetails } from "../../../api/DoctorProfile";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {Fetch_User_Followings} from '../../../api/fetchFollowers'
export default function DoctorList() {
  const navigate = useNavigate()
  const [doctors, setDoctors] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Fetch_User_Followings();
        setDoctors(data.followed_doctors);
        setFilteredDoctors(data.followed_doctors);
      } catch (error) {
        console.error('Error fetching doctors: ', error)
      }
    }
    
    fetchData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    filterDoctors(event.target.value);
  };
  const filterDoctors = (query) => {
    let filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const handleButtonClick=(doctor_id)=>{
    navigate(`/profile/${doctor_id}`);
    fetchDoctorDetails(doctor_id)
  }
  return (
    <div className="w-1/2 p-4 flex flex-col items-center">
      <h1>Search the Doctor</h1>
      <div className="mt-4 w-full max-w-md relative flex items-center">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 pr-10"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer">
          <AiOutlineSearch />
        </div>
      </div>


      <div
        className="overflow-y-auto mt-4"
        style={{ maxHeight: "780px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold">{doctor.name}</h2>
                <p>{doctor.graduations?.map((graduation, index) => graduation.graduation.name).join(", ")}</p>


                <p className="text-gray-600">
                  {doctor.specializations?.map((specializing,index)=>specializing.specializing.name).join(", ")}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={()=>handleButtonClick(doctor.id)}>
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
