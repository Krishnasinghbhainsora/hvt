import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HvtCarousel from './pages/HvtCarousel';
import HvtContactForm from './pages/HvtContactForm';
import HvtFooter from './pages/HvtFooter';
import { HvtHeader } from './pages/HvtHeader';
import HvtReview from './pages/HvtReview';
import HvtWwr from './pages/HvtWwr';
import HvtPayment from './pages/Hvtpayment';
import Hvttourcard from './pages/Hvttourcard';
import TourDetails from './components/TourDetails';
import HvtFloatingbtn from './components/HvtFloatingbtn';
import HvtTnC from './pages/HvtTnC';
import HvtPrivacyP from './pages/HvtPrivacyP';
import HvtRnC from './pages/HvtRnC';
import HvtReservationP from '../src/pages/HvtReservationP'
import ScrollToTop from './pages/ScrollToTop';
import Gallery from './pages/Gallery';
import AboutFounder from './pages/AboutFounder';
import WhyCUs from './pages/WhyCUs';
// import Mathura from './pages/mathura';
import Vrindavan from './Vrindavan';
import Govardhan from './pages/Govardhan';





function App() {
  return (
    <Router>
      <HvtHeader />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={
          <>
            <HvtCarousel />
            <HvtWwr />
            <Hvttourcard />
            <Gallery/>
            <WhyCUs/>
            <AboutFounder/>
            <HvtReview />
            <HvtContactForm />
            
          </>
        } />
        <Route path="/about" element={<HvtWwr />} />
        <Route path="/destinations" element={< Hvttourcard/>} />
        <Route path="/contact" element={<HvtContactForm/>} />      
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/terms-conditions" element={<HvtTnC />} />
        <Route path="/privacy-policy" element={<HvtPrivacyP />} />
        <Route path="/refund-policy" element={<HvtRnC />} />
        <Route path="/reservation-policy" element={<HvtReservationP/> } /> 
        
          <Route path='vrindavan' element={<Vrindavan/>}/>
          <Route path='govardhan' element={<Govardhan/>}/>
      </Routes>
      <HvtFloatingbtn />
      <HvtFooter />
    </Router>
  );
}

export default App;
