import React, { useEffect, useState } from "react";
import { postComment ,Get_Comments} from "../../../api/postComment";
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
const CommentPopup = ({ comments, onClose ,post}) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const user = useSelector(state => state.userlogin.patient);


  async function fetchData() {
    try {
      const data = await Get_Comments(post.id);
      setAllComments(data);
      // console.log("allComments",data)
    } catch (error) {
      console.error("Error fetching feeds:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handlePostComment = async () => {
    console.log("Reached handlePostComment",user);
    try{
      await postComment(post,comment,user)
      fetchData()
      // onClose()
    }
    catch ( error ) {

      console.error ( 'Error posting comment :',error);

    }
  };

// ================================================================>DATE TIME FORMATING<==============================================================================
  function formatDateTime ( dateTimeString ) {

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

// ================================================================>COMMENT CHANGES<==============================================================================
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

console.log("allComments 1234",allComments);
  return (
<Modal
  isOpen={true} 
  onRequestClose={onClose}
  style={{
    content: {
      width: '50%', 
      margin: 'auto',
      borderRadius: '20px',
      height:'65%'
    },
  }}
>
  <div className="flex justify-between items-center bg-green-500 text-white rounded-t-md p-4">
    <h2 className="text-2xl font-bold">Comments</h2>
    <button onClick={onClose} className="text-white hover:text-gray-100">
      Close
    </button>
  </div>
  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
    <div className="comment-list">
      {allComments?.map((comment) => (
        <div key={comment.id} className="comment-item p-4 border-b border-gray-300">
          <p className="comment-text">{comment.text}</p>
          <p className="comment-timestamp text-gray-500 text-sm">
            {formatDateTime(comment.created_at)}
          </p>
        </div>
      ))}
    </div>
  </div>
  <div className="comment-input p-4 bg-gray-50">
      <input
        type="text"
        placeholder="Write a comment"
        className="comment-input-field w-full p-2 border rounded-md"
        value={comment}
        onChange={handleCommentChange}
      />
      <br></br>
      <br></br>
      <button
        className="comment-submit-button bg-green-500 text-white rounded-md px-4 py-2 ml-2"
        onClick={handlePostComment}
      >
        Post
      </button>
    </div>
</Modal>
  );
};
export default CommentPopup;

