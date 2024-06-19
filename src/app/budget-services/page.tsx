import { PortalNavBar } from "@/components/Navbar"
import LabelInput, { Checkbox } from "@/components/input"
import Link from "next/link"
import Image from "next/image"
import Select from "@/components/select"
import { ArrowPathIcon, CheckCircleIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid"
import partiallyPay from "@/ui/icons/partially-paid.svg"
import editPay from "@/ui/icons/edit-paid.svg"
import totallyPaid from "@/ui/icons/totally-paid.svg"
import balance from "@/ui/icons/balance.svg"
import edit from "@/ui/icons/edit.svg"
import reload from "@/ui/icons/reolad.svg"
import roundTrip from "@/ui/icons/round-trip.svg"
import rowSettings from "@/ui/icons/vertical-dots.svg"

import { Ruda } from "next/font/google"

const ruda = Ruda({ subsets: ["latin"] });


function Budget () {
    return (
        <>
            <PortalNavBar/>
            <div className="w-full px-10">
                <div className="flex flex-row items-center justify-between my-10">
                    <h1 className="font-bold text-[36px]">Presupuestos y servicios</h1>
                    <div className="flex flex-row ">
                        <Link href="#" className="flex text-orange-500 text-[18px] font-semibold hover:text-orange-400 mx-8 my-auto">
                        <span >
                            <MagnifyingGlassIcon className="size-6 mx-2" />
                        </span>
                        Buscar
                        </Link>
                        <Select>
                            <option value="">Viajes exclusivos</option>
                            <option value="">Otros</option>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div >
                        <ul className="flex font-bold">
                            <li className="mr-5 hover:text-gray-500 duration-300 cursor-pointer">
                                <input type="checkbox" className="accent-orange-500 h-5 w-5 ml-2 flex"/>
                            </li>
                            <li className="mr-5 hover:text-gray-500 duration-300 cursor-pointer">
                                <Image src={reload} alt="partial-pay" className="mr-2" />
                            </li>
                            <li className="mr-5 hover:text-gray-500 duration-300 cursor-pointer">
                                <p>Ver todos</p>
                            </li>
                            <li className="mr-5 hover:text-gray-500 duration-300 cursor-pointer">
                                <p>Exportar todos</p>
                            </li>
                            <li className="mr-5 hover:text-gray-500 duration-300 cursor-pointer">
                                <p>Imprimir todos</p>
                            </li>
                            <li className="mr-5">
                                <p>|</p>
                            </li>
                            <li className="mr-5 flex hover:text-gray-500 duration-300 cursor-pointer">
                                <Image src={partiallyPay} alt="partial-pay" className="mr-2"/>
                                Ha Señado
                            </li>
                            <li className="mr-5 flex hover:text-gray-500 duration-300 cursor-pointer">
                                <Image src={editPay} alt="partial-pay" className="mr-2"/>
                                Editar Seña
                            </li>
                            <li className="mr-5 flex hover:text-gray-500 duration-300 cursor-pointer">
                                <Image src={totallyPaid} alt="partial-pay" className="mr-2"/>
                                Ha Pagado
                            </li>
                            <li className="mr-5 flex hover:text-gray-500 duration-300 cursor-pointer">
                                <Image src={balance} alt="partial-pay" className="mr-2"/>
                                Saldo Contado
                            </li>
                            <li className="mr-5 flex hover:text-gray-500 duration-300 cursor-pointer">
                                <Image src={edit} alt="partial-pay" className="mr-2"/>
                                Editar
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button 
                            className="flex items-center bg-orange-500 text-white px-4 py-3 rounded-md font-bold
                            hover:bg-orange-400 duration-300 focus:ring ring-gray-200">
                            <PlusIcon className="size-6 mr-2" />
                            Crear Servicio
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <table className={`w-full my-10 shadow-lg ${ruda.className}`}>
                        <thead>
                            <tr className="bg-blue-500 text-white text-[16px] font-thin hover:opacity-90 duration-300">
                                <th className="py-2 border-r-2 border-gray-200"></th>
                                <th className="py-2 border-r-2 border-gray-200">SERVICIO</th>
                                <th className="py-2 border-r-2 border-gray-200">ESTADO</th>
                                <th className="py-2 border-r-2 border-gray-200">VEND.</th>
                                <th className="py-2 border-r-2 border-gray-200">PX</th>
                                <th className="py-2 border-r-2 border-gray-200">TRAMO</th>
                                <th className="py-2 border-r-2 border-gray-200">ID VIAJE</th>
                                <th className="py-2 border-r-2 border-gray-200">INICIO</th>
                                <th className="py-2 border-r-2 border-gray-200">ORIGEN / DESTINO</th>
                                <th className="py-2 border-r-2 border-gray-200">NOMBRE</th>
                                <th className="py-2 border-r-2 border-gray-200">CUENTA</th>
                                <th className="py-2 border-r-2 border-gray-200">ACREDITADO</th>
                                <th className="py-2 border-r-2 border-gray-200">TOTAL</th>
                                <th className="py-2 border-r-2 border-gray-200"></th>
                            </tr>
                        </thead>
                        <tbody className="border-r-2 border-b-2 border-gray-200 p-2">
                            <tr className="bg-inherit text-black text-[16px] font-thin hover:opacity-90 duration-300">
                                <td className="border-r-2 border-b-2 border-gray-200 p-2" rowSpan={2}>
                                    <input type="checkbox" className="accent-orange-500 h-5 w-5"/>
                                </td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2 " rowSpan={2}>
                                    <p className="underline">VE29059</p>
                                    <div className="flex justify-center">
                                        <Image src={roundTrip} alt="round-trip" />
                                    </div>
                                </td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2" rowSpan={2}>Seña 60%</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2" rowSpan={2}>ME</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2" rowSpan={2}>56</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2">IDA</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2">-</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2">23/12/24</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2 flex justify-between px-2">
                                    <p className="underline">Belgrano - Mar del Plata</p>
                                    <p className="bg-yellow-200 px-1">5 par</p>
                                </td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2" rowSpan={2}>Nombre Big 1</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2" rowSpan={2}>Cta Cte 1</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2 text-gray-400" rowSpan={2}>$150.000</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2" rowSpan={2}>$250.000</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2" rowSpan={2}>
                                    <Image src={rowSettings} alt="partial-pay"/>
                                </td>
                            </tr>
                            <tr className="bg-inherit text-black text-[16px] font-thin hover:opacity-90 duration-300">
                                <td className="border-r-2 border-b-2 border-gray-200 p-2">VUELTA</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2">-</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2">30/12/24</td>
                                <td className="border-r-2 border-b-2 border-gray-200 p-2 flex justify-between px-2">
                                <p className="underline">Mar del Plata - Belgrano</p>
                                <p className="bg-yellow-200 px-1">5 par</p>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot className="bg-gray-300 border border-gray-200">
                            <tr>
                                <td colSpan={14} className="px-2 border border-gray-200">Actualizado al 17/06/2024</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Budget