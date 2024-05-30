import Sidebar from './MG-Components/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='grid lg:grid-cols-12'>
        <div className='grid col-span-2 '>
          <Sidebar />
        </div>
        <div className='grid col-span-10'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
