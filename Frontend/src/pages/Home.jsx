import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          rotate: 180,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          rotate: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(function () {
   if(vehiclePanelOpen){
    gsap.to(vehiclePanelRef.current, {
      transform: "translateY(0%)",
    });
   }else{
    gsap.to(vehiclePanelRef.current, {
      transform: "translateY(100%)",
    });
   }
  },[vehiclePanelOpen]);


  useGSAP(function () {
    if(confirmRidePanel){
     gsap.to(confirmRidePanelRef.current, {
       transform: "translateY(0%)",
     });
    }else{
     gsap.to(confirmRidePanelRef.current, {
       transform: "translateY(100%)",
     });
    }
   },[confirmRidePanel]);


   useGSAP(function () {
    if(vehicleFound){
     gsap.to(vehicleFoundRef.current, {
       transform: "translateY(0%)",
     });
    }else{
     gsap.to(vehicleFoundRef.current, {
       transform: "translateY(100%)",
     });
    }
   },[vehicleFound]);


   useGSAP(function () {
    if(waitingForDriver){
     gsap.to(waitingForDriverRef.current, {
       transform: "translateY(0%)",
     });
    }else{
     gsap.to(waitingForDriverRef.current, {
       transform: "translateY(100%)",
     });
    }
   },[waitingForDriver]);


  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div 
       onClick={() => setVehiclePanelOpen(false)}
       className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://static.vecteezy.com/system/resources/previews/003/076/508/non_2x/city-map-with-taxi-cars-for-mobile-app-top-view-illustration-vector.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(!panelOpen)}
            className="absolute right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-8 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 px-3 py-10 pt-12 bg-white translate-y-full"
      >
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full"
      >
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white">
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>

    </div>
  );
};

export default Home;
