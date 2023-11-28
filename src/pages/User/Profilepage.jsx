import React from 'react'
import Leftnav from '../../components/User/LeftNav/Leftnav'

import RightNotification from '../../components/User/RightNotification/RightNotification'

import Feeds from '../../components/User/Feeds/Feeds'
import Profile from '../../components/User/Profile/Profile'
function UserHomepage() {
  return (
    <div className='flex'>

        <Leftnav/>

<Profile/>
<RightNotification/>
    </div>
  )
}

export default UserHomepage