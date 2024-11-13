import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const Services = () => {
  useEffect(() => {
    
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
    <div className="bg-[#1E2538] flex flex-col max-w-full mt-28">
      <div className="flex flex-col mt-24 text-white lg:px-6 ml-12 text-4xl font-serif">
        <div className="font-light mb-3"> 
          Our <span className="font-bold">Services</span> & 
          <span className="font-bold text-[#E95A0C]"> Expertise</span>
        </div>

        <hr className="border-t-4 border-[#2D3C65] w-[12%]" /> 

        <div className="text-sm font-normal ml-[50%]">
          <p className="mt-[-10%]">
            Office ipsum you must be muted. Conversation banner gave dive investigation chime usability
            whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock shaped.
            Ideal deck support attached waste highlights game synchronise.
          </p>
        </div>

        {/* Flex container for the heading and cards */}
        <div className="flex flex-col lg:flex-row items-start gap-6 mt-[10%] text-5xl">
          {/* Text section */}
          <div className="font-light">
            What
            <div className="font-bold">Problem</div>
            can we <text className="font-bold text-[#E95A0C] mt-3">solve <br/> together</text>?
          </div>

          {/* Card 1 */}
          <div className="flex flex-col bg-white text-[#0f1830] ml-12 p-4 mt-[-5%] mb-16 shadow-lg w-[280px] border border-[#E5E5E5]">
            <div className="mb-4 mt-6">
              <img src="/asset 1.png" alt="Logo" className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-1">Assets</h3>
            <h4 className="text-3xl font-light mb-3">Management</h4>
            <p className="text-sm mb-4 text-[#3D3D3D]">
              Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
            </p>
            <Link href="#" className="text-[#E95A0C] font-bold text-sm mt-6 mb-4">Learn More...</Link>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white text-[#1E2538] p-4 mt-[-5%] mb-16 shadow-lg w-[280px] border border-[#E5E5E5]">
            <div className="mb-4 mt-6">
              <img src="/asset 2.png" alt="Logo" className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-1">Private</h3>
            <h4 className="text-3xl font-light mb-3">Equity & IB</h4>
            <p className="text-sm mb-4 text-[#3D3D3D]">
              Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
            </p>
            <Link href="#" className="text-[#E95A0C] font-bold text-sm mt-6 mb-4">Learn More...</Link>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-white text-[#1E2538] p-4 mt-[-5%] mb-16 shadow-lg w-[280px] border border-[#E5E5E5]">
            <div className="mb-4 mt-6">
              <img src="/asset 3.png" alt="Logo" className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-1">Real Estate</h3>
            <h4 className="text-3xl font-light mb-3">Investment</h4>
            <p className="text-sm mb-4 text-[#3D3D3D]">
              Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.
            </p>
            <Link href="#" className="text-[#E95A0C] font-bold text-sm mt-6 mb-4">Learn More...</Link>
          </div>
        </div>
      </div>

      {/* This is the image section with the sliding animation */}
      <div className="mt-[-15%]">
        <img src="/slide 1.png" alt="Vector 1" className="w-full slide-image" />
      </div>
    </div>
  );
};

export default Services;
