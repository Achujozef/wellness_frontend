import React, { useEffect, useState } from "react";
import { fetchDoctors ,fetchLANGUAGES, fetchSPECIALIZING, fetchDOCTOR_BY_LANGUAGES, fetchDOCTOR_BY_SPECIALIZING } from "../../../api/fetchDoctors";
import { fetchDoctorDetails } from "../../../api/DoctorProfile";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function DoctorList() {
  const navigate = useNavigate()
  const [doctors, setDoctors] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedSpecializing, setSelectedSpecializing] = useState("");


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
        setFilteredDoctors(data);
        console.log("DOCTOR DATA IS ",data);
      } catch (error) {
        console.error('Error fetching doctors: ', error)
      }
    }
    async function fetchLanguageData() {
      try {
        const languageData = await fetchLANGUAGES();
        setLanguages(languageData);
        console.log("languageData",languages);
      } catch (error) {
        console.error('Error fetching languages: ', error);
      }
    }
    async function fetchSpecializingData() {
      try {
        const specializingData = await fetchSPECIALIZING();
        setSpecializations(specializingData);
        // console.log("specializingData",specializingData);
      } catch (error) {
        console.error('Error fetching specializations: ', error);
      }
    }
    fetchData();
    fetchLanguageData();
    fetchSpecializingData();

  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    filterDoctors(event.target.value);
  };


  const  handleLanguageChange = async (event) => {
    const data = await fetchDOCTOR_BY_LANGUAGES(event.target.value);
    setFilteredDoctors(data);
  };


  const handleSpecializingChange = async (event) => {
    const data = await fetchDOCTOR_BY_SPECIALIZING(event.target.value);
    setFilteredDoctors(data);
  };


  const filterDoctors = (query) => {
    let  filtered = doctors.filter((doctor) =>
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
      <div className="mt-4 w-full max-w-md flex items-center">
        <select
          className="w-1/2 p-2 border border-gray-300 rounded-md"
          onChange={handleLanguageChange}
          value={selectedLanguage}
        >
          <option value="">Select Language</option>
          {languages?.map((language) => (
            <option key={language.id} value={language.id}>
              {language.name}
            </option>
          ))}
        </select>
        <select
          className="w-1/2 p-2 ml-2 border border-gray-300 rounded-md"
          onChange={handleSpecializingChange}
          value={selectedSpecializing}
        >
          <option value="">Select Specializing</option>
          {specializations?.map((specializing) => (
            <option key={specializing.id} value={specializing.id}>
              {specializing.name}
            </option>
          ))}
        </select>
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
                <h2 className="text-2xl font-semibold">Dr {doctor.name}</h2>
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
