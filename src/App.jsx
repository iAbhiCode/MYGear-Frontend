import Sidebar from './MG-Components/Sidebar'
import Home from './MG-Pages/Home'
import Assets from './MG-Pages/Assets'
import Maintenance from './MG-Pages/Maintenance'
import { Outlet } from 'react-router-dom'
import Header from './MG-Components/Header'

function App() {

  return (
    <>
    <div className='flex'>
    <Sidebar/>
    <Outlet/>
    </div>
    </>
  )
}

export default App
