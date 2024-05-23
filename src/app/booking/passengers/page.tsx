'use client'
import Alert from "@/components/alert";
import Person from "@/components/booking/passengers/Person";
import Pax from "@/components/booking/passengers/pax";
import HeaderAV from "@/components/header";
import Hero from "@/components/hero";
import Important from "@/components/important";
import Separator, { SeparatorHeading } from "@/components/separator";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";    

const inter = Inter({ subsets: ["latin"] });

export default function Passengers() {
    const router = useRouter();
    const redirect = (path: string) => {
      router.push(path);
    }

    const submitHandler = (e: any) => {
      e.preventDefault();
      console.log('AVFORM >> SubmitHandler');
      redirect('/booking/travel_options');
    }

    
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
                                <SeparatorHeading title="Responsable del viaje" />
                                <Alert />
                                <Person />
                                <Important />
                                <SeparatorHeading title="Pasajero 1"/>
                                <div className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                                        focus:outline-none duration-500 hover:shadow-md "
                                    />
                                    <label 
                                        className="text-black p-2"
                                    >
                                        Es el responsable del viaje
                                    </label>
                                </div>
                                <Separator title="Dirección (por donde pasaremos a buscarte)" />
                                <div className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                                        focus:outline-none duration-500 hover:shadow-md "
                                    />
                                    <label 
                                        className="text-black p-2"
                                    >
                                        Es la misma dirección que la anterior
                                    </label>
                                </div>
                                <Pax title="Pasajero 2" sameAddress />
                                <Separator title="Otros"/>
                                <div className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                                        focus:outline-none duration-500 hover:shadow-md "
                                    />
                                    <label 
                                        className="text-black p-2"
                                    >
                                        Al continua con la cotización acepta los <Link href="#" className="text-orange-500 underline">Términos y Condiciones</Link> y <Link href="#" className="text-orange-500 underline">Politicas de Privacidad.</Link>
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                                        focus:outline-none duration-500 hover:shadow-md "
                                    />
                                    <label 
                                        className="text-black p-2"
                                    >
                                        Deseo recibir ofertas y novedades de Turismo Ruggeri a mi correo.
                                    </label>
                                </div>
                                
                                <div className="flex my-10 items-center justify-end">
                                    <button 
                                        type="button"
                                        className="bg-orange-500 text-white text-[18px] px-7 py-4 rounded-md
                                        duration-500 hover:shadow-md" 
                                        onClick={submitHandler}
                                    >
                                        Continuar
                                    </button>
                                </div>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
