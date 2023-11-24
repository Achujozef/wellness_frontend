import React from 'react'
import Leftnav from '../../components/User/LeftNav/Leftnav'
import Chat from '../../components/User/Chat/Chat'
import RightNotification from '../../components/User/RightNotification/RightNotification'

function UserChatpage() {
  return (
    <div className='flex'>

        <Leftnav/>

<Chat/>
<RightNotification/>
    </div>
  )
}

export default UserChatpage