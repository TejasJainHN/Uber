import React, { useRef, useState } from "react";
import {useGSAP} from  '@gsap/react';
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen,setPanelOpen]=useState(false)
  const panelRef=useRef(null)
  const panelCloseRef=useRef(null)
  const [vehiclePanel,setVehiclePanel]=useState(false);
  const vehiclePanelref=useRef(null)
  const vehicleFoundref=useRef(null)

  const [confirmRidePanel,setConfirmRidePanel]= useState(false)
  const confirmRidePanelRef=useRef(null)
  const WaitingForDriverRef=useRef(null)

  const [vehicleFound, setVehicleFound]= useState(false)
  const [waitingForDriver,setWaitingForDriver]= useState(false)



  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        opacity:1,
       
        
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    } else {
      gsap.to(panelRef.current,{
        height:'0%',
        opacity:0,
        
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })

    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelref.current,{
      transform:'translateY(0)'
    })
  }else {
    gsap.to(vehiclePanelref.current,{
      transform:'translateY(100%)'
    })
  }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(0)'
    })
  }else {
    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundref.current,{
      transform:'translateY(0)'
    })
  }else {
    gsap.to(vehicleFoundref.current,{
      transform:'translateY(100%)'
    })
  }
  },[vehicleFound])
  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(WaitingForDriverRef.current,{
      transform:'translateY(0)'
    })
  }else {
    gsap.to(WaitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[waitingForDriver])
  

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div  className="h-screen w-screen">
        <img
          className="h-screen w-screen object-cover"
          src="https://datei.wiki/blog/wp-content/uploads/2020/10/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg"
          alt=""
        />
      </div>
      <div className=" h-screen flex flex-col justify-end absolute top-0 w-full ">
        <div className="h-[30%] bg-white p-5 relative">
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className="absolute opacity-0 top-6 right-6 text-2xl">
            <i className="ri-arrow-down-wide-line"></i> 
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            action=""
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
            onClick={()=>setPanelOpen(true)}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5 "
              type="text"
              placeholder="Add a Pick up location"
            />
            <input
            onClick={()=>setPanelOpen(true)}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg  w-full mt-5"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white">
          <LocationSearchPanel  setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel}/>
        </div>

        <div ref={vehiclePanelref} className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14">
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
        <div ref={confirmRidePanelRef} className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12">
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={vehicleFoundref}  className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={WaitingForDriverRef} className="fixed w-full z-10 bg-white bottom-0  px-3 py-6 pt-12">
        <WaitingForDriver waitingForDriver={waitingForDriver} />
        </div>
      </div>
    </div>
  );
};

export default Home;
