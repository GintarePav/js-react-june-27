import { deletePhoto } from "../../../services/PhotoManagement";

const GalleryItems = (props) => {
  const handleDelete = (id) => {
    deletePhoto(id);
  };

  return (
    <>
      {props.data.map((photo, i) => (
        <div key={i}>
          <img
            alt={photo.photoTitle}
            src={photo.photoUrl}
            data-bs-toggle="modal"
            data-bs-target={`#photo${i}`}
          />
          <div
            className="modal fade w-100 h-100"
            id={`photo${i}`}
            tabIndex="-1"
            aria-labelledby={`labelForPhoto${i}`}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id={`labelForPhoto${i}`}>
                    {photo.photoTitle}
                  </h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img src={photo.photoUrl} alt={photo.photoTitle} />
                </div>
                <div className="modal-footer">
                  <a
                    data-bs-dismiss="modal"
                    onClick={() => handleDelete(photo.id)}
                  >
                    <i className="bi bi-trash3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GalleryItems;
