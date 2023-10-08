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

const ReadData = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, "Students"));
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
            <h1 className="text-center mt-5 md:text-5xl text-blue-600 font-light"> Students Record </h1>
          <table className="border  rounded-md capitalize md:mx-6 md:mt-8  bg-slate-100 shadow-md mx-auto mt-8">
            <tr className="text-blue-700 shadow-sm  p-2">
              <th className="p-2 border-r ">Full Name</th>

              <th className="p-2 border-r ">Gender</th>
              <th className="p-2 border-r ">Reg .No</th>
              <th className="p-2 border-r ">Address </th>
              <th className="p-2 border-r ">Contact</th>
              <th className="p-2 border-r ">Email</th>
              {/* <th className="p-2 border-r ">Update</th> */}
              <th className="p-2 border-r ">Delete</th>
            </tr>
            {tasks.map((task, index) => {
              return (
                <tr key={task.id}>
                  <>
                    <td className="p-2 border-r  border-b">{task.data.Name}</td>
                    <td className="p-2 border-r  border-b">
                      {task.data.Gender}
                    </td>
                    <td className="p-2 border-r  border-b">
                      {task.data.StudentId}
                    </td>
                    <td className="p-2 border-r  border-b">
                      {task.data.Address}{" "}
                    </td>
                    <td className="p-2 border-r  border-b">
                      {task.data.Contact}{" "}
                    </td>
                    <td className="p-2 border-r  border-b">
                      {task.data.Email}
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
                          const taskDocRef = doc(db, "Students", task.id);
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
                      <FiDelete className="text-blue-900 font-bold text-3xl" />
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

export default ReadData;
