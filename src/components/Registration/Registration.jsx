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
            <h3 className="text-center">Join Holiday Gallery!</h3>
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
              className="form-control"
              aria-label="Email"
              placeholder="Email"
              name="email"
              value={userData.email}
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
