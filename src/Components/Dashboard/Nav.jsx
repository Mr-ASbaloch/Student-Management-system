import { Input } from "antd";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  return (
    <div className=" bg-white p-2 shadow-md w-[80vw]">
      <div className="flex justify-between mx-5 mt-5 ">
        <div>
          <h2 className='text-blue-500 text-xl'>
            {" "}
            <span className="text-black">DashBoard/</span> Home
          </h2>
        </div>
        <div className="flex items-center justify-between gap-5 ">
          <h2>
            <Input.Search   placeholder="Search Here" />
          </h2>
          <p>
            <AiOutlineSetting size={25} className="text-pink-700" />
          </p>
          <p>
            <CgProfile size={25} className='text-blue-800' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
