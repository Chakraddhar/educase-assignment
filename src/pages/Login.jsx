import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("registeredUser"));

    if (!user) {
      setError("No account found. Please register first.");
      return;
    }

    if (email !== user.email || password !== user.password) {
      setError("Incorrect email or password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/account");
  };

  return (
    <div>
      <h1>Signin to your <br /> PopX account</h1>

      <input placeholder="Email address" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      {error && <p className="error">{error}</p>}

      <button className="primary-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
