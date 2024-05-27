import React, { useState } from 'react'
import MotorCardDetails from '../MG-Components/MotorCardDetails'
import AddAsset from '../MG-Components/AddAsset'
import { Link } from 'react-router-dom'


export default function Assets() {
  const [addState, setAddState] = useState(false)
  const handleClick = () =>{
    setAddState(curr => !curr)
  }
  return (
    <>
      <div className='grid'>

        <div className='flex justify-center items-center '>

          <h1 className='py-8 text-4xl font-bold leading-7 text-gray-900 mx-auto'>All Assets</h1>
          {!addState ? <button onClick={handleClick} className='border-2 rounded-xl py-2 px-4 mr-4'><Link to="#">Add Asset</Link></button> : <button onClick={handleClick} className='border-2 rounded-xl py-2 px-10 mr-4'> X </button>}

        </div>
        {addState ? 
        <AddAsset /> : 
        <div>
          <MotorCardDetails />
          <MotorCardDetails />
          <MotorCardDetails />
          <MotorCardDetails />
          <MotorCardDetails />
        </div>
        }
        
        
      </div>
    </>
  )
}
