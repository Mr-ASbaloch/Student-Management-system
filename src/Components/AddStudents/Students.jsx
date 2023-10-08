import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import AddStudents from "./AddSTudents";

const Students = () => {
  return (
    <div>
      <div class="bg-[#F5F7F8] font-family-karla flex">
        <Sidebar />
        <div>
            <AddStudents/>
        </div>
      </div>
    </div>
  );
};

export default Students;
