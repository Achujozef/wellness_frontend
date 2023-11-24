import React from 'react'
import Leftnav from '../../components/User/LeftNav/Leftnav'
import Room from '../../components/Doctor/videoCall/Room'
import RightNotification from '../../components/User/RightNotification/RightNotification'
import { useParams } from 'react-router-dom';
function DoctorProfilepage() {
    const { value } = useParams();

  return (
    <div className='flex'>

        <Leftnav/>

        <Room value={value}/>
<RightNotification/>
    </div>
  )
}

export default DoctorProfilepage