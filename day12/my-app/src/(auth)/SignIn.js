import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const SignIn = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = {
      id: 1,
      name: "Vivek",
      email: "vivek@example.com",
    };

    login(userData);
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default SignIn;
