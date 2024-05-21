import Link from "next/link";
import Image from "next/image";
import logo from "@/ui/img/Logo.png";
import facebook from "@/ui/img/FACEBOOK.png";
import twitter from "@/ui/img/TWITTER.png";
import skype from "@/ui/img/SKYPE.png";

export default function HeaderAV() {
  return (
    <>
      <div className="flex items-center bg-black h-[40px] text-[14px] font-medium text-white">
        <div className="flex">
          <p>CALL CENTER 4702-6533 / 4701-6574</p>
          <div className="flex">
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
      <div className="bg-white text-black font-semibold text-[16px]">
        <nav>
          <ul className="flex flex-row p-6 items-center justify-between ">
            <li className=" px-3">
              <Image src={logo} alt="logo" className="flex flex-row" />
            </li>
            <li>
              <Link href="#" className="hover:text-bold">
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
                Viajes Exlucisvos
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
              <button className="border-2 border-solid border-orange-500 p-2 rounded-md">
                Iniciar sesión
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
