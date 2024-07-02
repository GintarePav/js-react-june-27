import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "../Header/HeaderNav/HeaderNav";
import Homescreen from "../Homescreen/Homescreen/Homescreen";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Gallery from "../Gallery/GallerySection/Gallery";
import Footer from "../Footer/Footer";
import "./Main.scss";

function App() {
  return (
    <Router>
      <HeaderNav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
