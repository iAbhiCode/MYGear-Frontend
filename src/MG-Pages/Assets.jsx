import React from 'react'
import MotorCardDetails from '../MG-Components/MotorCardDetails'
import AddAsset from '../MG-Components/AddAsset'


export default function Assets() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='grid grid-flow-row'>
      <h1 className='py-8 text-4xl font-bold leading-7 text-gray-900 '>Motor Assets</h1>
      <AddAsset/>
      </div>
      <MotorCardDetails />
    </div>
  )
}
