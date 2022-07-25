import React from 'react';

const AllSubjects = () => {
    return (
        <div className=" w-full md:w-11/12 shadow-md lg:w-11/12 mx-auto mt-5 px-4 bg-base-100 rounded">
        <h1 className="text-2xl m-4">All Subject</h1>
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
          
          
            
          </tbody>
         
        </table>
      </div>
    </div>
    );
};

export default AllSubjects;