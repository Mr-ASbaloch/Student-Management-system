import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import AddCources from "./AddCources";

const Courses = () => {
  return (
    <>
      <div class="bg-[#F5F7F8] font-family-karla flex">
        <Sidebar />
        <div>
          <AddCources />
          
        </div>
      </div>
    </>
  );
};

export default Courses;
