import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Important () {
    return (
        <div className={
                
            `${inter.className} border-1 border-[#4658DF] bg-[#D9DDF8] rounded-lg text-[18px] font-normal px-10 py-4 my-5`
        }>
            <p>
                Puedes responderlo más tarde pero deberán estar completos 48 hs. antes de la hora de partida del viaje.
            </p> 
        </div>
    )
}