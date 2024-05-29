import React from 'react'
import UpdateAsset from './UpdateAsset'
import { Link } from 'react-router-dom'

export default function MotorCardDetails(props) {
    console.log(props.id);
    return (
        <div className='border-2 rounded-xl p-2 mx-4 my-4'>
            <ul>
                <li className='text-xl'>Asset ID : {props.assetId}</li>
                <li className='text-xl'>Name: {props.name}</li>
                <li className='text-xl'>Description: {props.description}</li>
                <li className='text-xl'>Location: {props.location}</li>
                <li className='text-xl'>Manufacturer: {props.manufacturer}</li>
                <li className='text-xl'>Model Number: {props.modelNo}</li>
                <li className='text-xl'>Serial Number: {props.serialNo}</li>
                <li className='text-xl'>Installation Date: {props.insDate}</li>
                <li className='text-xl'>Last Maintenance Date: {props.mnsDate}</li>
                <li className='text-xl'>Status: {props.Status}</li>
                <li className='text-xl'>Power: {props.power} KW</li>
                <li className='text-xl'>Voltage: {props.voltage} V</li>
                <li className='text-xl'>Current: {props.current} A</li>
                <li className='text-xl'>Speed: {props.speed} RPM</li>
            </ul>
            <hr className='my-2'/>
            <div className='flex flex-row gap-4'>
            <button className='border-2 rounded-xl bg-orange-400 text-white p-4 w-64'><Link to={`/updateAsset/${props.id}`}>Update</Link></button>
            <button className='border-2 rounded-xl bg-orange-400 text-white p-4 w-64'>Remove</button>
            </div>
        </div>
    )
}
