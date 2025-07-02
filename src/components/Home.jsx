import Carousel from './Carousel'
import Card from './Card'
import Section from './Section'
import Agbogidi from '../assets/Agbogidi.jpg'
import Pres from '../assets/Ozomma Ogbogu Okosi.jpg'
import Onitsha from '../assets/Onitshar.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function Home() {
  return (
    <div>
      <Carousel />
      <section className='text-black'>
        <div className="bg-white grid grid-cols-1 md:grid-cols-2">
          <div className="px-8 md:px-10 lg:px-16 xl:px-20 relative">
            <div className="py-12 md:py-1 xl:pt-">
              <hr className='container bg-orange-400 w-24 h-0.5 md:h-1 md:mt-3' />
              <h2 className=' text-4xl md:text-4xl lg:text-6xl font-bold md:mb-1 lg:mb-4 xl:text-7xl'>His Majesty</h2>
              <h3 className='text-4xl font-bold mb-2 xl:text-5xl'>IGWE NNAEMEKA ALFRED ACHEBE,</h3>
              <p className='text-2xl font-bold xl:text-4xl'>Agbogidi</p>
              <p className='text-2xl font-bold'>CFR, mni,<br />Obi of Onitsha</p>
            </div>
            <img src={Onitsha} alt="Agbalanze" className='absolute top-16 left-16 mt-2 m-auto opacity-10 pb-12 w-48 md:absolute md:z-0 md:top-3 md:right-20 md:w-60 lg:top-10 lg:right-36 xl:w-80 xl:top-20 xl:right-60' />
          </div>
          <div className="w-full">
            <img className="w-full" src={Agbogidi} alt="Onitsha" />
          </div>
        </div>

        <div className="px-8 bg-white md:px-10 md:gap-6 lg:px-16 xl:px-20 grid gap-4 grid-cols-1 md:grid-cols-2 mt-16">

          <div className="mb-8">
            <img className='h-80 rounded-xl' src={Pres} alt="" />
          </div>
          <div className="text-black">
            <hr className='container bg-orange-400 w-24 h-0.5 md:h-1 mt-3' />

            <h2 className=' text-3xl font-bold md:text-4xl lg:text0-5xl my-2 ' >The President General, Agbalanze Onitsha Cultural Association</h2>
            <h3 className='text-2xl md:text-4xl pb-4 my-6'>Ozomma Ogbogu Okosi</h3>
          </div>
        </div>
      </section>
      <Card />
      <Section />
    </div>
  )
}

export default Home