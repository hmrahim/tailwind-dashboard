import React from "react";
import { Link,NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faClock, faCoffee,faGraduationCap,faPenClip,faUserTie } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div class="drawer-side ">
      <label for="my-drawer-2" class="drawer-overlay "></label>
      <div className=" overflow-y-auto " id="menu">
      <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 shadow-md min-h-[100vh] text-base-content">
        {/* <!-- Sidebar content here --> */}
        <Link to="/" className="text-2xl font-semibold text-center select-none bg-primary text-base-100 rounded-lg py-3 cursor-pointer  ">  Dashboard</Link>
        <div className="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  font-bold"><span className="text-info text-2xl"><FontAwesomeIcon icon={faGraduationCap} /></span> Student</div>
          <div className="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/allstudent">   All Students</NavLink>
            </li>
            
            <li className="mt-3">
              <NavLink to="/admitionform">Admition Form</NavLink>
            </li>
          
          
          </div>
        </div>
        <div className="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  font-bold"><span className="text-info text-2xl"><FontAwesomeIcon icon={faUserTie} /></span>  Teachers</div>
          <div className="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/allteachers">All Teachers</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to="/addteacher">Add Teacher </NavLink>
            </li>
          
          
          </div>
        </div>


        <div className="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  font-bold"><span className="text-info text-2xl"><FontAwesomeIcon icon={faPenClip} /></span>  Class</div>
          <div className="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/allclasses">All Classes</NavLink>
            </li>
            
            <li className="mt-3">
              <NavLink to="/addclass">Add Class </NavLink>
            </li>
          
          
          </div>
        </div>
        <div className="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  font-bold"><span className="text-info text-2xl"><FontAwesomeIcon icon={faBook} /></span>  Subject</div>
          <div className="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/allsubjects">All Subject</NavLink>
            </li>
            
            <li className="mt-3">
              <NavLink to="/addsubject">Add Subject </NavLink>
            </li>
          
          
          </div>
        </div>



        
        <div className="collapse collapse-plus bg-primary text-white rounded-lg mt-3">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  font-bold"><span className="text-info text-2xl"><FontAwesomeIcon icon={faClock} /></span>  Shift</div>
          <div className="collapse-content  bg-base-300 text-black ">
            <li className="mt-3">
              <NavLink to="/allshift">All Shifts</NavLink>
            </li>
            
            <li className="mt-3">
              <NavLink to="/addshift">Add Shift </NavLink>
            </li>
          
          
          </div>
        </div>
       
     
        
       
      
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
