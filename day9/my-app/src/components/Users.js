import DisplayUser from "./DisplayUser";
import { useState, useEffect } from "react";
import { getUsers } from "../api/userApi";
import Loader from "./Loader";
import "./Loader.css";
import AddUser from "./AddUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getUsers();
        setUsers(res.data);
      } catch (error) {
        console.log("Message :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="users">
      <h1>Users</h1>
      <div>
        <AddUser />
      </div>
      <div>
        <DisplayUser data={users} />
      </div>
    </div>
  );
};
export default Users;
