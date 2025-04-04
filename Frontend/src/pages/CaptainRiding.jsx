import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

  const finishRidePanelRef = useRef(null)

  const [finishRidePanel, setFinishRidePanel] = useState(false)

  useGSAP(function () {
    if(finishRidePanel){
     gsap.to(finishRidePanelRef.current, {
       transform: "translateY(0%)",
     });
    }else{
     gsap.to(finishRidePanelRef.current, {
       transform: "translateY(100%)",
     });
    }
   },[finishRidePanel]);

  return (
    <div className="h-screeen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img className="h-full w-full object-cover"
          src="https://static.vecteezy.com/system/resources/previews/003/076/508/non_2x/city-map-with-taxi-cars-for-mobile-app-top-view-illustration-vector.jpg"
          alt=""/>
      </div>

      <div className="h-1/5 p-6 items-center justify-between relative bg-yellow-400"
      onClick={()=>{
        setFinishRidePanel(true)
      }}
      >
      <h5 className="p-1 text-center absolute top-0 w-[95%]" onClick={()=>{}}>
      <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Confirm Ride</button>
      </div>

      <div ref={finishRidePanelRef}  className="fixed w-full h-screen z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full">
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>

    </div>
  )
}

export default CaptainRiding
