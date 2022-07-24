import React from "react";
import { Link ,Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
      <div class="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center bg-neutral">
          {/* <!-- Page content here --> */}
          <Outlet/>
        </div>
      <Sidebar/>
      </div>
    </div>
  );
};

export default Dashboard;
