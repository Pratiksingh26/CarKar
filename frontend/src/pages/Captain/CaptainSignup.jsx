import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

      const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [userData, setUserData] = useState({});
    
        const submitHandler = (e) => {
            e.preventDefault();
            setUserData({
                fullName:{
                    firstName: firstName,
                    lastName: lastName
                },
                email:email,
                password:password
            })
            setEmail("");
            setPassword("");
            setFirstName("");
            setLastName("");
        }

  return (
    <div className=" py-5 px-5 h-screen p-7 flex flex-col justify-between">
    <div>
    <img
          className="w-16 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
      />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h3 className="text-lg font-medium mb-2">What's your name</h3>

        <div className="flex gap-4 mb-6">
          <input
            className="bg-[eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base"
            required
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="bg-[eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
            required
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <h3 className="text-lg font-medium mb-2">What's your email</h3>

        <input
          className="bg-[eeeeee] rounded mb-6 px-4 py-2 border w-full text-lg placeholder:text-base"
          required
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>

        <input
          className="bg-[eeeeee] rounded mb-6 px-4 py-2 border w-full text-lg placeholder:text-base"
          required
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
          Signup
        </button>
      </form>
      <p className="mb-2 text-center">
        Already a Captain?
        <Link to="/captain-login" className=" text-blue-600 mb-3">
          {" "}
          Login here
        </Link>
      </p>
    </div>
    <div>
      <p className="text-[10px] leading-tight">
        This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply.</span>
      </p>
    </div>
  </div>
  )
}

export default CaptainSignup
