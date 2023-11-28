import React from 'react'
import Leftnav from '../../components/User/LeftNav/Leftnav'
import Following from '../../components/User/Following/Following'
import RightNotification from '../../components/User/RightNotification/RightNotification'

function UserDoctorListpage() {
  return (
    <div className='flex'>

        <Leftnav/>
<Following/>
<RightNotification/>
    </div>
  )
}

export default UserDoctorListpage