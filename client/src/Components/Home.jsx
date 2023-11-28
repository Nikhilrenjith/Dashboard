import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="flex">
      <div className="basis-[18%] border h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[82%] border">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
