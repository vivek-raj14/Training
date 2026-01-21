import { useState } from "react";
import { createUser } from "../api/userApi";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    Address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.name === "" || formData.Address === "")
        return alert("Enter the Details");
      await createUser({
        name: formData.name,
        Address: formData.Address,
      });

      // clear form after success
      setFormData({ name: "", Address: "" });
      alert("User added successfully");
    } catch (error) {
      console.log("Message :", error);
    }
  };

  return (
    <div className="add_user">
      <h1>Add User</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="Address"
          value={formData.Address}
          placeholder="Enter Address"
          onChange={handleChange}
        />

        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default AddUser;
