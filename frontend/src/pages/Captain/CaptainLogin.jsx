import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {captain, setCaptain} = useContext(CaptainDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    // console.log(email, password)
    const captainData ={
      email: email,
      password: password,
    };

      try{
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
         
        if(response.status === 200){
          setEmail("");
          setPassword("");
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem("token", data.token)
        navigate("/captain-home")
      }
    }catch(error){
        console.log(error)
      }
  };

  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>

          <input
            className="bg-[eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:sm"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:sm"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Login
          </button>

          <p className="mb-2 text-center">
            Join a fleet?
            <Link to="/captain-signup" className=" text-blue-600 mb-3">
              {" "}
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
