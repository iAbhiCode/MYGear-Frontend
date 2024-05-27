import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Assets from './MG-Pages/Assets.jsx'
import Maintenance from './MG-Pages/Maintenance.jsx'
import Home from './MG-Pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/assets' element={<Assets/>}/>
      <Route path='/maintenance' element={<Maintenance/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
