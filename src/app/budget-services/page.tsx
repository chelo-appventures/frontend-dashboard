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
                    <div className="flex flex-row items-center ">
                        <div className="flex">
                            <Link href="#" className="flex text-orange-500 text-[18px] font-semibold hover:text-orange-400 mx-8 my-auto">
                                <span>
                                    <MagnifyingGlassIcon className="size-6 mx-2" />
                                </span>
                                Buscar
                            </Link>
                        </div>
                        <Select className="pr-10">
                            <option value="">Viajes exclusivos</option>
                            <option value="">Otros</option>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div >
                        <ul className="flex font-bold items-center">
                            <li className="mr-5 hover:opacity-50 duration-300 cursor-pointer">
                                <input type="checkbox" className="h-5 w-5 ml-4 flex"/>
                            </li>
                            <li className="mr-5 hover:opacity-50 duration-300 cursor-pointer">
                                <Image src={reload} alt="partial-pay" className="mr-2" />
                            </li>
                            <li className="mr-5 hover:opacity-50 duration-300 cursor-pointer">
                                <p>Ver todos</p>
                            </li>
                            <li className="mr-5 hover:opacity-50 duration-300 cursor-pointer">
                                <p>Exportar todos</p>
                            </li>
                            <li className="mr-5 hover:opacity-50 duration-300 cursor-pointer">
                                <p>Imprimir todos</p>
                            </li>
                            <li className="mr-5">
                                <p>|</p>
                            </li>
                            <li className="mr-5 flex hover:opacity-50 duration-300 cursor-pointer">
                                <Image src={partiallyPay} alt="partial-pay" className="mr-2"/>
                                Ha Señado
                            </li>
                            <li className="mr-5 flex hover:opacity-50 duration-300 cursor-pointer">
                                <Image src={editPay} alt="partial-pay" className="mr-2"/>
                                Editar Seña
                            </li>
                            <li className="mr-5 flex hover:opacity-50 duration-300 cursor-pointer">
                                <Image src={totallyPaid} alt="partial-pay" className="mr-2"/>
                                Ha Pagado
                            </li>
                            <li className="mr-5 flex hover:opacity-50 duration-300 cursor-pointer">
                                <Image src={balance} alt="partial-pay" className="mr-2"/>
                                Saldo Contado
                            </li>
                            <li className="mr-5 flex hover:opacity-50 duration-300 cursor-pointer">
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
                                <th></th>
                                <th>SERVICIO</th>
                                <th>ESTADO</th>
                                <th>VEND.</th>
                                <th>PX</th>
                                <th>TRAMO</th>
                                <th>ID VIAJE</th>
                                <th>INICIO</th>
                                <th>ORIGEN / DESTINO</th>
                                <th>NOMBRE</th>
                                <th>CUENTA</th>
                                <th>ACREDITADO</th>
                                <th>TOTAL</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-inherit text-black text-[16px] font-thin hover:opacity-90 duration-300">
                                <td rowSpan={2}>
                                    <input type="checkbox" className="accent-orange-500 h-5 w-5 m-auto"/>
                                </td>
                                <td className="text-center" rowSpan={2}>
                                    <span className="underline">VE29059</span>
                                    <div className="flex justify-center">
                                        <Image src={roundTrip} alt="round-trip" />
                                    </div>
                                </td>
                                <td rowSpan={2}>Seña 60%</td>
                                <td rowSpan={2}>ME</td>
                                <td rowSpan={2}>56</td>
                                <td>IDA</td>
                                <td>-</td>
                                <td>23/12/24</td>
                                <td className="flex justify-between">
                                    <span className="underline">Belgrano - Mar del Plata</span>
                                    <span className="bg-yellow-200 px-2 rounded">5 par</span>
                                </td>
                                <td rowSpan={2}>Nombre Big 1</td>
                                <td rowSpan={2}>Cta Cte 1</td>
                                <td className="text-gray-400" rowSpan={2}>$150.000</td>
                                <td rowSpan={2}>$250.000</td>
                                <td rowSpan={2}>
                                    <Image src={rowSettings} alt="partial-pay" className="m-auto"/>
                                </td>
                            </tr>
                            <tr className="bg-inherit text-black text-[16px] font-thin hover:opacity-90 duration-300">
                                <td>VUELTA</td>
                                <td>-</td>
                                <td>30/12/24</td>
                                <td className="flex justify-between">
                                    <span className="underline">Mar del Plata - Belgrano</span>
                                    <span className="bg-yellow-200 px-2 rounded">5 par</span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
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