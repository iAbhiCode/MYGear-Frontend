import React, { useState } from 'react'
import { ChevronFirst, ChevronLast } from 'lucide-react'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [extended, setExtended] = useState(true);

    return (
        <aside className='max-h-max  hidden md:block w-64 bg-gray-200'>
            <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
                <div className='p-4 pb-2 flex justify-between items-center'>
                <img src='../src/assets/logo.svg' className='w-32' />
                    <button className='pl-5' onClick={() => setExtended((curr) => !curr)}>
                        { extended ? <ChevronFirst /> : <ChevronLast/>}
                    </button>
                </div>
                <ul className='flex-1 px-3 py-5 '>
                    <li className='flex justify-center border-2 p-4 mt-2 rounded-xl border-orange-400'><Link to='/'>Home</Link></li>
                    <li className='flex justify-center border-2 p-4 mt-2 rounded-xl border-orange-400'><Link to='/Assets'>Assets</Link></li>
                    <li className='flex justify-center border-2 p-4 mt-2 rounded-xl border-orange-400'><Link to='/maintenance'>Maintenance</Link></li>
                </ul>
            </nav>
        </aside >
    )
}

export default Sidebar