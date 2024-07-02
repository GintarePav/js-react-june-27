import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerWithEmailAndPassword } from "../../services/Authentication";

const Registration = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    if (document.querySelector("#registration-form").checkValidity()) {
      e.preventDefault();
      registerWithEmailAndPassword(
        userData.firstName,
        userData.email,
        userData.password
      );
      navigate("/");
    }
  };

  return (
    <section className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <form id="registration-form" onSubmit={submitHandler}>
          <div className="my-5">
            <h3 className="text-center">Join the Holiday Gallery!</h3>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="First Name"
              placeholder="First Name"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              pattern=".+@[a-z0-9\.\-]+\.[a-z]{2,}"
              className="form-control"
              aria-label="Email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text dropdows">
              <a
                href=""
                className="link-secondary"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-info-circle"></i>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Must include:</li>
                <li className="dropdown-item">at least 8 characters</li>
                <li className="dropdown-item">lower-case letters</li>
                <li className="dropdown-item">upper-case letters</li>
                <li className="dropdown-item">numbers</li>
                <li className="dropdown-item">special characters</li>
              </ul>
            </span>
            <input
              type="password"
              className="form-control"
              aria-label="Password"
              placeholder="Password"
              minLength="8"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
              name="password"
              value={userData.password}
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

export default Registration;
