import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import HvtCarousel from './pages/HvtCarousel';
import HvtContactForm from './pages/HvtContactForm';
import HvtFooter from './pages/HvtFooter';
import { HvtHeader } from './pages/HvtHeader';
import HvtReview from './pages/HvtReview';
import HvtWwr from './pages/HvtWwr';
import Hvttourcard from './pages/Hvttourcard';
import TourDetails from './components/TourDetails';
import HvtFloatingbtn from './components/HvtFloatingbtn';
import HvtTnC from './pages/HvtTnC';
import HvtPrivacyP from './pages/HvtPrivacyP';
import HvtRnC from './pages/HvtRnC';
import HvtReservationP from './pages/HvtReservationP';
import ScrollToTop from './pages/ScrollToTop';
import Gallery from './pages/Gallery';
import AboutFounder from './pages/AboutFounder';
import WhyCUs from './pages/WhyCUs';
import { ToastContainer } from 'react-toastify';
import InquiryForm from './components/InquiryForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
    
      <BrowserRouter>
        {showForm && <InquiryForm onClose={closeForm} />}
        <ToastContainer />

        <HvtHeader />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <HvtCarousel />
              <HvtWwr />
              <Hvttourcard />
              <Gallery />
              <WhyCUs />
              <AboutFounder />
              <HvtReview />
              <HvtContactForm />
            </>
          } />
          <Route path="/about" element={<HvtWwr />} />
          <Route path="/destinations" element={<Hvttourcard />} />
          <Route path="/contact" element={<HvtContactForm />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/terms-conditions" element={<HvtTnC />} />
          <Route path="/privacy-policy" element={<HvtPrivacyP />} />
          <Route path="/refund-policy" element={<HvtRnC />} />
          <Route path="/reservation-policy" element={<HvtReservationP />} />
        </Routes>
        <HvtFloatingbtn />
        <HvtFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
