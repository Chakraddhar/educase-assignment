import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountSettings from "./pages/AccountSettings";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <div className="mobile-card">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
