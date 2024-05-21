import Alert from "@/components/alert";
import Person from "@/components/booking/passengers/Person";
import HeaderAV from "@/components/header";
import Hero from "@/components/hero";
import Important from "@/components/important";
import { LabelInput } from "@/components/input";
import Separator from "@/components/separator";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Passengers() {
    
    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-gray-300 max-h-screen">
                <div className=" bg-[#F4F4F7] w-[1280px] min-h-full flex flex-col">
                <HeaderAV />
                <div className="flex flex-col items-center justify-center">
                    <Hero />
                    <div
                        className="bg-white rounded-md shadow-lg flex flex-col items-center 
                        -m-20 border border-solid w-3/4"
                        >
                        <h3 className="font-bold text-[#10004F] text-[32px] my-6 w-10/12">
                            Datos de los pasajeros
                        </h3>
                        <form action="#" className="py-8 text-sm text-gray-500 font-bold w-10/12">
                            <Separator title="Responsable del viaje" />
                            <Alert />
                            <Person />
                            <Important />
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
