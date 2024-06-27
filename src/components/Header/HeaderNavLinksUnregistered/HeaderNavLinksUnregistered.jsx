import { Link } from "react-router-dom";

const HeaderNavLinksUnregistered = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Log In
        </Link>
      </li>
    </>
  );
};

export default HeaderNavLinksUnregistered;
