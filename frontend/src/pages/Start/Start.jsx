import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1736435070040-c98215ce275e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1hdGVkJTIwdHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8 flex justify-between flex-col w-full">
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className=' pb-7 bg-white py-4 px-4'>
            <h2 className='text-[28px] font-bold'>Get Started with CarKar</h2>
            <Link to="/login" className='cursor-pointer flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
