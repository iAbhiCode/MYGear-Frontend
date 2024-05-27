import React from 'react'

export default function MotorCardDetails() {
    return (
        <div className='border-2 rounded-xl p-2 mx-4 my-4'>
            <ul>
                <li className='text-xl'>Motor ID : MTR-001</li>
                <li className='text-xl'>Name: Main Conveyor Motor</li>
                <li className='text-xl'>Description: Motor used to drive the main conveyor belt in the production line.</li>
                <li className='text-xl'>Location: Factory Floor A - Section B</li>
                <li className='text-xl'>Manufacturer: ACME Motors</li>
                <li className='text-xl'>Model Number: ACM1234</li>
                <li className='text-xl'>Serial Number: SN-987654321</li>
                <li className='text-xl'>Installation Date: 2021-08-15</li>
                <li className='text-xl'>Last Maintenance Date: 2023-03-10</li>
                <li className='text-xl'>Status: Operational</li>
                <li className='text-xl'>Power: 15 kW</li>
                <li className='text-xl'>Voltage: 400V</li>
                <li className='text-xl'>Current: 35A</li>
                <li className='text-xl'>Speed: 1500 RPM</li>
            </ul>
            <hr className='my-2'/>
            <div className='flex flex-row gap-4'>
            <button className='border-2 rounded-xl bg-orange-400 text-white p-4 w-64'>Edit</button>
            <button className='border-2 rounded-xl bg-orange-400 text-white p-4 w-64'>Remove</button>
            </div>
        </div>
    )
}
