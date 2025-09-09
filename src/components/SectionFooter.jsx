import React from 'react';
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn,FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const SectionFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-brandNavy via-[#1a1a2e] to-brandNavy text-white">
      {/* Main Footer Content */}
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          {/* 1. Company Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 md:justify-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brandOrange">
                <span className="text-lg font-bold text-white">B</span>
              </div>
              <h3 className="text-xl font-bold">Baahiye Digital</h3>
            </div>
            <p className="max-w-xs mx-auto text-sm leading-relaxed text-gray-300 md:mx-0">
              Innovative digital service provider in Somalia since 2022. We specialize in marketing, web design, and video production.
            </p>

            {/* ✅ Social Icons */}
            <div className="flex justify-center space-x-4 md:justify-start">
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Centered Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {['Graphic Design', 'Digital Marketing', 'Web Development', 'Video Production', 'Branding'].map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="transition hover:text-brandOrange">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
         
       

<div className="space-y-4">
  <h4 className="text-lg font-semibold">Contact Info</h4>
  <ul className="space-y-3 text-sm text-gray-300">
    <li className="flex items-start space-x-2">
      <FaMapMarkerAlt className="mt-1 text-brandOrange" />
      <div>
        <span className="block">City Tower 311, Floor 3</span>
        <span className="block">Shaqaalaha Street, Waaberi District</span>
        <span className="block">Mogadishu, Somalia</span>
      </div>
    </li>
    <li className="flex items-center space-x-2">
      <FaEnvelope className="text-brandOrange" />
      <span>info@baahiye.so</span>
    </li>
    <li className="flex items-center space-x-2">
      <FaPhone className="text-brandOrange" />
      <span>+252 618-046672</span>
    </li>
  </ul>
</div>



        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="py-4 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Baahiye Digital Marketing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SectionFooter;
