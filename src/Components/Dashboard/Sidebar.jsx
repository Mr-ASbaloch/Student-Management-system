import React from 'react'
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
         <aside class="relative bg-[#29363C] h-screen w-64 hidden sm:block shadow-xl">
          <div class="p-6">
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/aba3a466532591.Y3JvcCwzNjgyLDI4ODIsMTQ1LDYz.png"
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy84xHwzQBknbjRKmAOxeeSbx8stOvCIUvJpYV4wLq&s"
              className="w-1/2 mx-auto"
            />

            <button class="w-full bg-[#359BEF]   text-white p-2 cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-blue-300 flex items-center justify-center">
              <i class="fas fa-plus mr-3"></i> Admin DashBoard
            </button>
          </div>
          <nav class="text-white text-base font-semibold pt-3">
            <Link 
             to={'/'}
            class="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
             
            
              <i class="fas fa-tachometer-alt mr-3"></i>
              Dashboard
            </Link>
            <Link
              to={"/students"}
              class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
              <i class="fas fa-sticky-note mr-3"></i>
              Students Record
            </Link>
            <Link
              to={"/courses"}
              class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
              <i class="fas fa-table mr-3"></i>
              Courses
            </Link>
            <Link
              to={"/attendance"}
              class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
              <i class="fas fa-align-left mr-3"></i>
              Attendance
            </Link>
            <a class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
              <i class="fas fa-tablet-alt mr-3"></i>
              UpComming Events
            </a>
            <a
          
              class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
              <i class="fas fa-calendar mr-3"></i>
              Calendar
            </a>
          </nav>
          <button class="absolute bg-blue-500 mb-3 w-1/2 mx-auto rounded-tr-full rounded-br-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
            <i class="fas fa-arrow-circle-up mr-3"></i>
            Logout
          </button>
        </aside>

    </div>
  )
}

export default Sidebar