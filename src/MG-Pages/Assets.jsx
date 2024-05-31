import React, { useEffect, useState } from 'react'
import MotorCardDetails from '../MG-Components/MotorCardDetails'
import AddAsset from '../MG-Components/AddAsset'
import { Link } from 'react-router-dom'
import axios from '../Utils/axiosInstance'



export default function Assets() {
  const [assetData, setAssetData] = useState([])
  const [addState, setAddState] = useState(false)
  const handleClick = () => {
    setAddState(curr => !curr)
  }
  useEffect(() => {
    const assetData = async () => {
      try{
        const response = await axios.get('/assets')
        setAssetData(response.data)
        // console.log(response.data)
      }catch(error){
        console.error(error)
      }
    }
    assetData()
  },[addState])
  
  const assetDataComp = assetData.map((data)=>{
    // console.log(data);
    return <MotorCardDetails 
        key={data._id}
        id ={data._id}
        assetId= {data.assetId} 
        name= {data.name} 
        description= {data.description} 
        location= {data.location} 
        manufacturer= {data.manufacturer} 
        modelNo= {data.modelNo} 
        serialNo= {data.serialNo} 
        insDate= {data.insDate} 
        mnsDate= {data.mnsDate} 
        status= {data.status} 
        power= {data.power} 
        voltage= {data.voltage} 
        current= {data.current} 
        speed= {data.speed} />
  })

  return (
    <>
      <div className='grid'>
        <div className='flex justify-center items-center '>
          <h1 className='py-8 text-4xl font-bold leading-7 text-gray-900 mx-auto'>{!addState ? 'All Assets' : 'Add Asset'}</h1>
          {!addState ? <button onClick={handleClick} className='border-2 rounded-xl py-2 px-4 mr-4'><Link to="#">Add Asset</Link></button> : <button onClick={handleClick} className='border-2 rounded-xl py-2 px-10 mr-4'> X </button>}
        </div>
        {addState ?
          <AddAsset /> :
          <div>
            {assetDataComp}
          </div>
        }
      </div>
    </>
  )
}
