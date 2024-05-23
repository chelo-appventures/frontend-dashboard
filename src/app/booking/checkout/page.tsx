import AVForm from "@/components/form";
import HeaderAV, { OptionHeader } from "@/components/header";
import RadioButton from "@/components/radioButton";
import { Ruda, Inter } from "next/font/google"

const ruda = Ruda({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function PartialPay () {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-gray-300 max-h-screen">
                <div className=" bg-[#F4F4F7] w-full min-h-full flex flex-col" >
                    <HeaderAV />
                    <OptionHeader />
                    
                    <div className="flex flex-col items-center justify-center h-full bg-gray-200 pb-10 pt-20">
                        <h1 className="w-[814px] text-left text-[36px] text-[#10004f]"><strong>Pago</strong></h1>
                        <div className="w-[813px] h-[522px] bg-white my-6 rounded-lg shadow-lg">
                            <div className="mx-6">
                                <div className="factura my-6">
                                    <p className={`${ruda.className} font-bold `}>¿Qué tipo de factura necesitas?</p>
                                    <div className="flex my-2 ">
                                        <RadioButton name="invoice_type" title="Factura A"/>
                                        <RadioButton name="invoice_type" title="Factura B"/>
                                    </div>
                                    <div className="line mt-6 bg-gray-300 w-full h-[1px] x-6"></div>
                                </div>
                                <div className="totalCost flex justify-between items-center text-gray-400">
                                    <p className={`${ruda.className} font-bold text-[16px]`}>Costo total del servicio</p>
                                    <p className="font-bold text-[26px]">$36.000</p>
                                </div>
                                <div className="line mt-6 bg-gray-300 w-full h-[1px] x-6"></div>
                                <div className="partialPay my-6 flex justify-between">
                                    <div>
                                        <p className={`${inter.className} font-semibold text-[16px]`}>¿Qué porcentaje del viaje abonarás ahora para señar el viaje?</p>
                                        <div className="relative font-semibold">
                                            <select
                                                name="percentage_pay"
                                                id="percentage_pay"
                                                className="w-3/4 rounded-md shadow-sm border border-gray-300
                                                text-[16x] hover:shadow-md focus:shadow-md focus:border-gray-500
                                                focus:border-1 px-4 py-3 my-5 duration-200 outline-none 
                                                bg-inherit"
                                                >
                                                <option value="25" title="25%" />
                                                <option value="50" title="50%" />
                                                <option value="75" title="75%" />
                                                <option value="100" title="100%" />
                                            </select>
                                            <span
                                                className="absolute left-0 top-3 bg-white mx-3 px-2
                                                peer focus:text-gray-300 duration-200 text-[16px]
                                                text-xs font-normal" 
                                            >
                                                Porcentaje de pago
                                            </span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className={`${inter.className} font-semibold text-[16px]`}>Monto a pagar como reserva</p>
                                        <p className="font-bold text-[26px] text-right my-6 text-gray-500">$18.000</p>
                                    </div>
                                </div>
                                <div className="Proceed text-right my-[100px]">
                                    <button
                                        className="proceed__button
                                        outline-none
                                        bg-orange-500 text-[18px] font-bold text-white
                                        w-1/2 py-2 disabled:bg-gray-300 disabled:text-gray-500"
                                        disabled
                                    >Continuar</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}