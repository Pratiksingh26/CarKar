import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainContext, CaptainDataContext } from '../../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

   const {captain, setCaptain} = useContext(CaptainDataContext)

      const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");

        const [vehicleColor, setVehicleColor] = useState("")
        const [vehiclePlate, setVehiclePlate] = useState("")
        const [vehicleCapacity, setVehicleCapacity] = useState(0)
        const [vehicleType, setVehicleType] = useState("")
    
        const submitHandler = async(e) => {
            e.preventDefault();
            const captainData ={
                fullname:{
                    firstname: firstName,
                    lastname: lastName
                },
                email:email,
                password:password,
                vehicle :{
                  color : vehicleColor,
                  plate: vehiclePlate,
                  capacity: vehicleCapacity,
                  vehicleType: vehicleType
                }
            }
           
            try{
           const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

            if(response.status === 201){
              setEmail("");
              setPassword("");
              setFirstName("");
              setLastName("");
              setVehicleColor("");
              setVehiclePlate("")
              setVehicleCapacity("")
              setVehicleType("")
              const data = response.data
              setCaptain(data.captain)
              localStorage.setItem("token", data.token)
              navigate("/captain-login")
            }
          }catch(error){
            console.log(error)
          }
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

        <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>

        <div className='flex gap-4'>

        <input
          className="bg-[eeeeee] rounded mb-6 m px-4 py-2 border w-1/2 text-lg placeholder:text-base"
          required
          type="text"
          placeholder="Vehicle Color"
          value={vehicleColor}
          onChange={(e) => setVehicleColor(e.target.value)}
        />

        <input
          className="bg-[eeeeee] rounded mb-6 px-4 py-2 border w-1/2 text-lg placeholder:text-base"
          required
          type="text"
          placeholder="Vehicle Plate Number"
          value={vehiclePlate}
          onChange={(e) => setVehiclePlate(e.target.value)}
        />

        </div>

        <div className='flex gap-4 mb-7'>
        <input
          className="bg-[eeeeee] rounded mb-6 px-4 py-2 border w-1/2 text-lg placeholder:text-base"
          required
          type="number"
          placeholder="Vehicle Capacity"
          value={vehicleCapacity}
          onChange={(e) => setVehicleCapacity(e.target.value)}
        />

        <select
          className="bg-[eeeeee] rounded mb-6 px-4 py-2 border w-1/2 text-md"
          required
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="">Select Vehicle Type</option>
          <option value="car">car</option>
          <option value="moto">moto</option>
          <option value="auto">auto</option>
        </select>

        </div>

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
