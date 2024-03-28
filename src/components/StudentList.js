import React from "react";

const StudentList = ({ students, handleDelete, handleEdit }) => {
  return (
    <ul>
      {students.map((s) => (
        <li className="singleStudent" key={s.id}>
          <div>
            Name: {s.name} - Mobile: {s.mobile} - Address: {s.address}
            <button onClick={() => handleEdit(s.id)}>Edit</button>
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
