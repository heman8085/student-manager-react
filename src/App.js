import React, { useState, useEffect } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(0);
  const [studentCount, setStudentCount] = useState("0");


  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
    setStudentCount(students.length);
  }, [students]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editedStudentIndex = students.findIndex((s) => s.id === editId);
      const updatedStudents = [...students];
      updatedStudents[editedStudentIndex] = {
        id: editId,
        name,
        mobile,
        address,
      };
      setStudents(updatedStudents);
      setEditId(0);
      //reset the input fields
      setName("");
      setMobile("");
      setAddress("");
      return;
    }

    if (name !== "" && mobile !== "" && address !== "") {
      setStudents([{ id: `${Math.random()}`, name, mobile, address },...students]);
      //reset the input fields
      setName("");
      setMobile("");
      setAddress("");
    }
  };

  const handleDelete = (id) => {
    const filteredStudents = students.filter((s) => s.id !== id);
    setStudents(filteredStudents);
  };

  const handleEdit = (id) => {
    const studentToEdit = students.find((s) => s.id === id);
    setName(studentToEdit.name);
    setMobile(studentToEdit.mobile);
    setAddress(studentToEdit.address);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="heading">
          <h1>Student Manager</h1>
          <p>
            Total Students : <span>{studentCount}</span>
          </p>
        </div>
        <StudentForm
          handleSubmit={handleSubmit}
          name={name}
          mobile={mobile}
          address={address}
          editId={editId}
          setName={setName}
          setMobile={setMobile}
          setAddress={setAddress}
        />
        <StudentList
          students={students}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
