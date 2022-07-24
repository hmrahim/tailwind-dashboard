import React from 'react';

const StudentRow = ({data}) => {
    return (
        <tr>
        
        <td>{data.name}</td>
        <td>{data.gender}</td>
        <td>{data.class}</td>
        <td>{data.section}</td>
        <td>{data.parent}</td>
        <td>{data.dob}</td>
        
      </tr>
    );
};

export default StudentRow;