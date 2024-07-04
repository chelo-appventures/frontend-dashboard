"use client";
import { useState, useEffect } from "react";
import CardOption, { IconType } from "@/components/card";
import HeaderAV, { OptionHeader } from "@/components/header";
import Separator from "@/components/separator";
import LabelInput from "@/components/input";

const options = [
  {
    id: "option_1",
    init_time: "23:00",
    origin: "Belgrano",
    final_time: "7:30",
    destiny: "Pinamar",
    cant_handBag: "19",
    cant_bag: "12",
    cant_littleBag:"15",
    car: "Mercedes Benz Sprinter",
    seats: "19",
    cant_car: "1",
    car_img: "sprinter",
    price: "50.000",
  },
  {
    id: "option_2",
    init_time: "23:00",
    origin: "Belgrano",
    final_time: "7:30",
    destiny: "Pinamar",
    cant_handBag: "12",
    cant_bag: "3",
    cant_littleBag:"6",
    car: "Volkswagen Sharan",
    seats: "12",
    cant_car: "2",
    car_img: "sharan",
    price: "36.000",
  },
  {
    id: "option_3",
    init_time: "23:00",
    origin: "Belgrano",
    final_time: "7:30",
    destiny: "Pinamar",
    cant_handBag: "9",
    cant_bag: "2",
    cant_littleBag:"3",
    car: "Fiat Cronos",
    seats: "9",
    cant_car: "3",
    car_img: "cronos",
    price: "34.000",
  },
];

export default function TravelOptions() {
  const [result, setResult] = useState<any>();
  useEffect(() => {
    const form0 = JSON.parse(localStorage.getItem("form0") || "");
    if (form0) {
      setResult({ form0 });
    }
  }, []);

  if (!result) {
    return <div> Loading ...</div>;
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-gray-300 h-full">
        <div className=" bg-[#F4F4F7] w-[1280px] min-h-full flex flex-col">
          <HeaderAV />
          <OptionHeader
            departure={result.form0.departure}
            destiny={result.form0.return}
            passengers={result.form0.passengers}
            luggage={result.form0.luggage}
          />
          <div className="flex flex-row justify-center h-full bg-gray-200 pb-10 pt-20">
            
            <div className="flex flex-col items-start">
              <h1 className="text-[36px] text-black">
                <strong>Selecciona tipo</strong> y <strong>cantidad</strong>
              </h1>
              {options.map((option) => {
                return (
                  <CardOption
                    key={option.id}
                    id={option.id}
                    init_time={option.init_time}
                    origin={option.origin}
                    final_time={option.final_time}
                    destiny={option.destiny}
                    cant_handBag={option.cant_handBag}
                    cant_bag={option.cant_bag}
                    cant_littleBag={option.cant_littleBag}
                    car={option.car}
                    seats={option.seats}
                    cant_car={option.cant_car}
                    car_img={option.car_img as IconType}
                    price={option.price}
                  />
                );
              })}
            </div>

            

            <div className="ml-10 w-[345px]">
                <h1 className="text-[36px] text-black">A pagar</h1>
              <div className="flex flex-col bg-white justify-end rounded-md my-5 px-5 pb-5 shadow-lg">
                <div>
                  <div className="border-b-[1px] border-gray-300 font-semibold mt-4 text-[#10004f]">
                    <h1 className="font-bold">Pasajeros</h1>
                  </div>
                  <div className="font-semibold text-gray-500">
                    <h1>
                      {result.form0.passengers.adult + result.form0.passengers.kid + result.form0.passengers.baby} pasajeros - {result.form0.passengers.adult + result.form0.passengers.pets.big } asientos
                    </h1>
                    <div className="mt-5">
                      <p>{result.form0.passengers.adult} adultos</p>
                      {
                        result.form0.passengers.kid 
                        ? <p>{result.form0.passengers.kid} niños</p>
                        : null
                      }
                      {
                        result.form0.passengers.baby
                        ? <p>{result.form0.passengers.baby} bebés</p>
                        : null
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-300 font-semibold mt-4 text-[#10004f]">
                    <h1 className="font-bold">Equipaje</h1>
                  </div>
                  <div className="mt-5 font-semibold">
                    { result.form0.luggage.bag23 + result.form0.luggage.carryOn + result.form0.luggage.special.quantity === 0 ? <p className="text-gray-500">Sin equipaje</p> : null }
                    { result.form0.luggage.bag23 ? <p>{result.form0.luggage.bag23} Valijas grandes 23 Kg</p> : null }
                    { result.form0.luggage.carryOn ? <p>{result.form0.luggage.carryOn} Valijas medianas 15 Kg</p> : null }
                    { result.form0.luggage.special.quantity ? <p>{result.form0.luggage.special.quantity} Equipaje especial</p> : null }
                  </div>
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-300 font-semibold mt-4 text-[#10004f] flex justify-between">
                    <h1 className="font-bold">Trayecto</h1>
                    { 
                      result.form0.tripType.roundTrip 
                      ? <h1 className="text-gray-500">Ida y vuelta</h1> 
                      : <h1 className="text-gray-500">Ida</h1>
                    }
                  </div>
                  <div className="mt-1 mb-5">
                    <p className="font-semibold text-gray-500">{ result.form0.departure.city.split(",")[0] } - { result.form0.return.city.split(",")[0] }</p>
                  </div>
                  <div className="font-semibold text-gray-500">
                    <p>404 Km de ida</p>
                    {
                      result.form0.tripType.roundTrip
                      ? <p>404 Km tramo vuelta</p>
                      : null
                    }
                  </div>
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-300 font-semibold mt-4 text-[#10004f] flex justify-between">
                    <h1 className="font-bold">Vehículos</h1>
                  </div>
                  <div className="flex flex-row justify-between mt-5 font-semibold text-gray-500">
                    <p>{"2"} {"VW Sharan"} x {"808"} Km</p>
                    <p>{"120.000"}</p>
                  </div>
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-300 font-semibold mt-4 text-[#10004f] flex justify-between">
                    <h1 className="font-bold">Choferes</h1>
                  </div>
                  <div className="mt-1 mb-5 font-semibold text-gray-500">
                    <p >+ 600 Km por regulación</p>
                  </div>
                  <div className="mt-5 font-semibold text-gray-500">
                    <div className="flex flex-row justify-between ">
                      <p>{"2"} Choferes calificados</p>
                      <p>{"60.000"}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>{"2"} Extras diurno (Perdiem)</p>
                      <p>{"20.000"}</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-baseline font-bold text-[#10004f] border-t-[1px] border-gray-300 mt-3 py-2">
                    <p>Total</p>
                    <p className="text-xl">${"200.000"}</p>
                  </div>
                </div>
                <div className="mt-[120px]">
                  <button className="w-full">Continuar</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
