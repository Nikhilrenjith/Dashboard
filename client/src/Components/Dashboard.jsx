import React, { useState } from "react";
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa";
import profile from "../../public/vite.svg";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const showProfile = () => {
    // alert("helloo")
    setOpen(!open);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px] ">
        <div className="flex items-center gap-[20px] ml-auto">
          <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
            <FaRegBell />
            <FaEnvelope />
          </div>
          <div
            className="flex items-center gap-[15px] relative"
            onClick={showProfile}
          >
            <p>Bruce Wayne</p>
            <div className="h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative z-40">
              <img src={profile} alt="" />
            </div>

            {open && (
              <div className="bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]">
                <p className="cursor-pointer hover:text-[blue] ">Profile</p>
                <p className="cursor-pointer hover:text-[blue] ">Settings</p>
                <p className="cursor-pointer hover:text-[blue] ">Log out</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
