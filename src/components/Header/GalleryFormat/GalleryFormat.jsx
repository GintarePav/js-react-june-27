import "./GalleryFormatPickerStyle.scss";

const GalleryFormat = () => {
  const changeGalleryClass = (e, className) => {
    e.preventDefault();
    const gallery = document.getElementById("gallery-container");
    gallery.classList = "";
    gallery.classList.add(className);
  };

  return (
    <>
      <li className="nav-item">
        <a
          type="button"
          className="nav-link"
          data-bs-toggle="modal"
          data-bs-target="#formatModal"
        >
          Change Gallery Format
        </a>
      </li>
      <div
        className="modal fade"
        id="formatModal"
        tabIndex="-1"
        aria-labelledby="formatModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5" id="formatModalLabel">
                Choose a Format
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="gallery-format-picker modal-body d-flex justify-content-center flex-wrap">
              <button
                type="button"
                onClick={(e) => changeGalleryClass(e, "gallery-circle")}
              >
                <div className="gallery-format-picker__circle-container">
                  <div></div>
                </div>
              </button>
              <button
                type="button"
                onClick={(e) => changeGalleryClass(e, "gallery-pairs-vertical")}
              >
                <div className="gallery-format-picker__double-bottom-container">
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button
                type="button"
                onClick={(e) => changeGalleryClass(e, "gallery-four")}
              >
                <div className="gallery-format-picker__grid-of-four-container">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button
                type="button"
                onClick={(e) => changeGalleryClass(e, "gallery-square")}
              >
                <div className="gallery-format-picker__square-container">
                  <div></div>
                </div>
              </button>
              <button
                type="button"
                onClick={(e) =>
                  changeGalleryClass(e, "gallery-pairs-horizontal")
                }
              >
                <div className="gallery-format-picker__double-container">
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button
                type="button"
                onClick={(e) =>
                  changeGalleryClass(e, "gallery-four-mixed-shapes")
                }
              >
                <div className="gallery-format-picker__squares-and-circles-container">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button
                type="button"
                onClick={(e) =>
                  changeGalleryClass(e, "gallery-three-horizontal")
                }
              >
                <div className="gallery-format-picker__horizontal-three-container">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button
                type="button"
                onClick={(e) => changeGalleryClass(e, "gallery-three-vertical")}
              >
                <div className="gallery-format-picker__vertical-three-container">
                  <div className="gallery-format-picker__vertical-three-container__large"></div>
                  <div className="gallery-format-picker__vertical-three-container__inner">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={(e) =>
                  changeGalleryClass(e, "gallery-four-mixed-sizes")
                }
              >
                <div className="gallery-format-picker__four-different-container">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryFormat;
