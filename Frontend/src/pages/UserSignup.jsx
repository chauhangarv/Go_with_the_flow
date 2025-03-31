import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  const { user, setUser } = React.useContext(UserDataContext); // Fix context destructuring

  const submirHandler = async(e) => {
    e.preventDefault()
    const newUser = {
      fullname: {  // Fix: changed from fullName to fullname to match backend
        firstname: firstName,  // Fix: changed from firstName to firstname
        lastname: lastName    // Fix: changed from lastName to lastname
      },
      email: email,
      password: password,
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser) // Fix: added /users
      
      if(response.status === 201){
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token) // Fix: changed from 'user' to 'token'
        navigate('/home')
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      // Add error handling here
    }
    
    setEmail('')
    setFirstName('')
    setLastName('')
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
        <form onSubmit={(e)=>submirHandler(e)}>

          <h3 className="text-base font-medium mb-2">What's your name?</h3>
          <div className='flex gap-4 mb-6'>
          <input
            required
            className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
          />
           <input
            required
            className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
          />
          </div>

          <h3 className="text-base font-medium mb-2">What's your email?</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create Account
          </button>
        </form>

        <p className="text-center">
          Already have a account?
          <Link to='/login' className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>

      <div>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
      Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup
