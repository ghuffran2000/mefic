"use client";
import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    // Animation for sliding image
    gsap.to(".slideImage", {
      x: -110, 
      duration: 5, 
      yoyo: true, 
      repeat: -1, 
      ease: "power1.inOut", 
      delay: 3, 
    });

    // Animation for heading text
    gsap.from(".headingText, .text, .line", {
      opacity: 0,
      y: 20,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
      delay: 1,
    });

    // Animation for buttons
    gsap.from(".heroButton", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
      delay: 2.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="bg-[#1E2538] flex flex-col max-w-full md:bg-[#1E2538]">
      <div className="flex flex-row justify-start p-4 mt-16">
        <div className="flex flex-col bg-[#2D3C65] rounded-md p-2 lg:px-6 max-w-full ml-12 headingText">
          <div className="relative font-semibold text-white headingText">
            We believe that every client is a partner
          </div>
        </div>
      </div>

      <span className="flex flex-col text-white p-2 lg:px-6 ml-12 lg:text-5xl font-serif md:text-4xl">
        <div className="font-light mb-3 headingText"> 
          Your future financial 
        </div>

        <div className="font-bold mb-3 headingText"> 
          Investment made <span className="font-thin">easier</span>
        </div>

        <div className="font-thin mb-3 headingText">
          with <span className="font-bold text-[#E95A0C]">MEFIC</span>
        </div>

        <hr className="border-t-4 border-[#2D3C65] w-[25%] line" /> 
      </span>

      <div className="flex flex-col text-[#C3C3C3] p-2 lg:px-4 ml-12 font-sans mt-5 text">
        <p>
          Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever.
          <br/>Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped.
          <br/>Ideal deck support attached waste highlights game synchronise.
       </p>
      </div>

      <div className="flex flex-row items-center space-x-4 p-2 lg:px-6 ml-12 mt-6">
        <button className="bg-[#E95A0C] h-10 w-40 rounded-md text-white heroButton">
          <Link href="">Book a Consultant</Link>
        </button>

        <button className="border border-[#E95A0C] h-10 w-[7%] rounded-md bg-transparent text-white heroButton">
          <Link href="/login">Login</Link>
        </button>
      </div>

      <div className="lg:mt-[-250px] mb-[-5px] md:mt-[-85px]">
        <img src="slide.png" alt="Slide Image" className="slideImage"/>
      </div>
      
    </div>
  );
};

export default Hero;
