import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import PrivateRoutes from "./privateRoutes/privateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
