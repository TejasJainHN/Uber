import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lasttName,setLastName]=useState('');
  const [userData,setUserData]=useState('')
  const submitHandler = (e) => { 
    e.preventDefault();
    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lasttName
      },
      email:email,
      password:password,
      
    })
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
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
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-base ">
            Login
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