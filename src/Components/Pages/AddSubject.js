import React from 'react';

const AddSubject = () => {
    return (
        <div className=" w-full md:w-3/6 shadow-md lg:w-3/6 mx-auto mt-5 px-4 bg-base-100 rounded">
        <h1 className="text-2xl m-4">Add Subject</h1>
        <div className="p-4">
          <form action="" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
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
           
            
            <div>
              <button className="btn btn-primary">Submit</button>
              
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddSubject;