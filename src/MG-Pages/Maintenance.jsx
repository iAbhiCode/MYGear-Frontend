import React, { useEffect, useState } from 'react'
import axios from '../Utils/axiosInstance'
import { Link } from 'react-router-dom'
import RaisieTicket from '../MG-Components/RaisieTicket'


export default function Maintenance() {

  const [ticketData, setTicketData] = useState([])
  const [buttonState, setButtonState] = useState(false)
  const [deleteFlag, setDeleteFlag] = useState(false)
  // console.log(ticketData);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await axios.get('/tickets')
        console.log(response.data);
        setTicketData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchTicketData()
  }, [buttonState,deleteFlag])

  const handleButtonClick = ()=>setButtonState(curr=>!curr)
  
  const deleteTicket = (id) =>{
    if(window.confirm(`Are You sure want to delete Ticket`)){
      axios.delete('/tickets/' +id)
      .then(response=>{
        console.log(response)
        alert('Deleted Successfully')
        setDeleteFlag(!deleteFlag)
      })
      .catch(error=>console.error(error))
    }
    else{
      alert('Not Deleted')
    }
  }

  return (
    <div className='flex flex-col min-h-screen border-2 rounded-2xl m-4'>

      <div className='flex justify-center items-center'>
        <h1 className='py-8 text-4xl font-bold leading-7 text-gray-900 mx-auto'>Maintenance Ticket Dashboard</h1>
        {!buttonState ?
          <button onClick={handleButtonClick} className=' rounded-xl py-2 px-4 mr-8 bg-slate-300'>Raise Ticket</button>
          : <button onClick={handleButtonClick} className=' rounded-xl py-2 px-12 mr-8 bg-slate-300'>X</button>
        }

      </div>

      <div className='flex flex-col sm:flex-row  md:flex-col lg:flex-row  py-4 border-2 mx-8 rounded-xl bg-slate-200 my-4'>
        <div className='mx-auto py-4'>Open : 12</div>
        <div className='mx-auto py-4'>Resolved :16</div>
        <div className='mx-auto py-4'>Under Process : 15</div>
      </div>

      {/* Table */}

        {!buttonState ? <div className='py-4 border-2 mx-8 mt-4 mb-2 rounded-2xl'>
        <table className='w-11/12 max-w-4xl mx-auto'>
          <thead >
            <tr >
              <th>TicketID</th>
              <th>Status</th>
              <th>Date</th>
              <th>Manage</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {
              ticketData.map((data, index) => {
                return <tr key={index} className=''>
                  <td>{data.ticketId}</td>
                  <td>{data.status}</td>
                  <td>{data.date}</td>
                  <td><button className=' rounded-2xl py-3 px-5 my-1 bg-slate-300'><Link to={`/manage-tickets/${data._id}`}>Manage</Link></button></td>
                  <td><button onClick={()=>deleteTicket(data._id)} className=' rounded-2xl py-3 px-5 my-1 bg-red-300'>Delete</button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div> : <RaisieTicket/>}
      
    </div>
  )
}
