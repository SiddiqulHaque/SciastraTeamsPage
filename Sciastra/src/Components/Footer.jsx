import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-lg font-semibold">Contact Us</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Follow Us</p>
          <div className="flex justify-center mt-2">
            <a href="#" className="text-white  mx-2">
              Facebook
            </a>
            <a href="#" className="text-white  mx-2">
              Twitter
            </a>
            <a href="#" className="text-white mx-2">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
