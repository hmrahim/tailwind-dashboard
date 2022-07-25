import React from 'react';

const TeacherDetails = () => {
    return (
        <div className=" w-full md:w-11/12 shadow-md lg:w-11/12 mx-auto mt-5 px-4 bg-base-100 rounded">
        
        <div className="flex gap-5 p-5 flex-col md:flex-row lg:flex-row justify-center ">
          <div>
            <div class="avatar">
              <div class="w-60 rounded">
                <img src="https://i.ibb.co/n6STs9M/IMG-20210117-164349-8-removebg-preview.png" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl">HM RAHIM</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt hic nostrum possimus repudiandae fuga quas modi odit asperiores, explicabo ipsa unde! Nobis voluptatibus id ut exercitationem voluptatum quo illo!</p>
        <br />
        <br />
        <div className="flex flex-col gap-3">
    
            <label htmlFor="">Name: <strong>HM RAHIM</strong></label>
            <label htmlFor="">Gender: <strong>Male</strong></label>
            <label htmlFor="">Father Name: <strong>Shahin Miah</strong></label>
            <label htmlFor="">Mother Name: <strong>Nasima akther</strong></label>
            <label htmlFor="">Date Of Birth: <strong>01-06-2000</strong></label>
            <label htmlFor="">Riligion: <strong>Islam</strong></label>
            <label htmlFor="">Email: <strong>h.m.rahimnet@gmail.com</strong></label>
            <label htmlFor="">Phone: <strong>01886463596</strong></label>
            <label htmlFor="">Class: <strong>Five</strong></label>
            <label htmlFor="">Roll: <strong>01</strong></label>
            <label htmlFor="">Section: <strong>A</strong></label>
            <label htmlFor="">Address: <strong>Bijaynagar,Brahmanbaria, Bangaldesh</strong></label>
        </div>
    
          </div>
        </div>
        </div>
    );
};

export default TeacherDetails;