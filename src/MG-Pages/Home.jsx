import React, { useEffect, useState } from 'react'
import Card from '../MG-Components/Card'
import axios from '../Utils/axiosInstance'

export default function Home() {
  const[displayData,setDisplayData] = useState([])

  useEffect(() => {
    const displayData = async () => {
      try{
        const respone = await axios.get('/assets')
        setDisplayData(respone.data)
        // console.log(respone.data);
      }catch(error){
        console.log(err)
      }
    }
    displayData()
  },[])

  const homePageData = displayData.map((data) => {
      return <Card key = {data._id} name={data.name} description={data.description}/>
  })


  return (
    <div className='flex flex-col justify-center items-center bg-slate-100'>
      <h1 className='py-8 text-4xl font-bold leading-7 text-gray-900 '>All Products</h1>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 mx-10 '>
        {homePageData}
      </div>
    </div>
  )
}
<Card/>
