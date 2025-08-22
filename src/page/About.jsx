import React from 'react'
import Header from '../components/Header';
import Aboutcomp from '../components/Aboutcomp';
import Vision from '../components/Vision';
import Services from '../components/Services';
import Packages from '../components/Packages';
import SocialMediaPackages from '../components/SocialMediaPackages';
import WebDesign from '../components/WebDesign';
import Contact from '../components/Contactabout';
import { Herosections } from '../components/Herosections';

function  About()  {
  return (
     <div className="min-h-screen">
    <Header />
     <Herosections/>
      <Aboutcomp />
              <Vision />
              <Services />
              <Packages />
              <SocialMediaPackages />
              <WebDesign />
              <Contact />
              </div>
  )

}

export default About