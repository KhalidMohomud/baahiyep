import { 
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,   // ✅ Added Behance
} from 'react-icons/fa';
import {
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa6';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

// ✅ Import your new logo image
const SectionFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-brandNavy via-[#1a1a2e] to-brandNavy text-white">
      {/* Main Content */}
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid gap-12 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:text-left">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 md:justify-start">
              {/* ✅ New Logo Here */}
              <div className="flex items-center justify-center w-16 h-16">
                <img
                  src="/image/Bahiye.png"
                  // alt="Baahiye Digital Logo"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-xl font-bold">Baahiye Digital</h3>
            </div>
            <p className="max-w-xs mx-auto text-sm leading-relaxed text-gray-300 md:mx-0">
              Innovative digital service provider in Somalia since 2021. We specialize in marketing, web design, and video production.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 md:justify-start">
              <a
                href="https://www.linkedin.com/company/baahiye-digital-marketing/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Baahiyedigital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/baahiyedigitalmarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/BaahiyeDigitalMarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@baahiyedigitalmarketing?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              {/* ✅ Behance Link */}
              <a
                href="https://www.behance.net/baahiyedigitalmark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 transition rounded-full bg-white/10 hover:bg-brandOrange"
              >
                <FaBehance className="w-4 h-4" />
              </a>
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
                  <a href="#" className="transition hover:text-brandOrange">
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
                <FaMapMarkerAlt className="mb-1 text-brandOrange sm:mb-0" />
                <div className="text-center sm:text-left">
                  <div>City Tower 311, Floor 3</div>
                  <div>Shaqaalaha Street, Waaberi District</div>
                  <div>Mogadishu, Somalia</div>
                </div>
              </li>
              <li className="flex items-center justify-center space-x-2 md:justify-start">
                <FaEnvelope className="text-brandOrange" />
                <span>info@baahiye.so</span>
              </li>
              <li className="flex items-center justify-center space-x-2 md:justify-start">
                <FaPhone className="text-brandOrange" />
                <span>+252 61 3732356</span>
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
