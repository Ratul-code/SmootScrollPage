import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import {
  homeObj1,
  homeObj2,
  homeObj3,
  homeObj4,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = ({toggle,isOpen}) => {
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObj1} />
      <Services />
      <InfoSection {...homeObj2} />
      <InfoSection {...homeObj3} />
      <InfoSection {...homeObj4} />
      <Footer />
    </>
  );
};

export default Home;
