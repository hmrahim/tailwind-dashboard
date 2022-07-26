import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';


const StudentDetails = () => {
  const {id} = useParams()
  const { isLoading, refetch, data } = useQuery(['studentDetails',id], () =>
  fetch(`http://localhost:5000/student/${id}`).then(res =>
    res.json()
  )
)





if(isLoading){
  return <h1 className="text-center text-2xl">Loading...</h1>
}

  return (
    <div className=" w-full md:w-11/12 shadow-md lg:w-11/12 mx-auto mt-5 px-4 bg-base-100 rounded">
        
    <div className="flex gap-5 p-5 flex-col md:flex-row lg:flex-row justify-center ">
      <div>
        <div class="avatar">
          <div class="w-60 rounded">
            <img src={data.image} />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-2xl uppercase">{data.name}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt hic nostrum possimus repudiandae fuga quas modi odit asperiores, explicabo ipsa unde! Nobis voluptatibus id ut exercitationem voluptatum quo illo!</p>
    <br />
    <br />
    <div className="flex flex-col gap-3">

        <label htmlFor="">Name: <strong>{data.name}</strong></label>
        <label htmlFor="">Gender: <strong>{data.gender}</strong></label>
        <label htmlFor="">Father Name: <strong>{data.fname}</strong></label>
        <label htmlFor="">Mother Name: <strong>{data.mname}</strong></label>
        <label htmlFor="">Date Of Birth: <strong>{data.dob}</strong></label>
        <label htmlFor="">Religion: <strong>{data.religion}</strong></label>
        <label htmlFor="">Email: <strong>{data.email}</strong></label>
        <label htmlFor="">Phone: <strong>{data.phone}</strong></label>
        <label htmlFor="">Class: <strong>{data.class}</strong></label>
        <label htmlFor="">Roll: <strong>01</strong></label>
        <label htmlFor="">Section: <strong>{data.section}</strong></label>
       
    </div>

      </div>
    </div>
    </div>
  );
};

export default StudentDetails;
