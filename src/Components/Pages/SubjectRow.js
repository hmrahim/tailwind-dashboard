import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const SubjectRow = ({index,data,refetch}) => {
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
                fetch(`http://localhost:5000/subject/${id}`,{
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
      <td>
        <Link className="btn btn-primary ml-2 btn-xs" to={`/editsubject/${data._id}`} >Edit</Link>
        <button onClick={()=> deleteProject(data._id)} className="btn btn-error ml-2 btn-xs" >Delete</button>
      </td>
    </tr>
  );
};

export default SubjectRow;
