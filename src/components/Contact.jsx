import { MdMailOutline } from "react-icons/md";

import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const data = [
  { text: 'Recipient: AGBALANZE ONITSHA, USA' },
  { text: 'Bank: Bank of America' },
  { text: ' Zelle: via email: agbalanzeonitshausa3@gmail.com' },
  { text: 'Memo: 20XX Annual Dues or Donations or Pledges' }
]

const data2 = [
  { text: 'Recipient: AGBALANZE ONITSHA, USA' },
  { text: 'Bank: Bank of America' },
  { text: 'Checking Account #: 385021626816' },
  { text: 'ACH Routing #: 011900254' }
]

function Contact() {
  return (
    <>
      <section className="px-8 md:px-10 lg:px-16 xl:px-20 ">
        <div className="mb-4">
          <div className="flex gap-3 pt-8">
            <p className='text-gray-500'>CONTACT</p>
            <hr className='bg-orange-400 w-24 h-0.5 mt-3' />
          </div>
          <h2 className=' text-3xl pb-8 font-semibold md:font-bold '>CONTACT US</h2>
        </div>
        <div className=" grid grid-col-1 md:grid-cols-2 gap-12 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex flex-col gap-12">
            <div className="group flex gap-6">
              <div className="icon h-14 w-14 rounded-full bg-orange-100">
                <IoLocationOutline className='w-11 h-9 m-auto mt-2.5 text-orange-400' />
              </div>
              <div className="flex flex-col">
                <h2 className='text-xl font-bold'>Address</h2>
                <p>Agbalanze Onicha USA</p>
              </div>
            </div>
            <div className="group flex gap-6">
              <div className="icon h-14 w-14 rounded-full bg-orange-100">
                <IoCallOutline className='w-11 h-9 m-auto mt-2.5 text-orange-400' />
              </div>
              <div className="flex flex-col">
                <h2 className='text-xl font-bold'>Call Us</h2>
                <p>Agbalanze Onicha USA</p>
              </div>
            </div>
            <div className="group flex gap-6">
              <div className="icon h-14 w-14 rounded-full bg-orange-100">
                <MdMailOutline className='w-11 h-9 m-auto mt-2.5 text-orange-400' />
              </div>
              <div className="flex flex-col">
                <h2 className='text-xl font-bold'>Email Us</h2>
                <p>Agbalanzeonitshausa1@gmail.com</p>
              </div>
            </div>
          </div>

          <form action="">
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 flex-col lg:flex-row">
                <input type="text" name='name' id='name' placeholder='Your Name' className='w-full md:w-full lg:w-96 border outline-1 outline-orange-400 h-10 p-2 px-4' />
                <input type="email" name='email' id='email' placeholder='Your Email' className='w-full md:w-full lg:w-96 border outline-1 outline-orange-400 h-10 p-2 px-4' />
              </div>
              {/* <div className="flex gap-4">
                <input type="text" name='subject' id='subject' placeholder='Subject' className=' border outline-1 outline-orange-400 h-10 p-2 px-4 w-full md:w-full lg:w-full' />
              </div> */}
              <div className="">
                <textarea name="message" cols={100} id="message" className='w-full md:w-full lg:w-full border outline-1 outline-orange-400 h-32 p-2 px-4' placeholder='Message'></textarea>
              </div>
            </div>
            <p></p>
            <div className="">


            </div>
            <button className="btn bg-orange-400 hover:bg-primary my-4 text-center text-white w-20 mx-auto md:w-28 lg:w-40 lg:mx-auto">Submit</button>
          </form>
        </div>
        <div className="my-6 py-2">
          <h2 className='text-3xl pb-4 font-semibold md:font-bold '>Annual Dues Remittance</h2>
          <p className='my-2 pb-2'>$100.00 annual dues is due for payment to "Agbalanze Onitsha, USA" before the end of each year.</p>
          <h3 className='text-2xl pb-4 font-semibold md:font-bold'>Remittance Details for ZELLE</h3>
          <ul className='list-disc mb-2 px-8 md:px-10 lg:px-16 xl:px-20'>
            {data.map((item, index) => (
              <li key={index} className='py-2 '>{item.text}</li>
            ))}
          </ul>
          <h3 className='text-2xl pb-4 font-semibold md:font-bold'>Direct Deposits</h3>
          <ul className='list-disc mb-2 px-8 md:px-10 lg:px-16 xl:px-20'>
            {data.map((item, index) => (
              <li key={index} className='py-2 '>{item.text}</li>
            ))}
          </ul>
          <h3 className='text-2xl pb-4 font-semibold md:font-bold'>Important Note</h3>
          <p>Please remember to include in the "memo" the purpose of your payment. Text your payment slip to the Financial Secretary</p>
        </div>
      </section>
    </>
  )
}

export default Contact