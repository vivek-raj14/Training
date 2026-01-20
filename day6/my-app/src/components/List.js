import React, { useState, useEffect } from "react";

const List = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (errors) {
      console.error("Error Message : ", errors);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Users List</h1>
      {loading ? (
        <p>Loading.. </p>
      ) : (
        <ul>
          {users.map((data) => (
            <li key={data.id}>
              {data.firstName} {data.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
