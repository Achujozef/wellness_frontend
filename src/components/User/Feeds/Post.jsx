import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import CommentPopup from "./CommentPopup";
import { likeOrDislikePost } from "../../../api/likeOrDislikePost ";
import { Link, useNavigate } from "react-router-dom";
import { fetchDoctorDetails } from "../../../api/DoctorProfile";
import Avatar from "@mui/material/Avatar";
const Post = ({ post }) => {


  // ================================================================>DECLERATION<==============================================================================
  const like = post.liked;
  const [isLiked, setIsLiked] = useState(like);
  const [doctor, setDoctor] = useState(null);
  const [likeCount, setLikeCount] = useState(post.like);
  const user = useSelector((state) => state.userlogin.patient);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const navigate = useNavigate()


  // ================================================================>FORMATNG DATE AND TIME<==============================================================================
  function formatDateTime(dateTimeString) {

    const options = {

      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,

    };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDoctorDetails(post.doctor_id)
        setDoctor(data.doctor);
      } catch (error) {
        console.error("Error fetching Doctor details:", error);
      }
    }
    fetchData();
  }, []);

  // ================================================================>VIEW DOCTOR PROFILE<==============================================================================
const handleViewDoctorProfile=()=>{
  console.log("Profile View Clicked", post.doctor_id)
  navigate(`/profile/${post.doctor_id}`);
  fetchDoctorDetails(post.doctor_id)
}



// ================================================================>LIKE OR DISLIKE POST<==============================================================================
  const handleLike = async () => {
    try {

      const { isLiked=false, isCount=0 } = await likeOrDislikePost( post , user.user_id );
      console.log("isLiked",isLiked);


        setIsLiked ( isLiked );
        setLikeCount ( isCount )

    } catch ( error ) {

      console.error ( 'Error liking/unliking post :',error);

    }

  };

// ================================================================COMMENT ==============================================================================
  const handleViewComments = () => {
    setShowComments(true);
  };

  
  const handleCloseComments = () => {
    setShowComments(false);
  };


  const handlePostComment = () => {
    // Implement the logic to post the comment, e.g., using an API call
    // After posting, you can update the list of comments or close the comment popup.
  };

const handleButtonClick =()=>{

}
  return (
    <div className="rounded-md mb-4 bg-gray-50 p-4 relative">
      <div>
      <div className='my-2 p-2 rounded-md cursor-pointer flex items-center'>
  <button onClick={handleViewDoctorProfile} className='flex items-center'>
    <Avatar src={doctor?.image}></Avatar>
    <h1 className='hover:bg-gray-200 cursor-pointer text-xl font-semibold mt-0 mb-0 ml-4'>Dr {doctor?.name}</h1>
  </button>
</div>
        <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
        <p className="text-gray-600">{post.description}</p>
        <p className="text-gray-500 text-sm">{formatDateTime(post.created_at)}</p>
      </div>
      <div className="mt-4 p-4 border-gray-300 rounded-md flex item-center">
        <img src={post.photo} alt="Post Image" className="w-100 mr-4" />
      </div>
      <div className="mt-2 flex justify-between">
        <button
          className={`${isLiked ? "bg-red-500" : "bg-blue-500"} text-white rounded-md px-4 py-2 mr-1`}
          onClick={handleLike}
        >
          {isLiked ? 'Liked' : 'Like'} {likeCount}
        </button>
        <button className="bg-green-500 text-white rounded-md px-4 py-2 mr-2" onClick={handleViewComments}>
          Comment
        </button>

      </div>
      {showComments && (
      <CommentPopup
        comments={post.comments}
        onClose={handleCloseComments}
        post={post}
        />
        )}
    </div>
  );
};

export default Post;
