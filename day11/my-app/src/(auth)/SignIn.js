import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;
    console.log("Login Success", { email, password });
    setEmail("");
    setPassword("");
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password should be greater than 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="w-full h-screen items-center justify-center flex flex-col ">
      <div className="w-[400px] h-[500px] bg-black p-20 rounded-2xl">
        <div className="flex justify-center text-white py-5">
          <h2 className="text-3xl">Login</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-2 my-2">
              <p className="text-white">Email</p>
              <input
                type="email"
                value={email}
                placeholder="Enter your Email"
                className="border border-black rounded-xl px-4 py-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-600 text-sm min-h-[20px]">
                  {errors.email || ""}
                </p>
              )}
            </div>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-white">Password</p>
              <input
                type="password"
                value={password}
                placeholder="Enter your Password"
                className="border border-black rounded-xl px-4 py-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm min-h-[20px]">
                {errors.password || ""}
              </p>
            )}
            <div className="w-full my-3 ">
              <button
                type="submit"
                className="w-full flex justify-center text-white items-center"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
