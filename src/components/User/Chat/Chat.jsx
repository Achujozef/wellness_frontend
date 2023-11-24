import React, { useState, useEffect } from 'react';
import useraxios from '../../../useraxios';
import { Link } from 'react-router-dom'; 
import {  useNavigate } from "react-router-dom";

const ChatList = () => {
  const [chatUsers, setChatUsers] = useState([]);
    const navigate = useNavigate()
  useEffect(() => {       
    // Make Axios GET request to the backend endpoint
    useraxios.get('api/chatList/')
      .then(response => {
       console.log("chat_partners",response.data.chat_partners);
        setChatUsers(response.data.chat_partners);
      })
      .catch(error => {
        console.error('Error fetching chat users:', error);
      });
  }, []); 

  const handleButtonClick=(chat_id)=>{
    navigate(`/message/${chat_id}`);
  }
  
  return (
    <div className="w-2/4 p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <div className="w-3/4 max-w-screen-xl space-y-4 p-4"> 
      
        {chatUsers.map((user) => (
   
            <button onClick={()=>handleButtonClick(user.chat_id)}>
            <div
              className="bg-white p-4 rounded-lg flex items-center justify-between shadow-md cursor-pointer mb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">Dr {user.name}</h3>
                  {/* <p className="text-gray-500">
                    {user.messages.length > 0
                      ? user.messages[user.messages.length - 1].text
                      : 'No messages yet'}
                  </p> */}
                </div>
              </div>
              {/* {user.messages.some((message) => message.unread) && (
                <div className="bg-blue-500 text-white px-2 py-1 rounded-full">
                  {user.messages.filter((message) => message.unread).length}
                </div>
              )} */}
            </div>
            </button>

        ))}
     
      </div>
    </div>
  );
};

export default ChatList;