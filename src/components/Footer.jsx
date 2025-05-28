import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";


const icons = [
  <LuFacebook   className="h-6 w-6" />, <FaInstagram  className="h-6 w-6" />,<FaWhatsapp  className="h-6 w-6"/>
]

function Footer() {
  return (
    <>
      <footer className="bg-primary py-8 px-8 md:px-10 lg:px-16 xl:px-20">
        <div className="social cursor-pointer">
          <p className="text-white text-center my-2">Join our socials</p>
          <div className="flex justify-center text-white cursor-pointer gap-8">
           {icons.map((ico,index )=>(
            <a className="hover:text-orange-400" href="#" key={index}>{ico}</a>
          ))}
          </div>

        </div>
        <hr className="my-6m w-60 mx-auto my-4" />
        <div className="text-center text-xs px-8 md:px-10 lg:px-16 xl:px-20 ">
          <div className="icons">
            <img src="" alt="" />
          </div>
          <p className="text-white">
            &copy; Agbalanze Onitsha USA 2024. All Rights Reserved<br />

          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer