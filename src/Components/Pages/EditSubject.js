import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';



import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from 'react-router-dom';


const EditSubject = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const { isLoading, refetch, data } = useQuery(['editsubject',id], () =>
    fetch(`http://localhost:5000/subject/${id}`).then(res =>
      res.json()
    )
  )
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/subject/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
      toast.success("Subject Updated succesfully")
      reset()
      navigate("/allsubjects")
    })
  };
  refetch()
  if(isLoading){
    return <h1 className="text-center text-2xl">Loading...</h1>
  }
    return (
        <div className=" w-full md:w-3/6 shadow-md lg:w-3/6 mx-auto mt-5 px-4 bg-base-100 rounded">
        <h1 className="text-2xl m-4">Add Class</h1>
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)} action="" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
            
              type="text"
              defaultValue={data.name}
              class="input input-bordered w-full"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label class="label">
              {errors?.name?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
           
            
            <div>
              <button className="btn btn-primary">Submit</button>
              
            </div>
          </form>
        </div>
      </div>
    );
};

export default EditSubject;