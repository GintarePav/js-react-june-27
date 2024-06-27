import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/Authentication";

const Homescreen = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <section className="container">
      {user ? (
        <p>Add photos</p>
      ) : (
        <p>
          Join the Holiday Gallery App by clicking Register above! Already have
          an account? Click Log In.
        </p>
      )}
    </section>
  );
};

export default Homescreen;
