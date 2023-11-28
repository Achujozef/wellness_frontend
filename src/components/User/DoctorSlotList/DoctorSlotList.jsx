import React, { useEffect, useState } from 'react'
import {API_URLS} from '../../../api/config'
import {fetch_Slot_by_Doctor,Book_Slot} from '../../../api/fetchDoctorSlotList'
import { useNavigate } from 'react-router-dom';
import useraxios from '../../../useraxios';
import axios from 'axios';
import {Payment_sucess} from '../Loader/Payment_sucess'
import Modal from 'react-modal';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


Modal.setAppElement('#root');
export default function DoctorSlotList(id) {


  const [paymentSuccess, setPaymentSuccess] = useState()
  const [selectedItemAmount, setSelectedItemAmount] = useState()
    const navigate = useNavigate()
    const [slots,setSlots]=useState()



    useEffect(() => {
        async function fetchData(){
          try{
            const data = await fetch_Slot_by_Doctor(id.id)
            setSlots(data)
          }catch(error){
            console.log("Error fetching Slots", error)
        }
      }
      fetchData()
    }, [id.id])

const fetchData=async  ()=>{
  try{
    const data = await fetch_Slot_by_Doctor(id.id)
    setSlots(data)
  }catch(error){
    console.log("Error fetching Slots", error)
}
}
    console.log(slots);




async function displayRazorpay(slot_id) {


  console.log("Reached the Razorpay booking function");
 
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')



  if (!res) {
    alert('Failure loading the Razorpay SDK. PLease make sure you are connected to the internet')
    return
  }
  const orderData =await Book_Slot(slot_id)
  console.log("orderData",orderData)
  //const {order_id, amount, currency} = orderData.data
  const order_id =orderData.order_id
  const amount = orderData.amount
  const currency = orderData.currency

  console.log("amount, currency, order_id",amount, currency, order_id)
  
  const options = {
          key: "rzp_test_U83p3r8qXusQLO", // Enter the Key ID generated from the Dashboard
          amount: amount.toString(),
          currency: currency,
          name: "JO Doctor Consulting",
          description: "Appointment Booking",
          // image: logo,
          order_id: order_id,
          handler: async function (response) {
              const razorpay_paymentId = response.razorpay_payment_id
              const razorpay_orderId = response.razorpay_order_id
              const razorpay_signature = response.razorpay_signature
              try{
              const res = await useraxios.post(`${API_URLS.VERIFY_PAYMENT}`, {
                razorpay_paymentId,
                razorpay_orderId,
                razorpay_signature
              })

              if (res.data.status === 'success'){
                setPaymentSuccess(true);
                fetchData()
                setTimeout(() => {
                  setPaymentSuccess(false);
                }, 4000);
              }else {
                alert('Payment verification failed');
              }
            }catch (error) {
              console.error('Error verifying payment:', error);
              alert('An error occurred while verifying the payment');
            }
          },
          prefill: {
              name: "John Doe",
              email: "doejon@example.com",
              contact: "9999999999",
          },
          theme: {
              color: "#2dd641",
          },
      };
  const paymentObject = new window.Razorpay(options)
  paymentObject.open()
}






  return (
<div className="w-2/4 p-4 flex flex-col items-center">
  <div className="max-w-2xl mx-auto">
    
  <div
        className="overflow-y-auto mt-4"
        style={{ maxHeight: "780px" }}
      >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {slots?.map((slot) => (
  <div
    key={slot._id}
    className={`bg-white shadow-lg rounded-lg overflow-hidden ${slot.booked ? 'opacity-50' : ''}`}
  >
    <div className="p-4">
      <p className="text-gray-800 text-lg font-semibold mb-2">
        {new Date(slot.time).toLocaleString('en-IN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </p>
      <p className="text-gray-800 text-lg font-semibold mb-2">
        {slot.booked && <span className="text-red-500">Booked</span>}
      </p>
      <p className="text-gray-800 text-lg font-semibold mb-2">
        ₹ {slot.price}
      </p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          {!slot.booked && (
            <button className="bg-green-500 text-white rounded-md px-4 py-2 mr-1"
            onClick={() => displayRazorpay(slot.id)}>
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
))}
    </div>
    </div>
  </div>
  <Modal
  isOpen={paymentSuccess}
  onRequestClose={() => setPaymentSuccess(false)}
  style={{
    content: {
      width: '800px',
      margin: 'auto', // Center the modal horizontally
    },
  }}
>
  <Payment_sucess />
</Modal>
</div>


    
  )
}
