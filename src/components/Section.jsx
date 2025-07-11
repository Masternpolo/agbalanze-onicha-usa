import Card from './Card'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




function Section() {

  useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);

  return (
    <>
      <section className='bg-white '>
        <div className="px-8 md:px-10 lg:px-16 xl:px-20">
          <div className="flex gap-3 pt-8">
            <p className='text-gray-500'>ACTIVITIES </p>
            <hr className='bg-orange-300 w-24 h-0.5 mt-3' />
          </div>
          <h2 className='text-orange-300 text-3xl pb-8'>PAST AUSACG EVENTS</h2>
          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2  lg:grid-cols-3 lg:gap-4 xl:gap-4" data-aos="fade-up">
            <div className="card shadow-2xl w-72 p-6">
              <h1 className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione molestias dolore maiores! Eius magni, laudantium ad illo voluptas tenetur dicta quaerat eum, rem, optio assumenda cum unde expedita odio sint?</h1>
            </div>
            <div className="card shadow-2xl w-72 p-6">
              <h1 className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione molestias dolore maiores! Eius magni, laudantium ad illo voluptas tenetur dicta quaerat eum, rem, optio assumenda cum unde expedita odio sint?</h1>
            </div>
            <div className="card shadow-2xl w-72 p-6">
              <h1 className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione molestias dolore maiores! Eius magni, laudantium ad illo voluptas tenetur dicta quaerat eum, rem, optio assumenda cum unde expedita odio sint?</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section