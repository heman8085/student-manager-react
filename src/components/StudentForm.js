import React from "react";

const StudentForm = ({
  handleSubmit,
  name,
  mobile,
  address,
  editId,
  setName,
  setMobile,
  setAddress,
}) => {
  return (
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Mobile No."
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></input>
      <button type="submit">{editId ? "Update Student" : "Add Student"}</button>
    </form>
  );
};

export default StudentForm;
