import Link from 'next/link';

const Experience = () => {
    return (
        <div className="bg-white flex flex-col max-w-full mt-28"> 
            <div className="flex flex-col text-[#1E2538] lg:px-6 ml-12 text-4xl font-serif"> 
                
                <div className="font-light mb-3"> 
                    Our <text className="font-bold">Experience, skills</text> & 
                </div>

                <div className="font-thin mb-3"> 
                    Expertise, <span className="font-bold text-[#E95A0C]">Your Profit.</span>
                </div>

                <hr className="border-t-4 border-[#2D3C65] w-[12%]" /> 
            </div>

            <div className="flex flex-col text-[#3D3D3D] p-2 lg:px-6 ml-12 font-sans mt-5">
              <p>
                Office ipsum you must be muted. Conversation banner gave dive investigation chime usability whatever.<br />
                Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped.<br />
                Ideal deck support attached waste highlights game synchronise.
             </p>
            </div>

            {/* Columns Section */}      
            <div className="flex flex-col mt-28 p-6 md:flex-row justify-between md:space-y-0 md:space-x-16 max-w-7xl mx-auto">
                {/* Column 1 */}

                <div className="flex flex-col items-start text-left p-4 md:w-1/3">
                    <h3 className="font-semibold text-sm text-[#E95A0C]">FIRST</h3>
                    <h1 className="text-2xl font-bold text-[#1E2538] ">Dramatically</h1>
                    <h2 className="text-2xl font-semibold text-[#1E2538] ">maintain solutions</h2>
                    <p className="text-[#3D3D3D]  mt-4">
                        Collaboratively administrate turnkey channels whereas virtual e-tailers.
                        Objectively seize scalable metrics whereas proactive e-services.
                        Seamlessly empower growth.
                    </p>
                    <Link href="#" className="font-semibold mt-4 inline-block text-[#E95A0C]">Learn More...</Link>
                </div>
                
                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-[#E5E5E5] mx-4"></div>

                {/* Column 2 */}
                <div className="flex flex-col items-start text-left p-4 md:w-1/3">
                    <h3 className="text-orange-600 font-semibold text-sm text-[#E95A0C]">SECOND</h3>
                    <h1 className="text-2xl font-bold text-[#1E2538]">Efficiently unleash</h1>
                    <h2 className="text-2xl font-semibold text-[#1E2538]">media information</h2>
                    <p className="text-[#3D3D3D] mt-4">
                        Collaboratively administrate turnkey channels whereas virtual e-tailers.
                        Objectively seize scalable metrics whereas proactive e-services.
                        Seamlessly empower growth.
                    </p>
                    <Link href="#" className="font-semibold mt-4 inline-block text-[#E95A0C]">Learn More...</Link>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-[#E5E5E5] mx-4"></div>

                {/* Column 3 */}
                <div className="flex flex-col items-start text-left p-4 md:w-1/3">
                    <h3 className="text-orange-600 font-semibold text-sm text-[#E95A0C]">THIRD</h3>
                    <h1 className="text-2xl font-bold text-[#1E2538]">Quickly maximize</h1>
                    <h2 className="text-2xl font-semibold text-[#1E2538]">timely deliverables</h2>
                    <p className="text-[#3D3D3D] mt-4">
                        Collaboratively administrate turnkey channels whereas virtual e-tailers.
                        Objectively seize scalable metrics whereas proactive e-services.
                        Seamlessly empower growth.
                    </p>
                    <Link href="#" className="font-semibold mt-4 inline-block text-[#E95A0C]">Learn More...</Link>
                </div>
            </div>

        </div>
    )
};

export default Experience;
