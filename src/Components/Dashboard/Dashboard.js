import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay "></label>

       <Sidebar/>
      </div>
    </div>
  );
};

export default Dashboard;
