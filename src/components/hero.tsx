import Image from "next/image"
import hero from "@/ui/img/Hero.jpg"

export default function Hero() {
    return(
        <div className="bg-cover h-[400px] w-full" style={{
            backgroundImage: `url(${hero.src})`
        }} >
            {/* <Image src={hero} alt="bg" /> */}
            <div className="m-[24px] mt-12 text-white">
                <h2 className="text-[54px] font-extrabold">Viajes Exclusivos</h2>
                <p className="text-[22px]">
                    Días de campo, servicios aeroportuarios, viajes<br />ejecutivos, etc. Servicios de traslados a pedido con<br/>vehículos y choferes dedicados y exclusivos para cada<br/>tipo de viaje.
                </p>
            </div>
        </div>
    )
}

export function Hero2() {
    return(
    <div className="relative z-0">
        <div className="z-10" >
            <Image src={hero} alt="bg" />
        </div>
        <div className="relative z-10">
            <div className="m-[24px] mt-12 text-white">
                <h2 className="text-[54px] font-extrabold">Viajes Exclusivos</h2>
                <p className="text-[22px]">
                    Días de campo, servicios aeroportuarios, viajes<br />ejecutivos, etc. Servicios de traslados a pedido con<br/>vehículos y choferes dedicados y exclusivos para cada<br/>tipo de viaje.
                </p>
            </div>
        </div> 
    </div>
    )
}