import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

const SectionFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-brandNavy via-[#1a1a2e] to-brandNavy text-white">
      {/* Main Content */}
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brandOrange">
                <span className="text-lg font-bold text-white">B</span>
              </div>
              <h3 className="text-xl font-bold">Baahiye Digital</h3>
            </div>
            <p className="text-sm text-gray-300 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Innovative digital service provider in Somalia since 2022. We specialize in marketing, web design, and video production.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              {[FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-brandOrange transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                'Graphic Design',
                'Digital Marketing',
                'Web Development',
                'Video Production',
                'Branding',
              ].map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-brandOrange transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex flex-col items-center md:items-start sm:flex-row sm:space-x-2">
                <FaMapMarkerAlt className="text-brandOrange mb-1 sm:mb-0" />
                <div className="text-center sm:text-left">
                  <div>City Tower 311, Floor 3</div>
                  <div>Shaqaalaha Street, Waaberi District</div>
                  <div>Mogadishu, Somalia</div>
                </div>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <FaEnvelope className="text-brandOrange" />
                <span>info@baahiye.so</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
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
