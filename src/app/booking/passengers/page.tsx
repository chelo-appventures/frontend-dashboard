"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderAV from "@/components/header";
import Hero from "@/components/hero";
import { PassengerDataProvider } from "@/state/booking/PassengerContext";
import FormPassengersData from "@/components/FormPassengersData";

export default function Passengers() {
  const [passengers, setPassengers] = useState<number>(0);

  const router = useRouter();
  const redirect = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const form0Data = JSON.parse(localStorage.getItem("form0"));
    if (form0Data) {
      const ps = form0Data.passengers.adult + form0Data.passengers.kid;
      console.log("suma", ps);
      setPassengers(ps);
    }
  }, []);

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("AVFORM >> SubmitHandler");
    redirect("/booking/travel_options");
  };

  if (passengers < 1) {
    return <div> ... </div>;
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
              <PassengerDataProvider>
                <FormPassengersData passengers={passengers} />
              </PassengerDataProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
