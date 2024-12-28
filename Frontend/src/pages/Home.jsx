import React from 'react'
import { Link } from 'react-router-dom'
Link

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center  bg-[url(https://media.wired.com/photos/593257829be5e55af6c24476/master/w_2560%2Cc_limit/trafficlight-inline.jpg)] h-screen pt-8   w-full flex justify-between flex-col bg-red-400'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3  rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home

