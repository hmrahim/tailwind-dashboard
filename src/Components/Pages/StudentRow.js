import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const StudentRow = ({data,refetch,index}) => {
  const deleteProject = (id)=> {
        
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        width:"400",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/student/${id}`,{
                method:"DELETE",
                headers:{
                    "content-type": "application/json"
                }
            })
            .then(res =>res.json())
            .then(()=>{
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success',
                  
                  )

            })
      
        }
      })

}

  refetch()
    return (
        <tr>
        
        <td>{index+1}</td>
        <td>{data.name}</td>
        <td>{data.gender}</td>
        <td>{data.class}</td>
        <td>{data.shift}</td>
        <td>{data.section}</td>
        <td>{data.fname}</td>
        <td>{data.dob}</td>
        <td>
          <Link to={`/studentdetails/${data._id}`} className='btn btn-primary btn-xs ml-2'>View</Link>
          <button  className='btn btn-info btn-xs ml-2'>Edit</button>
          <button onClick={()=>deleteProject(data._id)} className='btn btn-error btn-xs ml-2'>Delete</button>
        </td>
        
      </tr>
    );
};

export default StudentRow;