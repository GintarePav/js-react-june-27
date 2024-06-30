import "./GalleryFormatStyle.scss";

const GalleryFormat = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#formatModal"
      >
        Change Format
      </button>
      <div
        className="modal fade"
        id="formatModal"
        tabindex="-1"
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
            <div className="gallery-format modal-body d-flex justify-content-center flex-wrap">
              <button type="button">
                <div className="gallery-format__circle-container">
                  <div></div>
                </div>
              </button>
              <button type="button">
                <div className="gallery-format__double-bottom-container">
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button type="button">
                <div className="gallery-format__grid-of-four-container">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button type="button">
                <div className="gallery-format__square-container">
                  <div></div>
                </div>
              </button>
              <button type="button">
                <div className="gallery-format__double-container">
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button type="button">
                <div className="gallery-format__squares-and-circles-container">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button type="button">
                <div className="gallery-format__horizontal-three-container">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <button type="button">
                <div className="gallery-format__vertical-three-container">
                  <div className="gallery-format__vertical-three-container__large"></div>
                  <div className="gallery-format__vertical-three-container__inner">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </button>
              <button type="button">
                <div className="gallery-format__four-different-container">
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
