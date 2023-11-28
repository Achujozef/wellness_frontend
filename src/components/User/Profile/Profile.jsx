import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, updateUser } from "../../../action/User/UseruserAction";
import axios from "axios";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const userDetails = useSelector((state) => state.userusers);
  const users = useSelector((state) => state.userusers);
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    dispatch(fetchUser(user.id));
  }, [dispatch, user.id]);

  useEffect(() => {
    setImage(users.image);
    setUpdatedName(userDetails.name);
    setUpdatedEmail(userDetails.email);
    setUpdatedPhoneNumber(userDetails.phonenumber);
  }, [users]);
console.log("userDetails",userDetails);


  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('name', updatedName);
    formData.append('email', updatedEmail);
    formData.append('phonenumber', updatedPhoneNumber);

    if (updatedImage) {
      formData.append('image', updatedImage);
    }

    const response = await axios.patch(`http://localhost:8001/api/users-edit/`, formData, {
      headers: {
        'Authorization': localStorage.getItem('userauthToken') ? 'Bearer ' + localStorage.getItem('userauthToken') : null,
        'Content-Type': 'multipart/form-data',
      },
    });
    setEditing(false)
  }


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUpdatedImage(file);
  };

  return (
    <div className="w-1/2 p-4 flex flex-col items-center">
      <div className="max-w-xs ">
        <div className="bg-gradient-to-r from-white to-blue-500 p-8 rounded-lg shadow-lg text-white text-center">
          <img
            src={updatedImage ? URL.createObjectURL(updatedImage) : image}
            alt="Profile"
            className="rounded-full mx-auto mb-4 border-4 border-white"
          />
          <h1 className="text-2xl font-semibold">{editing ? "Edit User" : "User Details"}</h1>
        </div>
        <div className="mt-4">
          <p className="text-lg text-gray-800">Name: {editing ? <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} className="border rounded px-2 py-1" /> : users?.name}</p>
          <p className="text-lg text-gray-800">Email: {editing ? <input type="text" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} className="border rounded px-2 py-1" /> : users?.email}</p>
          <p className="text-lg text-gray-800">Phone Number: {editing ? <input type="text" value={updatedPhoneNumber} onChange={(e) => setUpdatedPhoneNumber(e.target.value)} className="border rounded px-2 py-1" /> : users?.phonenumber}</p>
        </div>
        {editing ? (
          <div className="mt-4">
            <label className="block text-gray-800">
              Upload Profile Picture
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2"
              />
            </label>
          </div>
        ) : null}
        <div className="mt-4">
          {editing ? (
            <button
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700"
              onClick={handleUpdate}
            >
              Save Changes
            </button>
          ) : (
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
