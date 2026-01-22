import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
