import React from 'react';
import { useQuery } from 'react-query';
import ClassRow from './ClassRow';

const AllClass = () => {
  const { isLoading, refetch, data } = useQuery('class', () =>
  fetch('http://localhost:5000/class').then(res =>
    res.json()
  )
)


if(isLoading){
  return <h1 className="text-center text-2xl">Loading...</h1>
}
    return (
        <div className=" w-full md:w-3/4 shadow-md lg:w-3/4 mx-auto mt-5 px-4 bg-base-100 rounded">
        <h1 className="text-2xl m-4">All Classes</h1>
      <div class="overflow-x-auto" >
        <table class="table table-compact w-full" >
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Action</th>
              
             
            </tr>
          </thead>
          <tbody>
            {
              data.map((data,index)=>  <ClassRow key={index} data={data} index={index} refetch={refetch}  />)
            }
           
          
          
            
          </tbody>
         
        </table>
      </div>
    </div>
    );
};

export default AllClass;