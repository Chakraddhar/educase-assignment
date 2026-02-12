import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Full name is required";

    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone number must be exactly 10 digits";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.password || form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!form.company)
      newErrors.company = "Company name is required";

    if (!form.agency)
      newErrors.agency = "Please select an option";

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      })
    );

    navigate("/login");
  };

  return (
    <div className="card">
      <h1>
        Create your <br /> PopX account
      </h1>

      {/* Full Name */}
      <input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      {/* Phone */}
      <input
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
        }
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      {/* Email */}
      <input
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      {/* Company */}
      <input
        placeholder="Company Name"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />
      {errors.company && <p className="error">{errors.company}</p>}

      {/* Agency */}
      <div className="radio-group">
        <p>Are you an Agency?</p>

        <label>
          <input
            type="radio"
            name="agency"
            onChange={() => setForm({ ...form, agency: "yes" })}
          />{" "}
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            onChange={() => setForm({ ...form, agency: "no" })}
          />{" "}
          No
        </label>
      </div>
      {errors.agency && <p className="error">{errors.agency}</p>}

      <button className="primary-btn" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}
