import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Dailypickup from "./Service/Dailypickup";
import Afterschoolservices from "./Service/Afterschoolservices";
import Readingclub from "./Service/Readingclub";
import Bibleschool from "./Service/Bibleschool";
import Skillacquisition from "./Service/Skillacquisition";
import Musicschool from "./Service/Musicschool";
import Nannytraining from "./Service/Nannytraining";
import Afterschoolform from "./Onlineregistration/Afterschoolform";
import Musicschoolform from "./Onlineregistration/Musicschoolform";
import Bibleschoolvolunteer from "./Onlineregistration/Bibleschoolvolunteer";
import Vibs2020 from "./Onlineregistration/Vibs2020";
import Contactus from "./Resource/Contactus";
import Gallery from "./Resource/Gallery";
import Blog from "./Resource/Blog";
import Mission from "./About/Mission";
import Whoweare from "./About/Whoweare";
import Founder from "./About/Founder";
import Aboutus from "./Page/Aboutus";
import RegistrationForm from "./Page/Registrationfrom";
import Bibleschoolform from "./Onlineregistration/Bibleschoolform";
import EnquiryForm from "./Page/EnquiryForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/daily-pickup" element={<Dailypickup />} />
        <Route path="/after-school" element={<Afterschoolservices />} />
        <Route path="/reading-club" element={<Readingclub />} />
        <Route path="/bible-school" element={<Bibleschool />} />
        <Route path="/skills" element={<Skillacquisition />} />
        <Route path="/music-school" element={<Musicschool />} />
        <Route path="/nanny-training" element={<Nannytraining />} />
        <Route path="/after-school-form" element={<Afterschoolform />} />
        <Route path="/music-form" element={<Musicschoolform />} />
        <Route path="/bible-volunteer" element={<Bibleschoolvolunteer />} />
        <Route path="/bible-form" element={<Bibleschoolform />} />
        <Route path="/vibs-volunteers" element={<Vibs2020 />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mission&vission" element={<Mission />} />
        <Route path="/whoweare" element={<Whoweare />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/form" element={<RegistrationForm />} />
        <Route path="/enquiry-form" element={<EnquiryForm />} />
      </Routes>
    </>
  );
}

export default App;
