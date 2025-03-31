import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
    <h5 className="p-1 text-center absolute top-0 w-[93%]" onClick={()=>{
        props.setVehicleFound(false);
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
       <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
      
      <div className='flex gap-2 flex-col justify-between items-center'>
      <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png" alt="" />
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
      </div>

  </div>
  )
}

export default LookingForDriver
