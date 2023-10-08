import React from "react";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

import { db } from "../../Firebase/Config";

import { FiDelete } from "react-icons/fi";
// import Navbar from "../../Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Dashboard/Sidebar";

const ReadCourse= () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Courses"));
    onSnapshot(q, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  console.log(tasks);

  return (
    // <table key={task.id}>
    //   <th>{task.id}</th>
    //   <tr>{task.data.price}</tr>

    // </table>

    <>
      <div class="bg-[#F5F7F8] font-family-karla flex ">
        <Sidebar />

        {/* <Navbar /> */}
        {/* <h1 className="text-center mt-5 md:text-4xl text-purple-800">
          Students Record{" "}
        </h1> */}
        <div className="flex flex-col">
            <h1 className="text-center mt-5 md:text-5xl text-blue-600 font-light"> Courses Record</h1>
          <table className="border  rounded-md capitalize md:mx-6 md:mt-8  bg-slate-100 shadow-md mx-auto mt-8">
            <tr className="text-blue-700 shadow-sm  p-2">
              <th className="p-2 border-r ">Title</th>
              <th className="p-2 border-r ">Course ID</th>
              <th className="p-2 border-r ">Course-Code</th>
              <th className="p-2 border-r ">Duration</th>
              <th className="p-2 border-r ">Type </th>
              <th className="p-2 border-r ">Description</th>
           
              {/* <th className="p-2 border-r ">Update</th> */}
              <th className="p-2 border-r ">Delete</th>
            </tr>
            {tasks.map((task, index) => {
              return (
                <tr key={task.id}>
                  <>
                    <td className="p-2 border-r  border-b">{task.data.Title}</td>
                    <td className="p-2 border-r  border-b">
                      {task.data.CourseId}
                    </td>
                    <td className="p-2 border-r  border-b">
                      {task.data.CourseCode}
                    </td>
                    <td className="p-2 border-r  border-b">
                      {task.data.Duration}{" "}
                    </td>
                    <td className="p-2 border-r  border-b">
                      {task.data.Type}{" "}
                    </td>
                    <td className="p-2 border-r  border-b">
                      {task.data.Description}
                    </td>
                    {/* <td className="p-2 border-r   border-b">
                    <GrUpdate />
                    update
                  </td> */}
                    <td
                      className="p-2 border-r  border-b"
                      onClick={async () => {
                        // Display a confirmation dialog before deletion
                        const confirmDeletion = window.confirm(
                          "Are you sure you want to delete this item?"
                        );

                        if (confirmDeletion) {
                          const taskDocRef = doc(db, "Courses", task.id);
                          try {
                            await deleteDoc(taskDocRef);
                            toast.success("Deleted Successfully ", {
                              position: "top-right",
                              autoClose: 1000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
                          } catch (err) {
                            alert(err);
                          }
                        }
                      }}
                    >
                      <FiDelete className="text-red-900 font-bold text-3xl" />
                    </td>
                  </>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default ReadCourse;
