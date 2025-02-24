import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaGoogle,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const whatsappNumber = "+919000334512";
const message = "Hello, I am interested to know more about VS Genx";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
export const SocialLinks = () => (
  
  <div className="text-center space-y-4">
    <div
      className="grid grid-cols-4 gap-4 sm:gap-6 md:flex md:justify-center md:gap-6 mt-4"
    >
      {/* <a
        href="https://www.instagram.com/tltechnologiespvtltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Instagram"
      >
        <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10" />
      </a>
      <a
        href="https://www.facebook.com/tltechnologiespvtltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Facebook"
      >
        <FaFacebookF className="w-8 h-8 sm:w-10 sm:h-10" />
      </a> */}
      <a
        href="https://www.linkedin.com/in/venkatesans/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="w-8 h-8 sm:w-10 sm:h-10" />
      </a>
      <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-white transition-colors duration-200"
  aria-label="WhatsApp"
>
  <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10" />
</a>;
      {/* <a
        href="https://www.youtube.com/@tltechnologiespvtltd-sangi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="YouTube"
      >
        <FaYoutube className="w-8 h-8 sm:w-10 sm:h-10" />
      </a>
      <a
        href="https://g.co/kgs/Xjm7CWT"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Google"
      >
        <FaGoogle className="w-8 h-8 sm:w-10 sm:h-10" />
      </a>
      <a
        href="https://x.com/tl_technologies"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Twitter"
      >
        <FaTwitter className="w-8 h-8 sm:w-10 sm:h-10" />
      </a>
      <a
        href="https://in.pinterest.com/tltechnologiespvtltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Pinterest"
      >
        <FaPinterest className="w-8 h-8 sm:w-10 sm:h-10" />
      </a> */}
    </div>
  </div>
);
