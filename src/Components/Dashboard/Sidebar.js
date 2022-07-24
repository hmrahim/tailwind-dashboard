import React from "react";
import { Link,NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="drawer-side ">
      <label for="my-drawer-2" class="drawer-overlay "></label>
      <div className=" overflow-y-auto " id="menu">
      <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <div className="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  font-bold">Settings</div>
          <div className="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/allstudent">All Students</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/studentdetails">Student Details</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/admitionform">Admition Form</NavLink>
            </li>
          
          
          </div>
        </div>
       
     
        
       
      
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
