import React from 'react'
import {Routes , Route   } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
// import AddStudents from '../AddStudents/AddSTudents'
import Students from '../AddStudents/Students'
import Courses from '../AddCources/Courses'
import Attendance from '../AddAttendance/Attendance'
import ReadData from '../AddStudents/ReadStudents'
import ReadCourse from '../AddCources/ReadCources'

const Index = () => {
  return (
    <div>
<Routes>
    <Route  path='/' element={<Dashboard/>} />
    <Route  path='/students' element={<Students/>} />
    <Route  path='/courses' element={<Courses/>} />
    <Route  path='/attendance' element={<Attendance/>} />
    <Route  path='/read' element={<ReadData/>} />
    <Route  path='/readcourse' element={<ReadCourse/>} />
    <Route  path='/*' element={<>page not fount</>} />
</Routes>

    </div>
  )
}

export default Index