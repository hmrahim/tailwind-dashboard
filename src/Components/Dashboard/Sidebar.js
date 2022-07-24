import React from 'react';
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <ul
        id="menu"
        class="menu p-4 overflow-y-auto w-60 bg-primary text-base-100 overflow-y-auto "
      >
        {/* <!-- Sidebar content here --> */}
        <Link
          className="text-2xl font-semibold text-center mb-2 uppercase"
          to="/"
        >
          Dashboard
        </Link>{" "}
        <hr />
        <div className="collapse collapse-plus bg-info text-white rounded-lg mt-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  font-bold">Settings</div>
          <div className="collapse-content  bg-base-300 text-black ">
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </div>
        </div>
       
      </ul>
    );
};

export default Sidebar;