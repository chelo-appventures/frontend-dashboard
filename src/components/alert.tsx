import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Alert () {
    return (
        <div className={
                
            `${inter.className} border-1 border-[#FFC806] bg-[#FFECA8] rounded-lg text-[18px] font-normal px-10 py-4 my-5`
        }>
            <p>
                <span className="font-semibold">Importante: Un adulto</span> quién será responsable administrativo del viaje y,
                con quién nos comunicaremos para actualizar sobre el estado del mismo, sea o no pasajero del servicio
            </p> 
        </div>
    )
}