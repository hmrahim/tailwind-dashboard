import React from 'react';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
         
        </div> 
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay "></label> 
          <ul id='menu' class="menu p-4 overflow-y-auto w-60 bg-primary text-base-100 overflow-y-auto ">
            {/* <!-- Sidebar content here --> */}
            <li><a>Sidebar Item 2</a></li>
            <li><a>Sidebar Item 2</a></li>
            <li><a>Sidebar Item 2</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;