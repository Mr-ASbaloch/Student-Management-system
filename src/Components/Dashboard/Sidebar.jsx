import React from 'react'
import { Link } from "react-router-dom";
import {LuLayoutDashboard} from 'react-icons/lu'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {MdOutlineCollectionsBookmark}from 'react-icons/md'
import {MdAccountBox} from 'react-icons/md'
const Sidebar = () => {


  return (
    <div>
         <aside class="relative  bg-[#29363C] h-screen w-64 hidden sm:block shadow-xl">
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
              <LuLayoutDashboard size={20} className='text-white mx-3'/>
              Dashboard 
            </Link>
            <Link
              to={"/students"}
              class="flex items-center text-white opacity-75 hover:opacity-100  py-4 pl-6 nav-item"
            >
              <i class="fas fa-sticky-note mr-3"></i>
              <AiOutlineUserAdd size={25} className='text-white mx-3' />
              Students Pannel
            </Link>
            <Link
              to={"/courses"}
              class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
              <i class="fas fa-table mr-3"></i>
              <MdOutlineCollectionsBookmark size={25} className='text-white mx-3'/>
              Courses
            </Link>
            <Link
              to={"/attendance"}
              class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
              <i class="fas fa-align-left mr-3"></i>
              <MdAccountBox size={25} className='text-white mx-3'/>
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