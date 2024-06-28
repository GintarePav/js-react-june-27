import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services/Authentication";
import { addPhoto } from "../../../services/PhotoManagement";

const PhotoForm = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userUid: user.uid,
    photoTitle: "",
    photoUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    if (document.querySelector("#photo-form").checkValidity()) {
      e.preventDefault();
      addPhoto(formData);
      navigate("/gallery");
    }
  };

  return (
    <>
      <a
        href=""
        data-bs-toggle="modal"
        data-bs-target="#photoForm"
        className="btn-primary"
      >
        <i className="bi bi-plus-circle"></i>
      </a>

      <div
        className="modal fade"
        id="photoForm"
        tabIndex="-1"
        aria-labelledby="photoFormLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form id="photo-form" onSubmit={submitHandler}>
              <div className="modal-header">
                <h3 className="modal-title fs-5" id="photoFormLabel">
                  Add a Holiday Photo
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Photo Title"
                    placeholder="Photo Title"
                    minLength="10"
                    name="photoTitle"
                    value={formData.photoTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="url"
                    className="form-control"
                    aria-label="Photo URL"
                    placeholder="Photo URL"
                    name="photoUrl"
                    value={formData.photoUrl}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoForm;
