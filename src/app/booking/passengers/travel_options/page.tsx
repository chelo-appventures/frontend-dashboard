import CardOption from "@/components/card";
import HeaderAV, { OptionHeader } from "@/components/header";

export default function TravelOptions() {
    return(
        <>
            <div className="flex min-h-screen flex-col items-center bg-gray-300 max-h-screen">
                <div className=" bg-[#F4F4F7] w-full min-h-full flex flex-col" >
                    <HeaderAV />
                    <OptionHeader />
                    
                    <div className="flex flex-col items-center justify-center h-full bg-gray-200 pb-10 pt-20">
                        <h1 className="w-[814px] text-left text-[36px] text-[#10004f]">Tus opciones de <strong>viaje</strong></h1>
                        <CardOption id="option_1" 
                            init_time="23:00" origin="Belgrano"
                            final_time="7:30" destiny="Pinamar"
                            cant_carry="1" cant_bag="1"
                            car="Mercedes Benz Sprinter" seats="19"
                            cant_car="1" car_img="sprinter"
                            price="50.000" 
                        />
                        <CardOption id="option_2" 
                            init_time="23:00" origin="Belgrano"
                            final_time="7:30" destiny="Pinamar"
                            cant_carry="1" cant_bag="1"
                            car="Volkswagen Sharan" seats="12"
                            cant_car="2" car_img="sharan"
                            price="36.000" 
                        />
                        <CardOption id="option_3" 
                            init_time="23:00" origin="Belgrano"
                            final_time="7:30" destiny="Pinamar"
                            cant_carry="1" cant_bag="1"
                            car="Fiat Cronos" seats="9"
                            cant_car="3" car_img="cronos"
                            price="34.000" 
                        />
                        
                        
                    </div> 
                </div>
            </div>
        </>
    )
}