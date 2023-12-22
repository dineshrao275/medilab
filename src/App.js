import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from "./Pages/AboutPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Service from "./Pages/Service";
import Gallery from "./Pages/Gallery";
import Appointment from "./Pages/Appointment";
import DoctorAndDepartment from "./Pages/DoctorAndDepartment";
import Contact from "./Pages/Contact";

var App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<Service />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/doctors' element={<DoctorAndDepartment />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
