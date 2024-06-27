import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, getUserData } from "../../../services/Authentication";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderNavLinksUnregistered from "../HeaderNavLinksUnregistered/HeaderNavLinksUnregistered";
import HeaderNavLinksRegistered from "../HeaderNavLinksRegistered/HeaderNavLinksRegistered";

const HeaderNav = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/");
    getUserData(user, setUserData);
  }, [user, loading]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Holiday Gallery
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user ? (
                <HeaderNavLinksRegistered
                  firstName={userData.firstName}
                  email={userData.email}
                />
              ) : (
                <HeaderNavLinksUnregistered />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
