import React from 'react'
import Leftnav from '../../components/Doctor/LeftNav/Leftnav'
import Feeds from '../../components/Doctor/Feeds/Feeds'
import RightNotification from '../../components/Doctor/RightNotification/RightNotification'
function HomePages() {
  return (
    <div className='flex'>
  
<Leftnav/>
<Feeds/>
<RightNotification/>
    </div>
  )
}

export default HomePages