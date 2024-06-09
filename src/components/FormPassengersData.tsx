"use client";
import { useEffect } from "react";
import FormPassenger from "@/components/booking/passengers/FormPassenger";
import Separator from "@/components/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePassengerData } from "@/state/booking/PassengerContext";
import { Gender, Passenger } from "@/state/Passenger.type";

export default function Passengers({
  passengers: amountPassegengers,
}: {
  passengers: number;
}) {
  const { passengerData, setPassengerData } = usePassengerData();
  const router = useRouter();
  const redirect = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const passengers: Passenger[] = Array.from(
      { length: amountPassegengers },
      (_) => ({
        firstName: "",
        lastName: "",
        gender: Gender.Male,
        identification: {
          type: "",
          number: "",
          country: "",
        },
        age: 0,
        contact: {
          phoneNumber: "",
          email: "",
          address: {
            street: "",
            number: "",
            city: "",
            neighborhood: "",
          },
        },
      }),
    );

    setPassengerData({
      ...passengerData,
      passengers,
    });
  }, []);
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("AVFORM >> SubmitHandler");
    // redirect('/booking/travel_options');
    console.log(passengerData);
  };

  return (
    <form action="#" className="py-8 text-sm text-gray-500 font-bold w-10/12">
      {passengerData.passengers.map((passenger, index) => (
        <FormPassenger
          passenger={passenger}
          setPassenger={(newP) => {
            const passengers = passengerData.passengers.map((oldP, i) =>
              index === i ? newP : oldP,
            );
            setPassengerData({
              ...passengerData,
              passengers,
            });
          }}
          index={index}
        />
      ))}
      <Separator title="Otros" />
      <div className="flex items-center">
        <input
          type="checkbox"
          className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md "
          checked={passengerData.agreements.termsCondition}
          onChange={() =>
            setPassengerData({
              ...passengerData,
              agreements: {
                ...passengerData.agreements,
                termsCondition: !passengerData.agreements.termsCondition,
              },
            })
          }
        />
        <label className="text-black p-2">
          Al continua con la cotización acepta los{" "}
          <Link href="#" className="text-orange-500 underline">
            Términos y Condiciones
          </Link>{" "}
          y{" "}
          <Link href="#" className="text-orange-500 underline">
            Politicas de Privacidad.
          </Link>
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md "
          checked={passengerData.agreements.newsletter}
          onChange={() =>
            setPassengerData({
              ...passengerData,
              agreements: {
                ...passengerData.agreements,
                newsletter: !passengerData.agreements.newsletter,
              },
            })
          }
        />
        <label className="text-black p-2">
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
  );
}
