import { useState } from 'react';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('All');

    const logos = [
        { src: '/meras.png', alt: 'Meras', category: 'Real-Estate' },
        { src: '/mefic.png', alt: 'MEFIC Capital', category: 'Equity Funds' },
        { src: '/drnef.png', alt: 'Drnef Hotel', category: 'Real-Estate' },
        { src: '/karam.png', alt: 'Karam Beirut', category: 'Equity Funds' },
        { src: '/sultan.png', alt: 'Sultan Delight Burger', category: 'Equity Funds' },
        { src: '/body.png', alt: 'Body Masters', category: 'Real-Estate' }
    ];

    const filteredLogos = activeTab === 'All' ? logos : logos.filter(logo => logo.category === activeTab);

    return (
        <div className="bg-white flex flex-col max-w-full mt-20 justify-center items-center text-4xl">
            <h2 className="font-thin text-[#001B2E]">
                MEFIC Capital <span className="text-[#E95A0C] font-bold">Portfolio</span>
            </h2> 

            <hr className="border-t-4 border-[#2D3C65] w-1/6 mt-4" />

            <p className="text-base mt-6 text-[#3D3D3D] text-center leading-relaxed max-w-[90%] md:max-w-[70%]">
                Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever. Winning<br/>
                of crystallize another container reinvent stands.
            </p>

            {/* Tabs for All, Real-Estate, and Equity Funds */}
            <div className="flex space-x-6 mt-8 text-base font-medium">
                <button
                    onClick={() => setActiveTab('All')}
                    className={`${activeTab === 'All' ? 'text-[#E95A0C]' : 'text-black'} hover:text-[#E95A0C]`}
                >
                    All
                </button>
                <button
                    onClick={() => setActiveTab('Real-Estate')}
                    className={`${activeTab === 'Real-Estate' ? 'text-[#E95A0C]' : 'text-black'} hover:text-[#E95A0C]`}
                >
                    Real-Estate
                </button>
                <button
                    onClick={() => setActiveTab('Equity Funds')}
                    className={`${activeTab === 'Equity Funds' ? 'text-[#E95A0C]' : 'text-black'} hover:text-[#E95A0C]`}
                >
                    Equity Funds
                </button>
            </div>

            {/* Logo Row */}
            <div className="flex overflow-x-auto mt-6 space-x-4 py-4">
                {filteredLogos.map((logo, index) => (
                    <div 
                        key={index} 
                        className="flex justify-center items-center bg-white w-[200px] h-[200px] shadow-xl"
                    >
                        <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
