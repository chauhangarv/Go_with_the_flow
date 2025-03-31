import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

  useGSAP(function () {
    if(ridePopUpPanel){
     gsap.to(ridePopUpPanelRef.current, {
       transform: "translateY(0%)",
     });
    }else{
     gsap.to(ridePopUpPanelRef.current, {
       transform: "translateY(100%)",
     });
    }
   },[ridePopUpPanel]);


   useGSAP(function () {
    if(confirmRidePopUpPanel){
     gsap.to(confirmRidePopUpPanelRef.current, {
       transform: "translateY(0%)",
     });
    }else{
     gsap.to(confirmRidePopUpPanelRef.current, {
       transform: "translateY(100%)",
     });
    }
   },[confirmRidePopUpPanel]);


  return (
    <div className="h-screeen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://static.vecteezy.com/system/resources/previews/003/076/508/non_2x/city-map-with-taxi-cars-for-mobile-app-top-view-illustration-vector.jpg"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails /> 
      </div>

      <div ref={ridePopUpPanelRef}  className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>

      <div ref={confirmRidePopUpPanelRef}  className="fixed w-full h-screen z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
