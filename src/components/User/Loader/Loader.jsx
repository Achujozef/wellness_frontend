import React from 'react'
import Lottie from 'lottie-react'

import mylottie from '../../../images/lottieAnimation/loti_loading.json'


export const Loader=()=>{
  return (
    <div className='w-full align-middle p-4'  style={{
      content: {
        width: '800px',
        margin: 'auto', // Center the modal horizontally
      },
    }}>
        <Lottie  animationData={mylottie} loop={true} />
    </div>
  )
}



