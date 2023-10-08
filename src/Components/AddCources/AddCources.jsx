import React, { useState } from "react";
import { collection, addDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../../Firebase/Config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
// import ReadData from "./ReadStudents";

const AddCources = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Courses"), {
        Title: title,
        Description: description,
        completed: false,
        CourseId: courseId,
        Type:type,
        CourseCode:code,
        Duration: duration,
        time:Timestamp.now(),
        created: Timestamp.now(),
      });
      toast.success(` ${name} "Successfully Added"`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/readcourse");
      }, 2000);
      // onClose()
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <h1 className="text-center   text-xl md:text-4xl text-blue-500 mt-5">
        Add Courses{" "}
      </h1>
      <div className="flex flex-col mb-3 ">
        <div>
          {/* <img
            src="https://i.pinimg.com/originals/5b/f0/a3/5bf0a3e0601d35349c5451fa52138ea6.gif"
            alt=""
            className="w-[150px] mx-auto rounded-full"
          /> */}
        </div>
        <form
          onSubmit={handleSubmit}
        //   style={{
        //     backgroundImage:
        //       'url("https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80")',
        //   }}
          className=" mx-5 rounded-lg  bg-gradient-to-r from-blue-200 to-blue-500 mt-8 p-12 md:mx-auto md:flex  md:w-1/2 md:flex-wrap md:gap-5"
        >
          <input
            type="text"
            placeholder="Course Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
            <input
            type="text"
            placeholder="Course Id"
            onChange={(e) => {
              setCourseId(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required={true}
            className="p-2  w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
            <input
            type="text"
            placeholder="Course Code"
            onChange={(e) => {
              setCode(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
            <input
            type="email"
            placeholder="Course Type"
            onChange={(e) => {
              setType(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
          <input
            type="number"
            placeholder="Duration "
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
          {/* <input
            type="text"
            placeholder="edition"
            onChange={(e) => {
              setEdition(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          /> */}
          {/* <input
            type="text"
            placeholder="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          /> */}
           
           {/* <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span class="relative text-white">Button Text</span>
</span>
</a> */}
<button 
 class="relative   w-2/3 mx-auto inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Add Course</span>
</button>
<button 
 onClick={() => {
    navigate("/readcourse");
  }}
 class="relative   w-2/3 mx-auto inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">View Course</span>
</button>
      
            {/* <button
              type="submit"
              className="bg-blue-800  p-1 w-full md:w-4/5 md:mx-auto  md:p-2 md:block  rounded-md text-white text-xl"
            >
              Add Course    
            </button> */}
            {/* <button 
              onClick={() => {
                navigate("/readcourse");
              }}
              className="bg-blue-800 p-1 w-full mt-3 md:w-4/5 md:mx-auto  md:p-2 md:block  rounded-md text-white text-xl"
            >
              View Course
            </button> */}
     
        </form>
      </div>
      {/* <ReadData/> */}
    </div>
  );
};

export default AddCources;