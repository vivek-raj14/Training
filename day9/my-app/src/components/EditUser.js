import { useState } from "react";

const EditUser = ({ user, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    Address: user.Address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(user.id, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit User</h3>

      <input name="name" value={formData.name} onChange={handleChange} />

      <input name="Address" value={formData.Address} onChange={handleChange} />

      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditUser;
