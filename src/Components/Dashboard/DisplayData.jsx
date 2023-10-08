import { Card, Typography } from "antd";
import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
// import BarGraph from "../Charts/BarGraph";

const DisplayData = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="">
          <div className="flex mt-8 relative justify-center">
            <Card title="Students" className="mx-8 bg-purple-300">
              <AiOutlineUserAdd size={35} className="absolute right-2 top-2 text-pink-800" />
              <Typography.Text>Total No. Students</Typography.Text>
              <Typography.Title>120 k</Typography.Title>
            </Card>
            <Card title="Courses" className="mx-8 bg-red-300">
              <BiBookAdd size={35} className="absolute right-2 top-2 text-pink-800" />
              <Typography.Text>Total No. Courses </Typography.Text>
              <Typography.Title className="text-pink-800 ">
                10 +
              </Typography.Title>
            </Card>
            <Card title="Courses" className="mx-8 bg-blue-300">
              <BiBookAdd size={35} className="absolute right-2 top-2 text-pink-800" />
              <Typography.Text>Total Attendances </Typography.Text>
              <Typography.Title className="text-pink-800 ">
                1200 
              </Typography.Title>
            </Card>
          </div>
        </div>
        <div>
          {/* <BarGraph/> */}
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
