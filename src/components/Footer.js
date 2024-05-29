import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00a95b] text-white py-8 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">DigiBiomics®</h3>
          <p>Harness the power of AI and ML to tackle health, agriculture, and climate change.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="/" className="">Home</a></li>
            <li><a href="/about" className="">About Us</a></li>
            <li><a href="/services" className="">Services</a></li>
            <li><a href="/blog" className="">Blog</a></li>
            <li><a href="/contact" className="">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://twitter.com/digibiomics" className="">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://linkedin.com/company/digibiomics" className="">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
          <h4 className="text-lg font-semibold mt-4 mb-4">Contact</h4>
          <p>IREM: 416-319-0612</p>
          <p>Meeraj Khan: 647-882-9464</p>
        </div>
      </div>
      <div className="border-t border-green-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2024 DigiBiomics®. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
