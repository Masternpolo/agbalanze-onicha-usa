import Orimili from '../assets/Orimili.jpg'
import Nnayelugo from '../assets/Nnanyelugo Anthony Okey Machie.jpg'
import Ugochukwutubelu from '../assets/Ugochukwutubelu_pub_sec.jpg'
import Ojinnaka from '../assets/Ojinnaka_pub_sec.jpg'
import Nnayelugo_emma from '../assets/Nnayelugo_emma_bot.jpg'
import Chugbo from '../assets/Chugbo.jpg'



const excos = [
  { name: 'Orumili Anthony O Kwentoh', img: Orimili, role: 'President', text: 'Agbalanze USA Cultural Group' },
  { name: 'Ugochukwutubelu Oguejiofor Okafor', img: Ugochukwutubelu, role: 'Secretary', text: 'Agbalanze USA Cultural Group' },
  { name: 'Nnanyelugo Anthony Okey Machie', img: Nnayelugo, role: 'Fin.Sec', text: 'Agbalanze USA Cultural Group' },
  { name: 'Ojinnaka Anthony Ejoh', img: Ojinnaka, role: 'Publicity Secretary', text: 'Agbalanze USA Cultural Group' },
  { name: 'Akunwata Vincent Chugbo', img: Chugbo, role: 'Treasurer', text: 'Agbalanze USA Cultural Group' },
  { name: 'Nnanyelugo Emma Nsonwu', img: Nnayelugo_emma, role: 'Board of Directors', text: 'Agbalanze USA Cultural Group' },


]


function Card() {
  return (
    <>
      <section className=" bg-primary pt-6 pb-12">
        <div className="px-8 md:px-10 lg:px-16 xl:px-20 flex gap-3 text-white pt-2">
          <p className=''>EXCOS </p>
          <hr className='container bg-orange-400 w-24 h-0.5 mt-3' />
        </div>
        <h2 className='px-8 md:px-10 lg:px-16 xl:px-20 text-white text-3xl pb-8'>MEET THE EXECUTIVES</h2>

        <div className="px-8 md:px-10 lg:px-16 xl:px-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {excos.map((exco, index) => (
            <div className=" card w-64 lg:w-88 h-80 border-2 shadow-xl bg-white mx-auto md:mx-0" key={index}>
              <figure className={`${index===1 ? 'px-4 pt-12' : index===3 ? 'px-4 pt-32' : index===4 ? 'px-4 pt-32' : 'px-4 pt-16'} `}>
                <img
                  src={exco.img}
                  alt={exco.title}
                  className={`rounded-xl`} />
              </figure>
              <div className="items-center text-center">
              <h3 className="text-black card-title px-5">{exco.name}</h3>
              <h4 className='text-black font-bold pb-2'>{exco.role}</h4>

              </div>
            </div>
          ))}
        </div>
      </section>


    </>
  )
}

export default Card