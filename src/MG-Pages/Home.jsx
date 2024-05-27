import React from 'react'
import Card from '../MG-Components/Card'
export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='py-8 text-4xl font-bold leading-7 text-gray-900 '>All Products</h1>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 mx-10'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
<Card/>
