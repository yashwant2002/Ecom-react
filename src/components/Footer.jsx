import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-black py-10">
    <hr/>
      <div className=" mt-9 container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Company</h2>
          <p className="text-gray-400">We are committed to providing the best products and services to our customers. Your satisfaction is our priority.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Help</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Order Status</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
