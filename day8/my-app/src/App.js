import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./(auth)/Login";
import ProtectedRoutes from "./(auth)/ProtectedRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoutes>
              <Contact />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<h2>404 Page not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
