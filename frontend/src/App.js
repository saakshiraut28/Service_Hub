/** @format */

import logo from "./logo.svg";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import LandingPage from "./pages/CustomerLP";
import ServicePage from "./pages/ServicePage";
import NavbarDefault from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CustomerProviderProfile from "./pages/CustomerProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarDefault />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer" element={<LandingPage />} />
          <Route path="/servicepage" element={<ServicePage />} />
          <Route path="/provider" element={<CustomerProviderProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
