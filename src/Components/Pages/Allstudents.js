import React from "react";
import { students } from "../../utility/students";
import StudentRow from "./StudentRow";

const Allstudents = () => {
  return (
    <div className=" w-full md:w-11/12 shadow-md lg:w-11/12 mx-auto mt-5 px-4 bg-base-100 rounded">
        <h1 className="text-2xl m-4">All Students</h1>
      <div class="overflow-x-auto" >
        <table class="table table-compact w-full" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Section</th>
              <th>Parent</th>
              <th>Date Of Birth</th>
             
            </tr>
          </thead>
          <tbody>
            {
                students?.map(data=> <StudentRow key={data.id} data={data} />)
            }
          
            
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Allstudents;
