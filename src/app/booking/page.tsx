import Hero from "@/components/hero";
import HeaderAV from "@/components/header";
import AVForm from "@/components/form";


export default function Booking() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-300 max-h-screen">
      <div className=" bg-[#F4F4F7] w-[1280px] min-h-full flex flex-col" >
        <HeaderAV />
        <div className="flex flex-col items-center justify-center">
            <Hero /> 
            <AVForm />
        </div> 
      </div>
    </div>
  );
}
