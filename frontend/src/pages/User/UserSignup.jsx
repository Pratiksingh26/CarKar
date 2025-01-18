import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserDataContext } from "../../context/UserContext";
import axios from "axios"

const UserSignup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userData, setUserData] = useState({});

    const navigate = useNavigate()

    const {user, setUser} = useContext(UserDataContext)

    const submitHandler = async(e) => {
        e.preventDefault();
      const newUser = {
            fullname:{
                firstname: firstName,
                lastname: lastName
            },
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
           console.log(response)
          if(response.status === 201){
            const data = response.data
            
            setUser(data.user)
            localStorage.setItem("token", data.token)
            navigate("/login")
          }

        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
    }
  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
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
          Already a User?
          <Link to="/login" className=" text-blue-600 mb-3">
            {" "}
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls, whatsapp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
