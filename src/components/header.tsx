import Link from "next/link";
import Image from "next/image";
import logo from "@/ui/img/Logo.png";
import facebook from "@/ui/img/FACEBOOK.png";
import twitter from "@/ui/img/TWITTER.png";
import skype from "@/ui/img/SKYPE.png";

export default function HeaderAV() {
  return (
    <>
      <Header />
      <NavBar />
    </>
  );
}

export function Header() {
  return (
    <div className="flex items-center bg-black h-[40px] text-[14px] font-medium text-white">
      <div className="flex flex-row w-full justify-between mx-10 my-5">
        <div className="flex ">
          <p>CALL CENTER 4702-6533 / 4701-6574</p>
        </div>
        <div className="flex justify-between">
          <Link href="#">
            <Image alt="Logo Facebook" src={facebook} className="mr-2" />
          </Link>
          <Link href="#">
            <Image alt="Logo Twitter" src={twitter} className="mr-2" />
          </Link>
          <Link href="#">
            <Image alt="Logo skype" src={skype} className="mr-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function NavBar() {
  return (
    <div className="bg-white text-black font-semibold text-[16px]">
      <nav>
        <ul className="flex flex-row p-6 items-center justify-between ">
          <li className=" px-3">
            <Image src={logo} alt="logo" className="flex flex-row" />
          </li>
          <li>
            <Link href="#" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li className=" px-3">
            <Link href="#" className="hover:text-orange-500">
              Pasajes a la costa
            </Link>
          </li>
          <li className=" px-3">
            <Link href="#" className="hover:text-orange-500">
              Viajes Exclusivos
            </Link>
          </li>
          <li className=" px-3">
            <Link href="#" className="hover:text-orange-500">
              Recitales
            </Link>
          </li>
          <li className=" px-3">
            <Link href="#" className="hover:text-orange-500">
              Flota
            </Link>
          </li>
          <li className=" px-3">
            <Link href="#" className="hover:text-orange-500">
              Contacto
            </Link>
          </li>
          <li className=" px-3">
            <p>|</p>
          </li>
          <li className=" px-3">
            <button className="px-4 font-semibold">Iniciar sesión</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function OptionHeader({ departure, destiny, passengers, luggage }: any) {
  return (
    <>
      <div
        className="booking_header 
          flex flex-row py-4 items-center justify-between bg-white
          text-[14px] font-bold text-[#10004f] border-t-2 border-gray-300"
      >
        <div className="px-5 text-center border-r-2 border-gray-300 w-full ">
          {departure.address.split(",")[0]} - {destiny.address.split(",")[0]}
        </div>
        <div className="px-5 text-center border-r-2 border-gray-300 w-full ">
          {departure.date} / {destiny.date}
        </div>
        <div className="px-5 text-center border-r-2 border-gray-300 w-full ">
          {passengers.adult} Adultos / {passengers.baby} Bebes /{" "}
          {passengers.pets.small + passengers.pets.big} Mascotas
        </div>
        <div className="px-5 text-center border-r-2 border-gray-300 w-full ">
          {luggage.bag23} Maletas
        </div>
      </div>
    </>
  );
}
