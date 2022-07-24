import React from "react";

const Navbar = () => {
  return (
    <div class="navbar bg-primary text-base-100 mb-2">
      <label
        for="my-drawer-2"
        class="btn btn-primary drawer-button md:hidden lg:hidden "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>

      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Dreadnought School</a>
      </div>
 
      <div class="flex-none">
      <div class="flex gap-2 items-center">
        <h2 className="text-xl font-semibold capitalize hidden md:block lg:block">hm rahim</h2>
    
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52">
      <h2 className="text-xl font-semibold capitalize text-center md:hidden lg:hidden">hm rahim</h2> <hr className="md:hidden lg:hidden" />
        <li>
          <a class="justify-between">
            Messages
            <span class="badge">New</span>
          </a>
        </li>
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
      </div>
    </div>
  );
};

export default Navbar;
