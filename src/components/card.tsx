import Image from "next/image"
import sprinter from "@/ui/img/vehicles/Sprinter_Minibus_17_1_PPD 1.png"
import sharan from "@/ui/img/vehicles/Sharan.png"
import cronos from "@/ui/img/vehicles/fiat_cronos_versiones 1.png"
import carry from "@/ui/icons/carry_1.svg"
import bag from "@/ui/icons/bag_1.svg"
import Link from "next/link"


export default function CardOption (
    {
        id,
        origin,
        destiny,
        init_time,
        final_time,
        cant_car,
        car,
        car_img,
        seats,
        cant_carry, 
        cant_bag,
        price
    }:{
        id:string,
        origin: string,
        destiny: string,
        init_time: string,
        final_time: string,
        cant_car: string,
        car: string,
        car_img: string,
        seats: string,
        cant_carry: string,
        cant_bag: string,
        price:string
    }) {
        return(
            <>
                <div className="shadow-lg m-5 opacity-50 hover:opacity-100 duration-300">
                    <div className="bg-white w-[814px] h-[162px] rounded-t-lg px-6">
                        <div className="flex justify-between ">
                            <div className="flex flex-row">
                                <Image src={sprinter} alt="sprinter" />
                                <div className="mt-5 ">
                                    <h4 className="font-bold text-[20px]">{cant_car} x {car}</h4>
                                    <h4 className="font-semibold text-[16px]">{seats} asientos</h4>
                                </div>

                            </div>
                            <div className="mt-5">
                                <Link href="#" className="font-semibold text-orange-500">Detalle</Link>
                            </div>
                        </div> 
                        <div className="flex flex-row text-[26px] text-[#10004F] justify-between">
                            <div >
                                <p><strong>{init_time}</strong> {origin}<strong> - {final_time}</strong> {destiny}</p>
                            </div>
                            <div>
                                <h4><strong>${price}</strong></h4>
                            </div>
                        </div>

                    </div>
                    <div className="bg-white w-[814px] h-[76px] rounded-b-lg border-t border-gray-200 flex items-center px-6">
                        <div className="flex flex-row items-center">
                            <Image src={carry} alt="carry" />
                            <p className="text-[14px] text-[#10004f] font-bold px-3">{cant_carry} Bolso de mano o mochila</p>
                        </div>
                        <div className="flex flex-row items-center ml-3">
                            <Image src={bag} alt="carry" />
                            <p className="text-[14px] text-[#10004f] font-bold px-3">{cant_bag} Valija mediana (70x40)</p>
                        </div>
                    </div>
                </div>
            </>
        )
}