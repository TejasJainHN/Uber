import React from 'react'

const LocationSearchPanel = (props) => {

  const locations=["MG Road, Bangalore",
  "Indiranagar 100 Feet Road",
  "Koramangala 5th Block",
  "Brigade Road",
  "Commercial Street",
  "Whitefield Main Road",
  "Electronic City Phase 1",
  "JP Nagar 6th Phase",
  "HSR Layout Sector 1",
  "Malleshwaram 18th Cross"]
  

  return (
    <div className='h-full'>
      {locations.map(function(elem,index){
        return <div key={index} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)}} className='flex  gap-4 my-2 p-3 border-gray active:border-black rounded-xl border-4  justify-start items-center'>
          <h2 className='bg-[#eee] h-7 w-12 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill text-xl'></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
      })}
    </div>
  )
}

export default LocationSearchPanel
