import React from 'react'
import Leftnav from '../../components/User/LeftNav/Leftnav'
import Message from '../../components/User/Chat/Message'
import RightNotification from '../../components/User/RightNotification/RightNotification'
import { useParams } from 'react-router-dom';

function UserMessagepage() {
    const { id } = useParams();
  return (
    <div className='flex'>

        <Leftnav/>

<Message id={id}/>
<RightNotification/>
    </div>
  )
}

export default UserMessagepage