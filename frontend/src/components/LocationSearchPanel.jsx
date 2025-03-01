import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props)

   const locations = [
    "24B, Near kapoor's cafe, Pratik coding school, Chandrapur",
    "22C, Near Malhotra's cafe, Pratik's Mansion House, Chandrapur",
    "20D, Near Singhania's cafe, Chattrapati Shivaji Nagar, Chandrapur",
    "18A, Near Raskatha cafe, Ramdaspeth, Nagpur",
   ]

  return (
    <div>
      {/* sample data */}
      {locations.map((elem,index) => (
         <div key={index} onClick={() => {
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
         }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-lg items-center my-2 justify-start'>
         <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
         <h4  className='font-medium'>{elem}</h4>
       </div>
      ))}
    </div>
  )
}

export default LocationSearchPanel
