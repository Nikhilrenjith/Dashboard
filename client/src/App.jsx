import React from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
          <Dashboard />
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
