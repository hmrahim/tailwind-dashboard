import React from 'react';
import { useQuery } from 'react-query';
import TeachersRow from './TeachersRow';

const AllTeachers = () => {
  const { isLoading, refetch, data } = useQuery('teachers', () =>
  fetch('http://localhost:5000/teacher').then(res =>
    res.json()
  )
)

  
    return (
        <div className=" w-full md:w-11/12 shadow-md lg:w-11/12 mx-auto mt-5 px-4 bg-base-100 rounded">
        <h1 className="text-2xl m-4">All Teachers</h1>
      <div class="overflow-x-auto" >
        <table class="table table-compact w-full" >
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Father Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Religion</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
          {
                data?.map((data,index)=> <TeachersRow refetch={refetch} index={index} key={index} data={data} />)
            }
          
          
            
          </tbody>
         
        </table>
      </div>
    </div>
    );
};

export default AllTeachers;