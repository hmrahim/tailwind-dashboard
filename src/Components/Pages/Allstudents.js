import React from "react";
import { useQuery } from 'react-query';
import { students } from "../../utility/students";
import StudentRow from "./StudentRow";

const Allstudents = () => {
  const { isLoading, refetch, data } = useQuery('repoData', () =>
  fetch('http://localhost:5000/student').then(res =>
    res.json()
  )
)






if(isLoading){
  return <h1 className="text-center text-2xl">Loading...</h1>
}
  return (
    <div className=" w-full md:w-11/12 shadow-md lg:w-11/12 mx-auto mt-5 px-4 bg-base-100 rounded">
        <h1 className="text-2xl m-4">All Students</h1>
      <div class="overflow-x-auto" >
        <table class="table table-compact w-full" >
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Shift</th>
              <th>Section</th>
              <th>Parent</th>
              <th>Date Of Birth</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            {
                data?.map((data,index)=> <StudentRow refetch={refetch} index={index} key={index} data={data} />)
            }
          
            
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Allstudents;
