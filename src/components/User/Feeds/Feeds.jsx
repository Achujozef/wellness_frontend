import React, { useEffect, useState } from "react";
import TopNav from "../TopNav/TopNav";
import { fetchFeeds ,fetchFollowerFeeds} from "../../../api/feeds";
import { useSelector } from "react-redux";
import Post from './Post'; 

export default function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const user = useSelector(state => state.userlogin.patient);
  console.log("USER FROM FEEDS COMPONENT",user);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFeeds(user.user_id);
        setFeeds(data);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    }
    fetchData();
  }, [user]);


  function handleFollowedButtonClick() {
    async function fetchData() {
      try {
        const data = await fetchFollowerFeeds();
        setFeeds(data);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    }
    fetchData()
  }


  function handleForYouButtonClick() {
    async function fetchData() {
      try {
        const data = await fetchFeeds(user.user_id);
        setFeeds(data);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    }
    fetchData()
  }



  return (
    <div className="w-1/2 p-4 flex flex-col items-center">
      <TopNav />
      <div className="">
        <button
          className='my-2 mx-2 p-2 rounded-lg border w-32 bg-gray-100 hover:bg-green-600  cursor-pointer text-xl font-semibold'
          onClick={() => handleForYouButtonClick("Item 1")}
        >
         For You
        </button>
        <button
          className='my-2 mx-2 p-2 rounded-lg border w-32 bg-gray-100 hover:bg-green-600  cursor-pointer text-xl font-semibold'
          onClick={() => handleFollowedButtonClick()}
        >
           Followed
        </button>
      </div>
      <div className="overflow-y-auto mt-4" style={{ maxHeight: '700px' }}>
      {feeds.map((feed) => (
        <Post key={feed.id} post={feed} />
      ))}
      </div>
      <h1>The End </h1>
    </div>
  );
}
