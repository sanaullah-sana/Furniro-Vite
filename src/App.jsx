import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";
import Payment from "./pages/Payment";
import Returns from "./pages/Returns";
import PrivacyPolicy from './pages/PrivacyPolicy';
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<User />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/payment-options" element={<Payment />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;