import HeaderAV, { OptionHeader } from "@/components/header";
import RadioButton from "@/components/radioButton";
import Image from "next/image";
import { Ruda, Inter } from "next/font/google"
import Link from "next/link";
import { LabelInput } from "@/components/input";

import card from "@/ui/icons/card.svg"
import mp from "@/ui/icons/mercadopago.png"
import cardxl from "@/ui/icons/card_xl.svg"

import cards from "@/ui/icons/cards.svg"
import { CardPaymentMethod } from "@/components/card";
import { IconType } from "@/components/card";

const ruda = Ruda({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function PaymentMethod () {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-gray-300 max-h-screen">
                <div className=" bg-[#F4F4F7] w-full min-h-full flex flex-col" >
                    <HeaderAV />
                    <OptionHeader />
                    
                    <div className="flex flex-col items-center justify-center h-full bg-gray-200 pb-10 pt-20">
                        <h1 className="w-[814px] h-full text-left text-[36px] text-[#10004f]"><strong>Pago</strong></h1>
                        {/* <div className="w-[813px] h-[522px] bg-white my-6 rounded-lg shadow-lg"> */}
                        <div className="flex flex-row w-[813px] bg-white my-6 rounded-lg shadow-lg">
                            {/* COLUMNA 1 */}
                            <div className="flex flex-col mx-4 w-1/2 my-6 ">
                                <div className="flex flex-row justify-between">
                                    <div className={`${ruda.className} font-bold text-[16px]`}>
                                        <p>Estás pagando en:</p>
                                    </div>
                                    <div className={`${ruda.className} font-bold text-[16px]`}>
                                        <p>Monto a pagar:</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="text-[18px] text-[#10004f] font-bold">
                                        <p>RUGGERI TURISMO</p>
                                    </div>
                                    <div className="text-[26px] text-[#10004f] font-bold">
                                        <p>$36.000</p>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-10">
                                    <div className="">
                                        <div className={`${ruda.className} font-bold text-[16px]`}>
                                            <p>Selecciona tu medio de pago:</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <CardPaymentMethod icon={"card" as IconType} title="Tarjetas" subtitle="Crédito, débito, prepago" />
                                    <CardPaymentMethod icon={"mp" as IconType} title="Mercado Pago" subtitle="y otras billeteras virtuales" />
                                </div>
                                <div className="flex justify-center items-center mt-6">
                                    <div className="flex items-center justify-center">
                                        <Link href="#" className="text-[#2174A6] font-bold">Anular compra y volver</Link>
                                    </div>
                                </div>    

                            
                            </div> {/* FIN DE COLUMNA 1 */}


                            {/* COLUMNA 2 */}
                            <div className="flex flex-col mx-4 mt-6 mb-10 w-1/2 ">
                                <div className="flex mt-[103px] justify-center">
                                    <div className={`${ruda.className} font-bold text-[16px] text-center`}>
                                        <p>Ingresa los datos de tu tarjeta:</p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-2 mb-4">
                                    <Image src={cardxl} alt="cardxl" />
                                </div>
                                <div>

                                    <LabelInput type="text" placeholder="Número de tarjeta" />
                                </div>
                                <div>
                                    <button className="w-full bg-orange-500 text-white py-2 rounded-md font-bold">Continuar</button>
                                    <Image src={cards} alt="cards" />
                                </div>
                            </div> {/* FIN COLUMNA 2}


                            {/* <div className="flex flex-row mt-6 mb-2 mx-4 justify-between">
                                <div className="flex flex-row w-1/2 justify-between">
                                    <div className={`${ruda.className} font-bold text-[16px]`}>
                                        <p>Estás pagando en:</p>
                                    </div>
                                    <div className={`${ruda.className} font-bold text-[16px]`}>
                                        <p>Monto a pagar:</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex-row  mx-4">
                                <div className="flex flex-row w-1/2 justify-between items-center">
                                    <div className="text-[18px] text-[#10004f] font-bold">
                                        <p>RUGGERI TURISMO</p>
                                    </div>
                                    <div className="text-[26px] text-[#10004f] font-bold">
                                        <p>$36.000</p>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-10">
                                    <div className="w-1/2">
                                        <div className={`${ruda.className} font-bold text-[16px]`}>
                                            <p>Selecciona tu medio de pago:</p>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className={`${ruda.className} font-bold text-[16px] text-center`}>
                                            <p>Ingresa los datos de tu tarjeta:</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-1/2 mr-2">
                                        <div 
                                            className="cardPaymentMethod 
                                            flex flex-row w-auto h-[82px] border border-gray-300 rounded-lg my-4 mr-2">
                                            
                                            <div className="iconCard w-2/6 flex items-center justify-center">
                                                <Image src={card} alt="card" className=""/>
                                            </div>
                                            <div className="flex  items-center w-5/6">
                                                <div className="">
                                                    <div className="flex w-full">
                                                        <p className="font-bold text-left">Tarjetas</p>
                                                    </div>
                                                    <div className="flex">
                                                        <p>Crédito, débito, prepago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div 
                                            className="cardPaymentMethod 
                                            flex flex-row w-auto h-[82px] border border-gray-300 rounded-lg my-4 mr-2">
                                            
                                            <div className="iconCard w-2/6 flex items-center justify-center">
                                                <Image src={mp} alt="card" className=""/>
                                            </div>
                                            <div className="flex  items-center w-5/6">
                                                <div className="">
                                                    <div className="flex w-full">
                                                        <p className="font-bold text-left">Mercado Pago</p>
                                                    </div>
                                                    <div className="flex">
                                                        <p>y otras billeteras virtuales</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-1/2 justify-center items-start my-3">
                                        <Image src={cardxl} alt="cardxl" />
                                        <LabelInput placeholder="Número de tarjeta" />
                                        <button className="w-full bg-orange-500 text-white py-2 rounded-md font-bold">Continuar</button>
                                        <Image src={cards} alt="cards" />
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="flex items-center justify-center w-1/2">
                                        <Link href="#" className="text-[#2174A6] font-bold">Anular compra y volver</Link>
                                    </div>
                                </div>
                            </div> */}


                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}