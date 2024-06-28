import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services/Authentication";
import PhotoForm from "../PhotoForm/PhotoForm";

const Homescreen = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <section className="container">
      <div>
        {user ? (
          <PhotoForm />
        ) : (
          <p>
            Join the Holiday Gallery App by clicking Register above! Already
            have an account? Click Log In.
          </p>
        )}
      </div>
    </section>
  );
};

export default Homescreen;
