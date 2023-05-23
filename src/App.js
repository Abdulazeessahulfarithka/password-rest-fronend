import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/register";
import ForgetPassword from "./Components/ForgetPassword";
import Verification from "./Components/Verification";
import { UserProvider } from "./Context/UserContext";
import ChangePassword from "./Components/ChangePassword";
import { Success } from "./Components/sucess";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
