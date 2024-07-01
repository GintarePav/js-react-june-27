import { deletePhoto } from "../../../services/PhotoManagement";

const GalleryItems = (props) => {
  const handleDelete = (id) => {
    deletePhoto(id);
  };

  return (
    <>
      {props.data.map((photo, i) => (
        <div key={i} className="gallery-div">
          <img
            alt={photo.photoTitle}
            src={photo.photoUrl}
            data-bs-toggle="modal"
            data-bs-target={`#photo${i}`}
            className="gallery-img"
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
                  <h4 className="modal-title" id={`labelForPhoto${i}`}>
                    {photo.photoTitle}
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="h-100 w-100">
                    <img
                      src={photo.photoUrl}
                      alt={photo.photoTitle}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <a
                    href=""
                    data-bs-dismiss="modal"
                    onClick={() => handleDelete(photo.id)}
                    className="link-secondary"
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
