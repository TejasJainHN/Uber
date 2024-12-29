import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {CaptainDataContext} from '../context/CaptainContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate=useNavigate();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lasttName,setLastName]=useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');

  
  const {captain,setCaptain}=useContext(CaptainDataContext);
  

  const submitHandler = async (e) => { 
    e.preventDefault();
    const captaindata={
      fullname:{
        firstname:firstName,
        lastname:lasttName
      },
      email:email,
      password:password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        vehicleType:vehicleType,
        capacity:vehicleCapacity
      }
      
    }
    const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captaindata)

    if(response.status===201){
      const data= response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',(data.token))
      navigate('/captain-home')
      
    }
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setVehicleColor('') 
    setVehicleCapacity('')
    setVehicleType('')
    setVehiclePlate('')

  }



  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg w-full font-medium mb-2">What's our Captain's name</h3>
          <div className="flex gap-4 mb-5">
            <input
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base "
              required
              type="text "
              placeholder="Firstname"
            />
            <input
            value={lasttName}
            onChange={(e)=>setLastName(e.target.value)}
              className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base "
              required
              type="text"
              placeholder="Lastname"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>

          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            type="password"
            placeholder="password"
              />
              <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
              <div className="flex gap-4 mb-5">
              <input
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                required
                type="text"
                placeholder="Vehicle Color"
              />
              <input
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                required
                type="text"
                placeholder="Vehicle Plate No."
              />
              </div>
              <div className="flex gap-4 mb-7">
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg"
                required
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
              <input
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                required
                type="number"
                min="1"
                placeholder="Seating Capacity"
              />
              </div>

          
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-base ">
            Create Captain Account
          </button>

          <p className="text-center">
          Already have an account?
            <Link to="/captain-login" className="text-blue-600">
              Login Here 
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-center text-sm text-gray-500">
          By proceeding, I agree to Uber's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
