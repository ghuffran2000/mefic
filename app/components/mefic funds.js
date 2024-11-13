import Link from 'next/link';

const Funds = () => {
    return (
        <div className='bg-white flex flex-col max-w-full mt-20'>
            <div className='ml-10 h-[50%] w-[50%]'>
                <img src='/fund.png' alt='Funds Table' />
            </div>

            <div className='flex flex-col bg-[#E7E7E7] rounded-md p-2 lg:px-4 w-[10%] ml-[53%] mt-[-28%]'>
                <div className='relative font-semibold text-[#001B2E]'>
                    MEFIC FUNDS
                </div>
            </div>

            <div className='flex flex-col ml-[53%] mt-5 text-[#001B2E] text-4xl'>
                <h2 className='font-thin'>To <span className='text-[#001B2E] font-bold'>Find</span> The Best <span className='text-[#E95A0C] font-bold'>MEFIC</span> </h2>
                <text className='text-[#E95A0C] font-bold'>Funds?</text>

                <hr className="border-t-4 border-[#2D3C65] w-[24%] mt-4" /> 

                <p className='text-base mt-4 text-[#3D3D3D]'>
                    Collaboratively administrate empowered markets via plug-and-play maintain networks. 
                    Dynamically usable procrastinate B2B users after installed base benefits. Dramatically 
                    maintain visualize customer directed convergence without revolutionary ROI.
                </p>
            </div>
            <button className="border border-[#E95A0C] h-10 w-40 rounded-md ml-[53%] mt-9 font-semibold">
                <Link href="">Book a Consultant</Link>
             </button>
        </div>
    );
};

export default Funds;
