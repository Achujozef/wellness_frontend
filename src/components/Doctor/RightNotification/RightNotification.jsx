import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { clearAuth } from "../../../action/User/UserauthAction";
import { useDispatch } from 'react-redux';
import { userlogout } from '../../../action/User/UserloginAction';
import { useSelector } from "react-redux";
import { Notification } from "../../../api/Notification";

	
export default function RightNotification() {
  const clientId = "1088461503927-ksv9cft2vh6ced1f7kclk4jr6l37dcac.apps.googleusercontent.com";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.login.user);
  const [notification, setNotification] = useState([]);

  const handleLogout = () => {
    dispatch(userlogout());
    dispatch(clearAuth());
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Notification();
        setNotification(data);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    }
    fetchData();
  }, [user]);

  const clearNotifications = () => {
    // Implement logic to clear notifications
  };

  const handleDeleteNotification = (notificationId) => {
    // Implement logic to delete a specific notification
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4"> Notifications</h1>
      <div className="space-y-4">
        {notification.map((notification) => (
          <div key={notification.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
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
      <button
        className="my-4 p-2 rounded-md hover:bg-blue-200 border cursor-pointer bg-yellow-200"
        onClick={clearNotifications}
      >
        Clear Notifications
      </button>
    </div>
  );
}