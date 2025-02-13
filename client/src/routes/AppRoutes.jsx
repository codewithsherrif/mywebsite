import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import Services from "../pages/Services";
import Footer from "../components/Footer";
import Booking from "../pages/Booking";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import ContactSales from "../pages/ContactSales";
import Pricing from "../pages/Pricing";
import ConsultationBooking from "../pages/ConsultationBooking";
import LiveChatWidget from "../pages/LiveChatWidget";
import CookieBanner from "../components/CookieConsent";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactsales" element={<ContactSales />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/book-consult" element={<ConsultationBooking />} />
      </Routes>
      <LiveChatWidget />
      <CookieBanner />
      <Footer />
    </Router>
  );
};

export default AppRoutes;
