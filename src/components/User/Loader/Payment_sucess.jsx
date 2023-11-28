import React from 'react'
import Lottie from 'lottie-react'
import payment_done from '../../../images/lottieAnimation/payment_done.json'
export const Payment_sucess=()=>{
    return (
      <div className='w-full align-middle p-4'>
          <Lottie  animationData={payment_done} loop={true} />
      </div>
    )
  }
  