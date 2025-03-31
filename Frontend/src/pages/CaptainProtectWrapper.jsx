import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({children}) => {
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        if (!token) {
            setCaptain(null) // Fix: changed from setUser to setCaptain
            navigate('/captain-login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
            .catch(err => {

                localStorage.removeItem('token')
                navigate('/captain-login')
            })
    }, [token, captain]) // Fix: changed from user to captain

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!token) return null

    return children
}

export default CaptainProtectWrapper
