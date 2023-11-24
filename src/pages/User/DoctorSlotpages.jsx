import React from 'react'
import Leftnav from '../../components/User/LeftNav/Leftnav'
import DoctorSlotList from '../../components/User/DoctorSlotList/DoctorSlotList'
import RightNotification from '../../components/User/RightNotification/RightNotification'
import { useParams } from 'react-router-dom';
function DoctorProfilepage() {
  const { id } = useParams();

  return (
    <div className='flex'>

        <Leftnav/>

<DoctorSlotList id={id}/>
<RightNotification/>
    </div>
  )
}

export default DoctorProfilepage