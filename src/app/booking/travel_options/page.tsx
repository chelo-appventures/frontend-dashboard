"use client";
import { useState, useEffect } from "react";
import CardOption, { IconType } from "@/components/card";
import HeaderAV, { OptionHeader } from "@/components/header";

const options = [
  {
    id: "option_1",
    init_time: "23:00",
    origin: "Belgrano",
    final_time: "7:30",
    destiny: "Pinamar",
    cant_carry: "1",
    cant_bag: "1",
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
    cant_carry: "1",
    cant_bag: "1",
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
    cant_carry: "1",
    cant_bag: "1",
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
      <div className="flex min-h-screen flex-col items-center bg-gray-300 max-h-screen">
        <div className=" bg-[#F4F4F7] w-[1280px] min-h-full flex flex-col">
          <HeaderAV />
          <OptionHeader
            departure={result.form0.departure}
            destiny={result.form0.return}
            passengers={result.form0.passengers}
            luggage={result.form0.luggage}
          />
          <div className="flex flex-col items-center justify-center h-full bg-gray-200 pb-10 pt-20">
            <h1 className="w-[814px] text-left text-[36px] text-[#10004f]">
              Tus opciones de <strong>viaje</strong>
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
                  cant_carry={option.cant_carry}
                  cant_bag={option.cant_bag}
                  car={option.car}
                  seats={option.seats}
                  cant_car={option.cant_car}
                  car_img={option.car_img as IconType}
                  price={option.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
