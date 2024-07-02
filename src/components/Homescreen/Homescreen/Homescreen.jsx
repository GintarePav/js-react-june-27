import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services/Authentication";
import PhotoForm from "../PhotoForm/PhotoForm";

const Homescreen = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <section className="container d-flex justify-content-center align-items-center">
      <div className="w-100 d-flex flex-column justify-content-center align-items-center my-5">
        <h1 className="text-center pb-4">
          Make a Step Towards Your Holiday Gallery!
        </h1>
        {user ? (
          <div className="d-flex flex-column justify-content-center align-items-center p-3">
            <PhotoForm />
            <p className="text-center pt-3">Go ahead and add a photo.</p>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center p-3">
            <p className="text-center">
              Join the Holiday Gallery App by clicking{" "}
              <Link
                to="/register"
                className="link-underline link-underline-opacity-0"
              >
                Register
              </Link>
            </p>
            <p className="text-center">
              Already have an account? Click{" "}
              <Link
                to="/login"
                className="link-underline link-underline-opacity-0"
              >
                Log In
              </Link>{" "}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Homescreen;
