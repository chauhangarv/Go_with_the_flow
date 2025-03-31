import React from 'react'

const RidePopUp = (props) => {

  return (
    <div>
      <h5 className="p-1 text-center absolute top-0 w-[93%]" onClick={()=>{
        props.setRidePopUpPanel(false);
      }}>
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
         <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

         <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-10 rounded-full object-cover' src="https://t4.ftcdn.net/jpg/06/78/09/75/360_F_678097580_mgsNEISedI7fngOwIipYtEU0T6SN8qKv.jpg" alt="" />
                <h2 className='text-lg font-medium'>Hello Buddy!</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
         </div>
        
        <div className='flex gap-2 flex-col justify-between items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-line"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600 -m-1'>56, Street Cental Park, NYC USA</p>
          </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-3-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600 -m-1'>56, Street Cental Park, NYC USA</p>
          </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
          <i className="text-lg ri-refund-2-line"></i>
          <div>
            <h3 className='text-lg font-medium'>$10</h3>
            <p className='text-sm text-gray-600 -m-1'>Cash</p>
          </div>
          </div>
        </div>

       <div className='flex w-full mt-5 items-center justify-between'>
       <button onClick={()=>{
          props.setRidePopUpPanel(false)
        }}
         className='mt-1 bg-gray-400 text-gay-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>

       <button onClick={()=>{
          props.setConfirmRidePopUpPanel(true)}}
         className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>

       </div>
        </div>

    </div>
  )
}

export default RidePopUp
