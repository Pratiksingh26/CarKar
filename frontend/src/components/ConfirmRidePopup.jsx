import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopup = () => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0" onClick={() => {props.setConfirmRidePopupPanel(false)}}>

        <i className=" text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm this ride to Start!</h3>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt=""
          />
          <h2 className="text-lg font-medium">Pratik Singh</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2km</h5>
      </div>

      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <Link to={"/captain-riding"} className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg">
          {" "}
          Confirm
        </Link>

        <button onClick={() => {props.setRidePopupPanel(false), props.setConfirmRidePopupPanel(false)}} className="w-full mt-2 bg-red-600 text-white font-semibold p-2 rounded-lg">
          {" "}
          Reject
        </button>
      </div>
    </div>
  )
}

export default ConfirmRidePopup
