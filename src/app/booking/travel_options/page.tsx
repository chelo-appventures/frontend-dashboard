"use client";
import { useState, useEffect } from "react";
import CardOption, { IconType } from "@/components/card";
import HeaderAV, { OptionHeader } from "@/components/header";
import { driverPrice, driverQuantitys } from "@/utils/pricing";

const options = [
  {
    id: "sprinter19",
    cant_handBag: 19,
    cant_bag: 12,
    cant_littleBag:15,
    name: "Mercedes Benz Sprinter",
    seats: 19,
    car_img: "sprinter" as IconType,
    price: 500,
    driverFee: 20,
    quantity: 0,
  },
  {
    id: "sharan7",
    cant_handBag: 7,
    cant_bag: 3,
    cant_littleBag:6,
    name: "Volkswagen Sharan",
    seats: 7,
    car_img: "sharan" as IconType,
    price: 360,
    driverFee: 12,
    quantity: 0,
  },
  {
    id: "cronos4",
    cant_handBag: 4,
    cant_bag: 2,
    cant_littleBag:3,
    name: "Fiat Cronos",
    seats: 4,
    car_img: "cronos" as IconType,
    price: 340,
    driverFee: 10,
    quantity: 0,
  },
];




export default function TravelOptions() {
  const [result, setResult] = useState<any>();
  const [vehicles, setVehicles] = useState(options)
  
  useEffect(() => {
    const form0 = JSON.parse(localStorage.getItem("form0") || "");
    if (form0) {
      setResult({ form0 });
    }
  }, []);

  if (!result) {
    return <div> Loading ...</div>;
  }
  const inicioViaje = new Date(result.form0.departure.date + 'T' + result.form0.departure.time)
  const finViaje = new Date(result.form0.return.date + 'T' + result.form0.return.time)
  const distanciaIda = 350
  const distanciaVuelta = 350
  const distanciaTotal = distanciaIda + distanciaVuelta
  const totalQuantity = options.reduce((sum, option) => sum + option.quantity, 0);

  // const resultPrice = () => totalPrice(
  //   options.reduce((sum, option) => sum + option.quantity, 0),
  //   inicioViaje,
  //   finViaje,
  //   5000,
  //   driverFee,
  //   "sprinter19",
  //   distanciaTotal,
  // )
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
              {options.map((option, index) => {
                return (
                  <CardOption
                    key={option.id}
                    vehicle={vehicles[index]}
                    setVehicle = {(newVehicle:any) => {
                      const newListVehicle = vehicles.map(vehicle => vehicle.id === newVehicle.id ? newVehicle : vehicle)
                      setVehicles(newListVehicle)
                    }
                    }
                  />
                );
              })}
            </div>

            

            <div className="ml-10 w-[345px]">
                <h1 className="text-[36px] text-black">A pagar</h1>
              <div className="flex flex-col bg-white text-gray-500 font-medium justify-end rounded-md my-5 px-5 pb-5 shadow-lg text-xs">
                <div>
                  <div className="border-b-[1px] border-gray-300 mt-4 text-[#10004f]">
                    <h1 className="font-bold">Pasajeros</h1>
                  </div>
                  <div>
                    <h1>
                      {result.form0.passengers.adult + result.form0.passengers.kid + result.form0.passengers.baby} pasajeros - {result.form0.passengers.adult + result.form0.passengers.kid + result.form0.passengers.baby + result.form0.passengers.pets.big } asientos
                    </h1>
                    <div className="mt-5">
                      {
                        result.form0.passengers.adult && result.form0.passengers.adult === 1
                        ? <p>{result.form0.passengers.adult} adulto</p>
                        : <p>{result.form0.passengers.adult} adultos</p>
                      }
                      
                      {
                        result.form0.passengers.kid && result.form0.passengers.kid === 1
                        ? <p>{result.form0.passengers.kid} niño</p>
                        : <p>{result.form0.passengers.kid} niños</p>
                      }
                      {
                        result.form0.passengers.baby && result.form0.passengers.baby === 1
                        ? <p>{result.form0.passengers.baby} bebé</p>
                        : <p>{result.form0.passengers.baby} bebés</p>
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-300  mt-4 text-[#10004f]">
                    <h1 className="font-bold">Equipaje</h1>
                  </div>
                  <div className="mt-5 ">
                    { result.form0.luggage.bag23 + result.form0.luggage.carryOn + result.form0.luggage.special.quantity === 0 ? <p className="">Sin equipaje</p> : null }
                    { result.form0.luggage.bag23 && result.form0.luggage.bag23 === 1 ? <p>{result.form0.luggage.bag23} Valija grande 23 Kg</p> : <p>{result.form0.luggage.bag23} Valijas grandes 23 Kg</p> }
                    { result.form0.luggage.carryOn && result.form0.luggage.carryOn === 1 ? <p>{result.form0.luggage.carryOn} Valija mediana 15 Kg</p> : <p>{result.form0.luggage.carryOn} Valijas medianas 15 Kg</p> }
                    { result.form0.luggage.special.quantity && result.form0.luggage.special.quantity === 1 ? <p>{result.form0.luggage.special.quantity} Equipaje especial</p> : <p>{result.form0.luggage.special.quantity} Equipajes especiales</p> }
                  </div>
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-300  mt-4 text-[#10004f] flex justify-between">
                    <h1 className="font-bold">Trayecto</h1>
                    <h1 className="font-semibold text-gray-500">
                      { 
                        result.form0.tripType.roundTrip 
                        ? <>Ida y vuelta</> 
                        : <>Ida</>
                      }
                    </h1>
                  </div>
                  <div className="mt-1 mb-5">
                    <p className=" ">{ result.form0.departure.city.split(",")[0] } - { result.form0.return.city.split(",")[0] }</p>
                  </div>
                  <div className=" ">
                    <p>{distanciaIda} Km tramo de ida</p>
                    {
                      result.form0.tripType.roundTrip
                      ? <p>{distanciaVuelta} Km tramo vuelta</p>
                      : null
                    }
                  </div>
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-300  mt-4 text-[#10004f] flex justify-between">
                    <h1 className="font-bold">Vehículos</h1>
                  </div>
                  <div className="flex flex-col justify-between mt-5  ">
                    {vehicles.map((vehicle, index) => vehicle.quantity 
                        ? <div className="flex flex-row justify-between">
                            <p>{vehicle.quantity} {vehicle.name} x {distanciaTotal}Km</p>
                            <span className="font-semibold">{ vehicle.price * distanciaTotal *vehicle.quantity }</span>
                          </div> 
                        : null
                      )
                    }
                  </div>
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-300  mt-4 text-[#10004f] flex justify-between">
                    <h1 className="font-bold">Choferes</h1>
                  </div>
                  <div className="mt-1 mb-5  ">
                    {distanciaTotal > 600 ? <p>+ 600 Km por regulación</p> : null}
                  </div>
                  <div className="mt-5  ">
                    <div className="flex flex-col justify-between ">
                    {vehicles.map((vehicle, index) => vehicle.quantity 
                        ? <div className="flex flex-row justify-between">
                            <p>{driverQuantitys(vehicle.id, distanciaTotal)} Choferes calificados</p>
                            <span className="font-semibold">{ vehicle.quantity * driverPrice(vehicle.driverFee, vehicle.id, distanciaTotal, driverQuantitys(vehicle.id, distanciaTotal)) }</span>
                          </div> 
                        : null
                      )
                    }
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
