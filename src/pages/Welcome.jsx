import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "300px" }}>
      <h1>Welcome to PopX</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit.
      </p>

      <button
        className="primary-btn"
        onClick={() => navigate("/register")}
      >
        Create Account
      </button>

      <button
        className="secondary-btn"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}
