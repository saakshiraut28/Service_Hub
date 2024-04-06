/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarDefault from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";

import UserAuth from "./pages/Customer/Auth";
import ProviderAuth from "./pages/Provider/Auth";

import ProfileComponent from "./pages/Customer/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarDefault />
        <Routes>
          {/* Default landing page */}
          <Route path="/" element={<LandingPage />} />
          {/* Default home page*/}
          <Route path="/home" element={<HomePage />} />

          {/* USERS ROUTE */}
          {/* User i.e. Customer Authentication */}
          <Route path="/auth/user" element={<UserAuth />} />
          {/* User Profile */}
          <Route path="/user/profile/:id" element={<ProfileComponent />} />

          {/* PROVIDERS ROUTE */}
          {/* Provider Authentication */}
          <Route path="/auth/provider" element={<ProviderAuth />} />

          {/* SERVICES ROUTE */}
          {/* Services : List of all services */}
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
