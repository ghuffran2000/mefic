"use client";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Services from "./components/services";
import Funds from "./components/mefic funds";
import NewsSection from "./components/latest news";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

export default function Home() {
    return (
      <div>
        <Navbar/>
        
        <Hero/>

        <Experience/>

        <Services/>

        <Funds/>

        <NewsSection/>

        <Portfolio/>

        <Footer/>

      </div>
    );
  }