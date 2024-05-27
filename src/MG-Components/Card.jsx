import React from 'react'

export default function Card() {
    return (
        <div className='grid grid-cols-1 border-4 rounded-xl place-items-center border-orange-400'>
            <img src='src/assets/motor.png' className='h-60 rounded-xl mt-2 ' />
            <div className='flex flex-col items-center'>
                <h2 className='font-semibold py-3'>Motor</h2>
                <p className='text-sm py-2 m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi dolorem officiis molestias deserunt commodi delectus nemo ex facilis ab.</p>
                <button className='border-2 bg-orange-500 text-white rounded-xl py-2 px-4 mb-4'>View</button>
            </div>
        </div>
    )
}
