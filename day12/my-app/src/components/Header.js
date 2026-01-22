import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1>Current Theme: {theme}</h1>

      <button
        onClick={toggleTheme}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Header;
