import React from 'react'

const items = [
{text:'Nurture, foster and promote the prestigious and distinguished traditions of Agbalanze Cultural Association of Onitsha and the rich and noble culture of Onitsha Kingdom in the United States'},
{text:'Educate Onitsha indigenes and non-Onitsha indigenes in the United States about the prestigious and distinguished traditions of Agbalanze Cultural Association of Onitsha and the rich and noble culture of Onitsha Kingdom'},
{text:'Promote mutual and collaborative interests of members of Agbalanze Onitsha USA'},
{text:'Provide a forum where members of Agbalanze Onitsha USA could gather and discuss issues of common interest and concern{, {socialize and enjoy the traditions of Agbalanze Onitsha and Onitsha culture'},
{text:'Provide moral support and financial benefits to members of Agbalanze Onitsha USA'},
{text:'Contribute to the economic development of Onitsha Kingdom'}
]

const processes = [
  {text:'Inyedo Mmuo or Ikpoko Mmuo'},
  {text:'Igba Okonti'},
  {text:'Igo Mmuo for the Initiate'},
  {text:'Igo Mmuo Nwunye, Okpala, na Ada'},
  {text:'Ibu Ego Ozo, and Ikpo Nze Iru'},
  {text:'Ina Obibi, includes Nze Ima Nzu'},
  {text:'Mmacha (Iwalu Ozo)'},
  {text:'Igba Ugwo Ozo, na Ikwo Aka Ozo, na Izu Afia Ozo'},
  ]

  const presidents = [
    {text:'Chinyelugo Ifeanyi Nzegwu (2007-2011)'},
    {text:'Okudilinwa Peter Enwezor (2011-2017)'},
    {text:'Nwamulunamma Onyii C. Ebo (2017-2024)'},
    {text:'Orumili Anthony O. Kwentoh (2024-present)'},
    ]
    
function About() {
  return (
    <>
      <div className="bg-white text-black px-8 md:px-10 lg:px-16 xl:px-20">
        <div className="leading-7">
          <h3 className='text-2xl font-bold py-8'>HISTORY OF AGBALANZE ONITSHA USA</h3>
          <p className='px-2'>History was made in Baltimore, Maryland on Saturday, February 3, 2007 when, with the strong blessing and endorsement of Agbalanze Onitsha, in Onitsha, the Agbalanze Onitsha, USA was officially born.</p>
          <p className='px-2'>Agbalanze members came from all over the United States for the historic and memorable inaugural meeting of the organization to be part of history. It was a day that will make Agbalanze Onitsha in particular and Onitsha in general proud.</p>
        </div>
        <div className="">
          <h3 className='text-2xl font-bold my-8'>Mission and Objectives of the Organization</h3>
          <ul className='list-disc px-8 md:px-10 lg:px-16 xl:px-20'>
           {items.map((item, index)=>(
            <li key={index} className='py-2 '>{item.text}</li>
           ))}
          </ul>
        </div>
        <div className="">
        <h3 className='text-2xl font-bold my-8'>PRESIDENTS</h3> 
        <ol className='list-decimal px-8 md:px-10 lg:px-16 xl:px-20'>
          {presidents.map((item, index)=>(
            <li key={index} className='py-2 font-semibold'>{item.text}</li>
           ))}
          </ol>
        </div>
        <div className="mt-8">
          <h3 className='text-2xl font-bold my-4'>INITIATION INTO AGBALANZE SOCIETY 1964</h3>
          <div className="">
          <h4 className='text-xl font-bold my-4'>The Processes:</h4>
          <ol className='list-decimal px-8 md:px-10 lg:px-16 xl:px-20'>
          {processes.map((item, index)=>(
            <li key={index} className='py-2 font-semibold'>{item.text}</li>
           ))}
          </ol>
          </div>

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-8">
            <div className="my-4 lg:my-8 leading-7">
              <p className='my-4'>One of the highest rungs in Onitsha traditional society ladder is attained through the acquisition of the Ozo title. Ozo is an expensive title whose premier function is to confer on its recipient the priesthood of the ancestral cult. Apart from this primary objective, Ozo elevates one from the status of commoner to that of an aristocrat, making him a member of an exclusive club – the, Agbalanze.
              </p>
              <p className='my-8'>Ozo starts off with Igo mmuo a solemn, sacred rite which gradually broadens out into mmacha, a lively secular function. To qualify for initiation, a candidate must have performed the ceremony of inyedo mmuo. The ceremony involves the consecration by the okpala, chief priest if the candidates family, of ikenga, chi, ofo, and okposi, carved emblems of ikenga ( the candidates god of fortune) chi ( his personal god, somewhat like the guardian angel of the Christian religion), ofo ( his god of righteousness), and his ancestral spirits.</p>
              <p className='my-8'>Consecrated, the carvings become the place where these spirits will repose in the candidates house. The acquisition of the ndi mmuo, as they are collectively known. Is an essential; for it is at their alter that the final ordination rites are performed.
              </p>
              <p className='my-8'>It is here, too, that the candidate will, after his ordination, make annually a sacrifice of a goat to the spirits. The candidate next causes a series of peace offerings ( igo mmuo) to make on his behalf by the senior priests of his paternal and maternal families. These offerings serve to notify the spiritual elements of his intention to be initiated and to invite their blessings. The offerings are followed by the payment of the initiation fee which runs as high as £700 (1964) This amount is shared by member of the Agbalanze Society within the extended family ( preferably his own) through which he chooses to attain membership in the society.</p>
                <p className='my-0 lg:my-8'>This feature of Ozo title taking gives membership in the Agbalanze an added attraction. For as long as men aspire after the title within the extended family lineage through which the candidate attains his ambition, there is the chance of recovering all his initiation expenses and more. Besides, it offers him a measure of security in his old age.</p>
            </div>
            <div className="my-0 lg:my-4 leading-7">
              <p className='my-8'>Usually the ordination to priesthood takes place on the day the initiation fee is paid. All the Agbalanze  in the extended family assemble at the home of the chief priest of the candidates family for the ceremony which is presided over by all  the chief priests in his extended family. </p>
              <p className='my-8'>Transferring his osisi ( staff of office) to his left hand, each chief priest takes a kola nut in his right hand and they pray simultaneously. After prayers, each breaks his kola nut and offers the candidate a piece. The remaining pieces are pooled together and distributed among all present. Next, each chief priest invites the candidate to a drink. This is followed by prayers for the members of his family, then others disperse. The Agbalanze retire with the candidate to his house where the ordination, (ikpa mmuo or isi mmanya) is conducted. Immediately the ordination is over. The novitiate, now designated an mkpalo performs his first first religious service, that of pouring a libation of corn beer to his ikenga, chi, ofo and ancestral spirits. Next, a goat is sacrificed in thanksgiving. </p>
              <p className='my-8'>When he has attained this level, a novitiate could pause for as long as is necessary for him to find the money to carry through the next and final stage. Until then he is entitled to preside at ceremonial functions within his family and extended family, but only when delegated to do so by the chief priest. Normally it is customary to allow one week between the attainment of the mkpalo stage and the next stage, the mmacha.
              </p>
              <p className='my-8'>The ozo dance, the climax of the mmacha, the social side of the initiation, generally takes place on an oye weekday. Before it, the novitiate secures the services of his relations since it involves plenty of work. He then invites every ozo title holder who is in town to dance. On the eve of the day of the dance, able bodied Agbalanze throughout the town arrive at the novitiate residence. After the have been presented with kola nuts, then a meal is served. After dinner, the candidate dressed in white attire and the Agbalanze from his extended family retire to the nze shrine where the ceremony of iwalu ozo ( acquiring ozo ) is performed.  Towards the end the candidate is rubbed all over with white chalk, a symbol of purity.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About