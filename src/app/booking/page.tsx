import Image from "next/image";
import Link from "next/link";
import logo from "@/app/booking/logo.png"
import mercedes from "@/app/booking/mercedes-sprinter.jpg"

export default function Booking() {
  return (
    <div className="flex min-h-screen flex-col justify-between px-10 bg-gray-300">
      <header>
        <div className="bg-black text-sm py-2 px-8">
            <div className="flex">
                <p>CALL CENTER 4702-6533 / 4701-6574</p>
                <div className="flex items-center justify-end">
                    <svg className="h-4 w-4 text-white mx-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    <svg className="h-4 w-4 text-white mx-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    <svg className="h-4 w-4 text-white mx-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    <svg className="h-4 w-4 text-white mx-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </div>

            </div>
        </div>
        
        
        <div className="bg-white text-black font-bold text-sm">
          <nav>
            <ul className="flex flex-row p-5 items-center justify-between ">
              <li className=" px-3">
                <Image src={logo} alt="logo" className="flex flex-row"/>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li className=" px-3">
                <a href="#" className="hover:text-orange-500">
                  Pasajes a la costa
                </a>
              </li>
              <li className=" px-3">
                <a href="#" className="hover:text-orange-500">
                  Viajes Exlucisvos
                </a>
              </li>
              <li className=" px-3">
                <a href="#" className="hover:text-orange-500">
                  Recitales
                </a>
              </li>
              <li className=" px-3">
                <a href="#" className="hover:text-orange-500">
                  Flota
                </a>
              </li>
              <li className=" px-3">
                <a href="#" className="hover:text-orange-500">
                  Contacto
                </a>
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
      </header>
      <main className="flex-grow bg-gray-200 bg-image w-full" >
        {/* <Image src={mercedes} alt="logo" className=" w-full"/> */}
        <div className="px-8 pt-12">
          <h2 className="text-3xl font-bold">Viajes Exclusivos</h2>
          <p className="pt-4">
            Días de campo, servicios aeroportuarios, viajes
            <br />
            ejecutivos, etc. Servicios de traslados a pedido con
            <br />
            vehìculos y choferes dedicados y exclusivos para cada
            <br />
            tipo de viaje.
          </p>
        </div>
        <div className="bg-white mx-24 mt-20 rounded-md py-10 px-6 shadow-md">
          <h2 className="font-bold text-blue-950 text-xl">
            Cotiza tu viaje ahora
          </h2>
          <form action="#" className="py-8 text-sm text-gray-500 font-bold">
            <div className="py-4">
              <p>Tipo de Viaje</p>
              <span className="inline-block w-full h-0.5 bg-gray-400 mb-2"></span>
              <label htmlFor="travel_type" className="flex pt-3 text-xs">
                Tipo de traslado
              </label>
              <select
                name="travel_type"
                id="travel_type"
                className="p-2 border-gray-300 border rounded-md"
              >
                <option value="int_airport">
                  Aeroportuario - Vuelo Internacional
                </option>
              </select>
              <div className="inline px-6">
                <input type="radio" className="mx-3" />
                Ida y vuelta
                <input type="radio" className="mx-3" />
                Solo ida
              </div>
              <div className="py-6">
                <p>Disponibilidad de vehículos</p>
                <span className="inline-block w-full h-0.5 bg-gray-400 mb-2"></span>
                <div className="inline ">
                  <input type="radio" className="mr-3" />
                  Solo durante la ida/vuelta
                  <input type="radio" className="mx-3" />
                  100% del tiempo
                </div>
              </div>
            </div>
            <div>
              <p>Salida / Regreso</p>
            <span className="inline-block w-full h-0.5 bg-gray-400 mb-2"></span>
            </div>
            <div className="flex">
                <div className="w-1/2 flex flex-col pr-4 pt-3">
                    <label htmlFor="Salida">Salida</label>
                    <input type="search" name="Salida" id="" className="border rounded-md p-2"/>
                </div>
                <div className="w-1/2 flex-col flex pr-4 pt-3">
                    <label htmlFor="Destino">Destino</label>
                    <input type="search" name="Destino" id="" className="border rounded-md p-2"/>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/4 flex flex-col pr-4 pt-3">
                    <label htmlFor="initial_date">Fecha de partida</label>
                    <input type="date" name="initial_date" id="initial_date" className="border rounded-md p-2"/>
                </div>
                <div className="w-1/4 flex flex-col pr-4 pt-3">
                    <label htmlFor="initial_time">Hora de partida</label>
                    <input type="time" name="initial_time" id="initial_time" className="border rounded-md p-2"/>
                </div>
                <div className="w-1/4 flex flex-col pr-4 pt-3">
                    <label htmlFor="final_date">Fecha de regreso</label>
                    <input type="date" name="final_date" id="final_date" className="border rounded-md p-2"/>
                </div>
                <div className="w-1/4 flex flex-col pr-4 pt-3">
                    <label htmlFor="final_time">Hora de regreso</label>
                    <input type="time" name="final_time" id="final_time" className="border rounded-md p-2"/>
                </div>
            </div>
            <div className="py-6">
                <p>Pasajeros</p>
                <span className="inline-block w-full h-0.5 bg-gray-400 mb-2"></span>
            </div>
            <div>
                <select name="pax" id="pax" className="border rounded-md p-2 mr-4">
                    <option value="1">1 pasajero</option>
                    <option value="2">2 pasajeros</option>
                    <option value="3">3 pasajeros</option>
                    <option value="4">4 pasajeros</option>
                    <option value="5">5 pasajeros</option>
                    <option value="6">6 pasajeros</option>
                    <option value="7">7 pasajeros</option>
                    <option value="8">8 pasajeros</option>
                </select>
                <select name="puppies" id="puppies" className="border rounded-md p-2 mr-4">
                    <option value="0">0 mascotas</option>
                    <option value="1">1 mascota</option>
                    <option value="2">2 mascotas</option>
                    <option value="3">3 mascotas</option>
                </select>
                <select name="bags" id="bags" className="border rounded-md p-2 mr-4">
                    <option value="0">0 maletas</option>
                    <option value="1">1 maletac</option>
                    <option value="2">2 maletas</option>
                    <option value="3">3 maletas</option>
                </select>
            </div>
            <div className="flex justify-end py-4">
                <input type="button" value="Cotizar" className="border-2 border-solid border-orange-500 bg-orange-500 text-white py-3 px-6 rounded-md"/>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
