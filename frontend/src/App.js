/** @format */

import logo from "./logo.svg";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Slogin from "./pages/Slogin";
import Ssignup1 from "./pages/Ssignup1";
import Ssignup2 from "./pages/Ssignup2";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Slogin" element={<Slogin />} />
          <Route path="/Ssignup1" element={<Ssignup1 />} />
          <Route path="/Ssignup2" element={<Ssignup2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
