import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const News = () => {
  useEffect(() => {
    // GSAP animation for cards
    gsap.fromTo(
      '.news-card', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3, // Stagger the animations
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className='bg-white flex flex-col max-w-full mt-28 ml-12 text-4xl'>
      <h2 className='text-[#001B2E] font-thin'>
        The <span className='font-bold'>latest news</span> and our
      </h2>
      <h2 className='text-[#E95A0C] font-bold'>portfolio companies</h2>

      <hr className="border-t-4 border-[#2D3C65] w-[12%] mt-4" />

      <p className='text-base mt-6 text-[#3D3D3D]'>
        Office ipsum you must be muted. Conversation banner gave dive investigation chime usability<br />
        whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation<br /> unlock shaped.
        Ideal deck support attached waste highlights game synchronise.
      </p>

      {/* Cards container */}
      <div className="flex flex-wrap gap-6 mt-12 justify-center items-center">
        {/* Card 1 */}
        <div className='news-card max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white relative'>
          <img src='/news 1.png' alt='card' width={500} height={300} className='w-full h-48 object-cover' />

          <h2 className='text-xl font-semibold mt-4'>MEFIC Saudi Riyal Murhabah Fund for the period ending on 2023-12-31</h2>

          <p className='text-sm mt-4 text-[#3D3D3D]'>
            Collaboratively administrate turnkey channels whereas virtual
            e-tailers. Objectively seize scalable metrics whereas proactive e-services.
            Seamlessly empower growth.
          </p>

          <div className='bottom-8 right-4 ml-[75%]'>
            <Link href="#" className="text-[#E95A0C] font-bold text-sm mt-6 mb-4">
              Learn More...
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className='news-card max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white relative'>
          <img src='/news 2.png' alt='card' width={500} height={300} className='w-full h-48 object-cover' />

          <h2 className='text-xl font-semibold mt-4'>MEFIC signs a MOU for 300 rooms with Boudl Hotels and Resorts Group</h2>

          <p className='text-sm mt-4 text-[#3D3D3D]'>
            Collaboratively administrate turnkey channels whereas virtual
            e-tailers. Objectively seize scalable metrics whereas proactive e-services.
            Seamlessly empower growth.
          </p>

          <div className='bottom-8 right-4 ml-[75%]'>
            <Link href="#" className="text-[#E95A0C] font-bold text-sm mt-6 mb-4">
              Learn More...
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className='news-card max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white relative'>
          <img src='/news 3.png' alt='card' width={500} height={300} className='w-full h-48 object-cover' />

          <h2 className='text-xl font-semibold mt-4'>Partnership to establish the first Saudi investment fund to finance film</h2>

          <p className='text-sm mt-4 text-[#3D3D3D]'>
            Collaboratively administrate turnkey channels whereas virtual
            e-tailers. Objectively seize scalable metrics whereas proactive e-services.
            Seamlessly empower growth.
          </p>

          <div className='bottom-8 right-4 ml-[75%]'>
            <Link href="#" className="text-[#E95A0C] font-bold text-sm mt-6 mb-4">
              Learn More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
