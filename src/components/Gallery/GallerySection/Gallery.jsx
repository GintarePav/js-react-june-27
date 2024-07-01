import { getPhotos } from "../../../services/PhotoManagement";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services/Authentication";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GalleryItems from "../GalleryItems/GalleryItems";
import GalleryFormat from "../GalleryFormat/GalleryFormat";
import "./GalleryStyle.scss";

const Gallery = () => {
  const navigate = useNavigate();
  const [gallery, setGallery] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/");
    getPhotos(setGallery, user);
  }, [user, loading]);

  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  return (
    <section className="container">
      <GalleryFormat />
      <div id="gallery-container" className="gallery-four-mixed-sizes">
        <GalleryItems data={gallery} />
      </div>
    </section>
  );
};

export default Gallery;
