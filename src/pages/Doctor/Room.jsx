import React from 'react'
import Leftnav from '../../components/Doctor/LeftNav/Leftnav'
import Room from '../../components/Doctor/videoCall/Room'
import { useParams } from 'react-router-dom';
function HomePages() {
    const { value } = useParams();
  return (
    <div className='flex'>
  
<Leftnav/>
    <Room value={value}/>
    </div>
  )
}

export default HomePages