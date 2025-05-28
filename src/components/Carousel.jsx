
function Carousel() {
  return (
    <>
      <div className="text-center carousel w-full bg-black lg:bg-[url('/Ugo.png')] bg-left-top bg-no-repeat min-h-96 lg:min-h-96 ">
        <div className="px-8 md:px-10 lg:px-16 xl:px-20 mx-auto text-center text-white">
          <h2 className="text-4xl  pt-8 font-bold lg:text-5xl leading-12">WELCOME TO AGBALANZE ONICHA USA <br /> <span className="text-orange-400"> CULTURAL GROUP</span></h2>
          <p className="p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum veniam ducimus distinctio possimus vel iure tempore esse. Rerum perspiciatis sapiente sint eaque itaque dolor, provident beatae odit error officia.
          </p>
          <button className="btn mb-8 bg-orange-400 h-12 w-28 rounded-2xl border-2 border-white hover:bg-black hover:text-white hover:border-orange-400">SEE MORE</button>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2">
      </div>
    </>
  )
}

export default Carousel