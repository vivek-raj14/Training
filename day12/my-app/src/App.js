import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import SignIn from "./(auth)/SignIn";
import ProtectedRoute from "./routes/ProtectedRoutes";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
