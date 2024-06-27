import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "../Header/HeaderNav/HeaderNav";
import Homescreen from "../Homescreen/Homescreen";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";

function App() {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
