import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useDispatch, useSelector } from 'react-redux';

const  Room=() =>{

        const {value} = useParams()
        const users = useSelector((state) => state.users);
        const roomId = value
        

        // Use optional chaining to get the name (if the user is found)
        const name = users?.name?.toString() || 'DefaultName';
        const myMeeting= async(element)=>{
            const appId= 2104582003;
            const serverSecret ="209106230eafde14d26874c3635f0000";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                 appId,
                 serverSecret,
                 roomId,
                 Date.now().toString(),
                 name
                );
        
        const zc = await ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container:element,
            // sharedLinks:[
            //     {
            //         name: 'Copy Link',
            //         url : `http://localhost:3000/user/room/${roomId}`,
            //     }
            // ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:true
        })
        
        }
        console.log(users.name);
  return (
    <div className="w-1/2 p-4 flex flex-col items-center">
       <div ref={myMeeting}/>
    </div>
  )
}

export default Room