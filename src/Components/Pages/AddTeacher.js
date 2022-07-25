import React from 'react';

const AddTeacher = () => {
    return (
        <div className=" w-full md:w-11/12 shadow-md lg:w-11/12 mx-auto mt-5 px-4 bg-base-100 rounded">
        <h1 className="text-2xl m-4">Add Teacher</h1>
        <div className="p-4">
          <form action="" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Father Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Mother Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Date Of Birth</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Gender</span>
              </label>
              <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Choose one?
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Blod Group</span>
              </label>
              <select class="select select-bordered w-full max-w-xs">
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
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Religion</span>
              </label>
              <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Choose one?
                </option>
                <option>Muslim</option>
                <option>Hindu</option>
                <option>Boddho</option>
                <option>Khristan</option>
                
              </select>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Class</span>
              </label>
              <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Choose one?
                </option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
                
              </select>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Section</span>
              </label>
              <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Choose one?
                </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                
              </select>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Image</span>
              </label>
              <input
                type="file"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
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