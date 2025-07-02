import ReactPaginate from "react-paginate"; // for pagination
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; // for customizing icons
import { useEffect, useState } from "react"; // useState for storing data and useEffect for changing data on click 
import "../../public/styles.css"; // stylesheet


const names = [
  "Ezenwa Abadom Oseloka",
  "Akunne Abadom . E. Onyeka",
  "Ozodinobi Abadom Emmanuel",
  "Chinyelugo Abadom Ernest",
  "Akunne Dr .V. Abadom",
  "Nnanyelugo Dr .G. Abadom",
  "Kpajie Abadom Anthony",
  "Ezennia Abutu Nnamdi",
  "Chief Ojogwu Eze Abutu John",
  "Amulunamma Achike Emeka",
  "Nwakaibie Aduba .B",
  "Ojinnaka Aduba Donald",
  "Nwachi Agbakoba Emmanuel",
  "Nwakaibie Akpom Larry",
  "Chief Odogwu Eze Akpom Okey",
  "Iba Aku Akpom Brendon",
  "Nwa Enyi Akpom Chuka",
  "Akunne Akpom Nnamdi",
  "Ozomma Akpom Uche",
  "Onwa-Ugonabo Amene Buchi",
  "Nnabuenyi Analo Anthony",
  "Chinweozo Anionwu Azubuike",
  "Ozomma Anwah Chike",
  "Akunne Anwah Henry",
  "Akunwata Dr. Anwah Joe",
  "Ononenyi Anwah Oseka",
  "Onwa Anyakwo Joe Bundus",
  "Ononenyi Anyakwo Jide",
  "Amulunamma Anyakwo Mike",
  "Ozomma Anyakwo Victor",
  "Amulunamma Areh Olisa",
  "Akunne Bosah Okey",
  "Akunne Chugbo Frank",
  "Nwaliego Chugbo George",
  "Akunwata Chugbo Vincent",
  "Akunwata Chukwuma Ogue",
  "Akunne-Ugonabo Chukwuma Ernest",
  "Ezennia Chukwuma .V",
  "Orimili-Ugonabo Chukwurah Olisa",
  "Nnanyelugo Chukwurah Henry",
  "Onwa Chukwurah Kenneth",
  "Akunnia Chukwurah Odi",
  "Ojinnaka Dr. Ebo Bosah",
  "Chief Agba Oriogu Dr. Ebo Jide",
  "Amulunamma Ebo Onyii",
  "Chinyelugo-Ugonabo Edeogu Izu",
  "Ezennia Edeogu Ony",
  "Nnabuenyi Egbunike Chris",
  "Onwa Dr. Egbunike Chudi",
  "Ozomma Dr. Egbuniwe Osie",
  "Ezennia Egwuatu Bria",
  "Akunne Egwuatu Nna",
  "Akunwata Ejogo Edward",
  "Ojinnaka Ejoh Anthony",
  "Akunne Ejoh Emmanuel",
  "Akulueuno Emeagwali Ikem",
  "Chief Oboli Boja Emengo Ben",
  "Akunwata Emengo Anthony",
  "Nnabuenyi -Ugonabo Emodi Victor",
  "Odinigwe Enweonwu Uche",
  "Okutalukwe Enweonwu Sunny",
  "Okunwa -Ugonabo Enwezor Peter",
  "Ochili Enwezor Franky",
  "Odinigwe Enwezor Chuchu",
  "Nnanyelugo Prof. Enweonwu Cyril",
  "Nnanyelugo Erokwu Anthony",
  "Akunne Ibegbu Cecil",
  "Akukalia Ibegbu Ikenna",
  "Akukalia -Ugonabo Ibekwe Moore",
  "Ononenyi Ibekwe MO JR",
  "Nnanyelugo Ibekwe Bromoja",
  "Akunwafo Dr. Ikemma .W",
  "Onwa Ikobi Uche",
  "Chinyelugo Ikwueme .O",
  "Orimili Kwentoh Anthony",
  "Kpajie Kwentoh Nnaemeka",
  "Chinweozo Kwentoh Sly",
  "Akunne Kwentoh Victor",
  "Nnanyelugo Machie Anthony",
  "Kpajie Mbanefo Patrick",
  "Akunne Melie Kenneth",
  "Igwelionwa Menyua Bosah",
  "Amalunweze Morah Olisa",
  "Ozomma Dr. Morah .T",
  "Nnanyelugo Morah Quinc",
  "Chief Ojiba Inwegwe Morah Ubaka",
  "Nnanyelugo Nsonwu Emmanuel",
  "Nwakaibie Nwabuzo Emmanuel",
  "Onwa Nwata .P",
  "Akunnia–Ugonabo Nwokedi George",
  "Ononenyi Nwokedi .G. JR",
  "Nweze Nwora Anthony",
  "Ezennia Nwosisi Onochie .P",
  "Akunne Nzegwu Onyechi",
  "Chinyelugo Prof. Nzegwu Ifeanyi",
  "Kpajie Obanye Murray",
  "Akunwafor Obi Okechukwu",
  "Igwelionwa Obianwu Chudi",
  "Kpajie-Ugonabo Dr. Obianwu Chike",
  "Ononenyi Obianwu Nnamdi",
  "Ezenwanne Obinwa Emenjo",
  "Chinyelugo Obinwa .I",
  "Ozomma Obodoechina Emeka",
  "Igwelionwa Oburota Sam",
  "Kpajie Ochei Victor",
  "Akunne Odiari Chiedu",
  "Chinyelugo-Ugonabo Odiari Alex",
  "Onwa-Ugonabo Odili Bosah",
  "Ononenyi Odita .B",
  "Ezennia Ofili Augustine",
  "Akunne Ogbolu .R",
  "Nnabuenyi-Ugonabo Ogbuli Anthony",
  "Ojinnaka Ogbuli Chris",
  "Ononenyi Ogbuli Lawrence",
  "Ozomma Ogbuli Ofoka .C",
  "Akunwata Ogbuli Robert",
  "Ugochukwutubelu Dr. Okafor Oguejiofor",
  "Onwa Prof. Okala Chiedu",
  "Kpajiego Okani Francis",
  "Ezennia Okani Oseloka",
  "Ezenwa Okolo Nnamdi",
  "Ogbu Okosi Ikem",
  "Chinyelugo Okosi Mike",
  "Nweze Okwusogu Isaac",
  "Onwa Olieh .AL",
  "Ozodinaobi Oniah Emeka",
  "Kpajie Onochie .A",
  "Nwachi-Ugonabo Onochie Chris",
  "Akunne Onochie Ikechukwu",
  "Nnabuenyi Onochie George",
  "Chinyelugo-Ugonabo Onochie Henry",
  "Ojinnaka-Ugonabo Onochie Uchenna .S",
  "Akukalia Dr. Onuorah Arthur",
  "Nnabuenyi Onuorah Theo",
  "Nnayelugo Onuorah George",
  "Ezennia Onwuazo Joe",
  "Ozomma Onwuli Orakwue",
  "Kpajie Dr. Onwuta Nnaemeka",
  "Kpajie Onyechi Nduka",
  "Onwa Onyechi Onyekwelu",
  "Onwa Onyejekwe John",
  "Ezennia Onyejekwe Law",
  "Nwakaibie Onyejekwe Francis",
  "Nnabuenyi Osili VOP",
  "Chinyelugo Osandu Chiejina",
  "Nnanyelugo Ozobia Akosa",
  "Ozomma Ozobia Francis",
  "Chinyelugo Ozoh Emeka",
  "Nweze-Ugonabo Ubaike Austine",
  "Ezenwa Ubaike Eddy",
  "Chinweozo Ubaike . J",
  "Onwa-Ugonabo Dr. Ubaike Joe",
  "Ozomma Udoji Emmanuel",
  "Ezennia Umunna Azubike",
  "Nnanyelugo-Ugonabo  Dr. Uyanne John",
  "Nnabuenyi Uyanne Peter .C",
  "Akunnia Uyanwa Obiora .F",
  "Ozodinobi Anwah",
  "Onwa Okechukwu Chuks",
  "Ononenyi Okosi Edward",
]

const membersObj = []

names.map((name, index)=>{
  membersObj.push({id:`${index +1}`, name:`${name}`})
})


function Members() {

  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 20

  useEffect(() => {
    setFilterData(
      membersObj.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [page]);

  return (
    <>
      <div className="bg-white px-8 md:px-12 lg:px-16 xl:px-20">
        <h2 className="text-center my-6 font-bold text-2xl">MEMBERS OF AGBALANZE ONITSHA USA CULTURAL ASSOCIATION</h2>
        <table className="border-separate border-spacing-2 border-slate-400 md:w-5/6 mx-auto ">
          <tr className="border-2 w-full">
            <th className="border border-slate-300 ">No</th>
            <th className="border border-slate-300 text-left pl-8">Names</th>
          </tr>

          {filterData && filterData.map((item, index) => 
          <tr key={index} className="p-4 border-2 border-spacing-2">
            <td className="border border-slate-300 text-center ">{item.id}</td>
            <td className="border border-slate-300 pl-8">{item.name}</td>
          </tr>)}
        </table>
       

        <ReactPaginate
          containerClassName={"flex flex-row items-center justify-center "}
          pageClassName={"page-item"}
          activeClassName={"active"}
          onPageChange={(event) => setPage(event.selected)}
          pageCount={Math.ceil(names.length / n)}
          breakLabel="..."
          previousLabel={
            <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
              <AiFillLeftCircle />
            </IconContext.Provider>
          }
          nextLabel={
            <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
              <AiFillRightCircle />
            </IconContext.Provider>
          }
        />
      </div>




    </>
  )
}

export default Members