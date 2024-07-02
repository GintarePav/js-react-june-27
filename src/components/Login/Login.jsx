import { useState } from "react";
import { login } from "../../services/Authentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    if (document.querySelector("#login-form").checkValidity()) {
      e.preventDefault();
      login(formData.email, formData.password);
      navigate("/");
    }
  };

  return (
    <section className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <form id="login-form" onSubmit={submitHandler}>
          <div className="my-5">
            <h3 className="text-center">Welcome Back Traveller!</h3>
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              aria-label="Email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              aria-label="Password"
              placeholder="Password"
              minLength="8"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
