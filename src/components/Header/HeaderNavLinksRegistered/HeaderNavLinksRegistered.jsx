import { logout } from "../../../services/Authentication";
import { useNavigate, Link } from "react-router-dom";

const HeaderNavLinksRegistered = (props) => {
  const naviagte = useNavigate();
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Hi {props.firstName}!
        </a>
        <ul className="dropdown-menu">
          <li className="dropdown-item">{props.email}</li>
          <li>
            <Link className="dropdown-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/gallery">
              My Gallery
            </Link>
          </li>
          <li
            className="dropdown-item"
            onClick={() => {
              logout();
              naviagte("/");
            }}
          >
            Log out
          </li>
        </ul>
      </li>
    </>
  );
};

export default HeaderNavLinksRegistered;
