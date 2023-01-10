import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex min-h-screen  justify-center items-center space-x-6 bg-gradient-to-b from-[#141E30] to-[#243B55]">
      <Outlet />
    </div>
  );
};

export default Root;
