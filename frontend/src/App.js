/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/CustomerLP";
import ServicePage from "./pages/ServicePage";
import NavbarDefault from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CustomerProviderProfile from "./pages/CustomerProvider";
import HomePageBL from "./pages/HomePageBL";
import ProviderDashboard from "./pages/ProviderDashboard";
import RatingPage from "./pages/RatingPage";
import ProfilePage from "./pages/Profile_Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarDefault />
        <Routes>
          <Route path="/" element={<HomePageBL />} />
          <Route path="/about" element={<About />} />
          <Route path="/customer" element={<LandingPage />} />
          <Route path="/servicepage" element={<ServicePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/providerdashboard" element={<ProviderDashboard />} />
          <Route path="/RatingPage" element={<RatingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
