import React from 'react';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';


import "react-datepicker/dist/react-datepicker.css";


const AddTeacher = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/teacher",{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
      toast.success("Teacher added succesfully")
    })
  };
    return (
      <div className=" w-full md:w-11/12 shadow-md lg:w-11/12 mx-auto mt-5 px-4 bg-base-100 rounded">
      <h1 className="text-2xl m-4">Admition Form</h1>
      <div className="p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
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
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Father Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              {...register("fname", {
                required: {
                  value: true,
                  message: "Father name is required",
                },
              })}
            />
            <label class="label">
              {errors?.fname?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.fname.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Mother Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              {...register("mname", {
                required: {
                  value: true,
                  message: "Mother name is required",
                },
              })}
            />
            <label class="label">
              {errors?.mname?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.mname.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Date Of Birth</span>
            </label>
           
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              {...register("dob", {
                required: {
                  value: true,
                  message: "Date of birth is required",
                },
              })}
            />
            <label class="label">
              {errors?.dob?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.dob.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <label class="label">
              {errors?.email?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is required",
                },
              })}
            />
            <label class="label">
              {errors?.phone?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Gender</span>
            </label>
            <select
              class="select select-bordered w-full max-w-xs"
              {...register("gender", {
                required: {
                  value: true,
                  message: "Gender is required",
                },
              })}
            >
              <option disabled selected>
                Choose one?
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <label class="label">
              {errors?.gender?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.gender.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Blod Group</span>
            </label>
            <select
              class="select select-bordered w-full max-w-xs"
              {...register("blodgroup", {
                required: {
                  value: true,
                  message: "Blod group is required",
                },
              })}
            >
              <option disabled selected>
                Choose one?
              </option>
              <option>A+</option>
              <option>A-</option>
              <option>AB+</option>
              <option>O+</option>
              <option>O-</option>
              <option>B+</option>
            </select>
            <label class="label">
              {errors?.blodegroup?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.blodegroup.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Religion</span>
            </label>
            <select
              class="select select-bordered w-full max-w-xs"
              {...register("religion", {
                required: {
                  value: true,
                  message: "Religion is required",
                },
              })}
            >
              <option disabled selected>
                Choose one?
              </option>
              <option>Muslim</option>
              <option>Hindu</option>
              <option>Boddho</option>
              <option>Khristan</option>
            </select>
            <label class="label">
              {errors?.religion?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.religion.message}
                </span>
              )}
            </label>
          </div>
         
         
          
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Image(link)</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <label class="label">
              {errors?.image?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
         
               
          <div>
           
          </div>
          <div>
           
          </div>
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default AddTeacher;