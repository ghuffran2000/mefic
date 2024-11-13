import { useEffect } from 'react';
import gsap from 'gsap';

const Footer = () => {
  useEffect(() => {
    // GSAP Animation for the image
    gsap.fromTo(
      '.slide-image', 
      { x: '-30px' }, 
      {
        x: '30px', 
        duration: 6, 
        ease: 'power2.inOut', 
        repeat: -1, 
        yoyo: true, 
      }
    );
  }, []);

  return (
    <div>
      <footer className="bg-[#1E2538] flex flex-col max-w-full mt-28 text-white">
        <div className="flex justify-center">
          
          <img
            src="/slide 2.png"
            alt="Slide Image"
            className="w-full slide-image"
          />
        </div>

        <div className="container mx-auto flex flex-col px-4 md:px-12 mt-[-22%]">
          <img src="/logo.png" height={180} width={180} className="mb-4" />

          <div className="flex flex-row items-center justify-center md:justify-start space-x-8 mt-4">
            <div className="flex items-center space-x-3">
              <img src="/call-icon.svg" alt="Call Icon" className="w-5 h-5" />
              <span className="text-sm">+123 (456) 7890</span>
            </div>

            <div className="flex items-center space-x-3">
              <img src="/sms-icon.svg" alt="SMS Icon" className="w-5 h-5" />
              <span className="text-sm">info@domain.com</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-end space-x-20 mt-[-5%]">
            {/* Solutions Section */}
            <div className="flex flex-col space-y-2">
              <h4 className="text-lg font-semibold mb-2">Solutions</h4>
              <ul className="space-y-1 text-sm">
                <li>Assets Management</li>
                <li>Private Equity & IB</li>
                <li>Real Estate Investments</li>
              </ul>
            </div>

            {/* Vertical line */}
            <div className="hidden md:block border-l-2 border-[#2D3C65] h-auto mx-4"></div>

            {/* Helpful Links Section */}
            <div className="flex flex-col space-y-2">
              <h4 className="text-lg font-semibold mb-2">Helpful Links</h4>
              <ul className="space-y-1 text-sm">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Vertical line */}
            <div className="hidden md:block border-l-2 border-[#2D3C65] h-auto mx-4"></div>

            {/* Follow Us Section */}
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <img src="/facebook.svg" alt="Facebook Icon" className="w-6 h-6" />
                <img src="/linkedin.svg" alt="LinkedIn Icon" className="w-6 h-6" />
                <img src="/twitter.svg" alt="Twitter Icon" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Horizontal Line and Copyright Section */}
          <div className="mt-32 mb-4 border-t border-[#2D3C65] pt-4 text-center">
            <p className="text-sm">&copy; 2024 MEFIC Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
