import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from "../context/CaptainContext";


const CaptainLogin = () => { // Fix: changed from UserLogin to CaptainLogin
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const captainData = {
        email: email,
        password: password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

      if (response.status === 200) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      console.error(error.response?.data || error.message)
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={submitHandler}> {/* Fix: changed from submirHandler to submitHandler */}
          <h3 className="text-xl font-medium mb-2">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-xl font-medium mb-2">Enter Password</h3>

          <input
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>

        <p className="text-center">
          Join fleet?
          <Link to='/captain-signup' className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link to='/login'
        className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-9 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin; // Fix: changed from UserLogin to CaptainLogin
