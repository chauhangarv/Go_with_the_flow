import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/06/78/09/75/360_F_678097580_mgsNEISedI7fngOwIipYtEU0T6SN8qKv.jpg" alt="" />
            <h4 className="text-lg font-medium">Hello Buddy!</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">$300</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

        <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-time-line"></i>
            <h5 className="text-lg font-medium">10.5</h5>
            <p className="tetx-sm tetx-gray-600">Hours Online</p>
            </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.5</h5>
            <p className="tetx-sm tetx-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-money-dollar-circle-line"></i>
            <h5 className="text-lg font-medium">10.5</h5>
            <p className="tetx-sm tetx-gray-600">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
