import React from 'react'

export default function AddAsset() {
    return (
        <div className='flex flex-col mx-8'>
            <h2>Add Asset</h2>
            <form className='flex flex-col'>
                <div className='py-4 '>
                    <label className='text-xl'>Motor ID :</label>
                    <input type='text' name='motorid' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4'> 
                    <label className='text-xl'>Name :</label>
                    <input type='text' name='name' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4'>
                    <label className='text-xl'>Description :</label>
                    <input type='text' name='description' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4'>
                    <label className='text-xl'>Location :</label>
                    <input type='text' name='location' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4'>
                    <label className='text-xl'>Manufacturer :</label>
                    <input type='text' name='manufacturer' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4'>
                    <label className='text-xl'>Model No :</label>
                    <input type='text' name='modelNo' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4'>
                    <label className='text-xl'>Serial No :</label>
                    <input type='text' name='serialNo' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4'>
                    <label className='text-xl'>Installation Date :</label>
                    <input type='date' name='insDate' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4'>
                    <label className='text-xl'>Last Manintenance Date :</label>
                    <input type='date' name='mnsDate' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4'>
                    <label className='text-xl'>Status :</label>
                    <input type='text' name='status' className='mx-2 border-2 rounded-xl'/>
                </div>
                <div className='py-4 flex sm:flex-col-1'>
                    <label className=' text-xl mb-2'>Specifications:</label>
                    <div className=''>
                    <input type='text' name='power' className='mx-2 border-2 rounded-xl px-2' placeholder='Power'/>
                    <input type='text' name='voltage' className='mx-2 border-2 rounded-xl px-2' placeholder='Voltage'/>
                    <input type='text' name='current' className='mx-2 border-2 rounded-xl px-2' placeholder='Current'/>
                    <input type='text' name='speed' className='mx-2 border-2 rounded-xl px-2' placeholder='Speed'/>
                    </div>
                </div>
            </form>
        </div>
    )
}
