import React, { useState } from "react";
import { collection, addDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../../Firebase/Config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
// import ReadData from "./ReadStudents";

const AddAttendance= () => {
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
        Mark Attendance{" "}
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
          className=" mx-5 rounded-lg  bg-gradient-to-r from-blue-200 to-pink-400 mt-8 p-12 md:mx-auto md:flex  md:w-1/2 md:flex-wrap md:gap-5"
        >
          
          <input
            type="text"
            placeholder="Select Student"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
     
            <input
            type="text"
            placeholder="Select Course"
            onChange={(e) => {
              setCourseId(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
          <input
            type="date"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required={true}
            className="p-2  w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
        
        
      
            <input
            type="email"
            placeholder="Batch"
            onChange={(e) => {
              setType(e.target.value);
            }}
            required={true}
            className="p-2 w-full md:w-2/5 rounded-md my-1 text-blue-500 mb-2 outline-none focus:border-dashed"
          />
         
         <label htmlFor="" className="font-semibold text-blue-800">Present</label>
        <input type="radio" name="attendance" id="" className="w-1/5" />
        <label htmlFor="" className="font-semibold text-blue-800">Absent</label>
        <input type="radio" name="attendance" id="" className="w-1/5" />
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
           

      
            <button
              type="submit"
              className=" shadow-md bg-gradient-to-r from-pink-500 to-blue-400 p-1 w-full md:w-4/5 md:mx-auto  md:p-2 md:block  rounded-md text-white text-xl"
            >
              Add Course    
            </button>
            <button 
              onClick={() => {
                navigate("/readcourse");
              }}
              className="bg-blue-800 p-1 w-full mt-3 md:w-4/5 md:mx-auto  md:p-2 md:block  rounded-md text-white text-xl"
            >
              View Course
            </button>
     
        </form>
      </div>
      {/* <ReadData/> */}
    </div>
  );
};

export default AddAttendance;