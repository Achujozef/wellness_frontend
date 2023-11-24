import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ClearNotification, Notification ,DeleteNotification} from "../../../api/Notification";

	
export default function RightNotification() {

    const user = useSelector(state => state.userlogin.patient);
    const [notification, setNotification] = useState([]);



  
    const fetchData = async () => {
      try {
        const data = await Notification();
        setNotification(data);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [user]);

console.log(notification);

const clearNotifications = async () => {
  try {
    await ClearNotification();
    // After clearing, fetch and update the notifications
    fetchData();
  } catch (error) {
    console.error("Error clearing notifications:", error);
  }
};


const handleDeleteNotification = async(notification_id) => {
  try {
    await DeleteNotification(notification_id);
    // After clearing, fetch and update the notifications
    fetchData();
  } catch (error) {
    console.error("Error Deleting notifications:", error);
  }
};

return (
<div className="w-1/4 p-4 bg-gray-100 relative">
<h1
  className="text-3xl font-extrabold mb-4 text-green-500 rounded-md "

>
  Notifications
</h1>
  <div className="mt-4">
      <button
        className="my-4 p-2 rounded-md hover:bg-blue-200 border cursor-pointer bg-yellow-200 w-full"
        onClick={()=>clearNotifications()}
      >
        Clear Notifications
      </button>
    </div>
  <div className="overflow-y-auto" style={{ maxHeight: '700px' }}>
    {notification.map((notification) => (
      <div
        key={notification.id}
        className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mb-4"
      >
        <div className="text-blue-500"> {notification.content}</div>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => handleDeleteNotification(notification.id)}
        >
          Delete
        </button>
      </div>
    ))}

  </div>
</div>
);
}
