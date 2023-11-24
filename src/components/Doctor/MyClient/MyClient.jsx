import React, {useState,useEffect} from 'react';
import {fetchFollowers} from '../../../api/fetchFollowers'
import { useDispatch} from "react-redux";


export default function Client() {
  const [followers,setFollowers]=useState()
  const [searchQuery, setSearchQuery]= useState('')
  const [currentPage, setCurrentPage]= useState(1)
  const dispatch = useDispatch();
console.log("Ivide undu")

// useEffect(() => {
//     fetchFollowers().then(res => {
//       console.log("Followers componentil ",res.followers);
//       setFollowers(res.followers)
//     })
// }, [dispatch]);



useEffect(() => {
  async function fetchData() {
    try {
      const data = await fetchFollowers();
      setFollowers(data);
      console.log("Followers componentil ",data);
    } catch (error) {
      console.error('Error fetching doctors: ', error)
    }
  }
  fetchData();
}, []);


    const filteredClitents=followers.filter((client)=>
    client.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    )

    const itemsPerPage=5

    const totalPages=Math.ceil(filteredClitents.length/itemsPerPage);


    const startIndex = (currentPage-1)*itemsPerPage;
    const endIndex = startIndex + itemsPerPage


    const currentClients = filteredClitents.slice(startIndex,endIndex)
    const handlePageChange = (page)=>{
      setCurrentPage(page)
    }
  return (
    <div className='w-3/4 h-screen p-20 bg-green-100 flex flex-col items-center'>
      <h1 className='text-2xl font-semibold text-green-800 mb-4'>
        Clients List
      </h1>
      <input
      type='text'
      placeholder='Search Clients'
      className='w-full py-2 px-4 mb-4 rounded-md border border-gray-300'
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
      />
      <div className='grid grid-cols-5 gap-4'>
        {followers.map((client) => (
          <div
            key={client.id}
            className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center'>
            <img
              src={client.photo}
              alt={`${client.name}'s Profile`}
              className='w-20 h-20 object-cover rounded-full mb-2'
            />
            <p className='text-xl font-semibold'>{client.name}</p>
            <div className='space-x-2'>
              <button className='py-2 px-4 rounded-full flex items-center text-blue-600 hover:underline'>
                View Profile
              </button>
              <button className='text-blue-600 hover:underline'>
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-4 flex justify-center space-x-2'>
        {Array.from({length:totalPages},(_,index)=>(
          <button
          key={index}
          className={`px-3 py-2 rounded-full ${
            currentPage === index +1
            ? `bg-green-800 text-white`
            : 'bg-white border border-gray-300 text-gray-600 hover:bg-green-800 hover:text-white'
          }`}
          onClick={()=>handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
