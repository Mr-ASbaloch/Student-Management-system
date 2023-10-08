import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import AddAttendance from './AddAttendance'

const Attendance = () => {
  return (
    <div>
        
        <div class="bg-[#F5F7F8] font-family-karla flex">


            <Sidebar/>
            <div>
                <AddAttendance/>
            </div>
        </div>


    </div>
  )
}

export default Attendance