/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarDefault from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

import UserAuth from "./pages/Customer/Auth";
import ProviderAuth from "./pages/Provider/Auth";

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
          {/* User i.e. Customer Authentication */}
          <Route path="/auth/user" element={<UserAuth />} />
          {/* Provider Authentication */}
          <Route path="/auth/provider" element={<ProviderAuth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
