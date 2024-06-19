"use client";
import { useState, useEffect } from "react";
import FormPassenger from "@/components/booking/passengers/FormPassenger";
import Separator from "@/components/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePassengerData } from "@/state/booking/PassengerContext";
import { Gender, Passenger } from "@/state/Passenger.type";
import { RedAlert } from "./alert";
import { isError } from "./ErrorMessage";

const errorInitialState = {
  passengers: [],
  termsCondition: "Tenes que aceptar esto",
  newsletter: "",
  globals: ["este es un error global", "este es otro error"],
};

export default function Passengers({
  passengers: amountPassegengers,
}: {
  passengers: number;
}) {
  const { passengerData, setPassengerData } = usePassengerData();
  const [errors, setError] = useState(errorInitialState);

  const router = useRouter();
  const redirect = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const passengers: Passenger[] = Array.from(
      { length: amountPassegengers },
      (_) =>
        ({
          firstName: "",
          lastName: "",
          gender: Gender.Male,
          age: 0,
          identification: {
            type: "",
            number: "",
            country: "",
          },
          contact: {
            phoneCode: "",
            phoneNumber: "",
            email: "",
            address: {
              street: "",
              number: "",
              city: "",
              neighborhood: "",
              other: "",
            },
          },
        }) as Passenger,
    );
    let initialData = { ...passengerData, passengers };

    try {
      const form1Data = window.localStorage.getItem("form1");
      initialData = form1Data ? JSON.parse(form1Data) : initialData;
      console.log(initialData);
    } catch (error) {
      console.log(error);
    }

    setPassengerData(initialData);

    const errorPassengers = passengers.map((_p) => ({
      firstName: "",
      lastName: "",
      gender: "",
      identification: {
        type: "",
        number: "",
        country: "",
      },
      age: "",
      contact: {
        phoneCode:"",
        phoneNumber: "",
        email: "",
        address: {
          street: "",
          number: "",
          city: "",
          neighborhood: "",
        },
      },
    }));

    console.log(errorPassengers);
    const initialErrorData = {
      ...errorInitialState,
      passengers: errorPassengers,
    };

    setError(initialErrorData as any);
  }, []);

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("AVFORM >> SubmitHandler");
    console.log(passengerData);
    const persistedData = JSON.stringify(passengerData);
    window.localStorage.setItem("form1", persistedData);
    redirect("/booking/travel_options");
  };

  return (
    <form action="#" className="py-8 text-sm text-gray-500 font-bold w-10/12">
      {errors.globals.map(isError).reduce((x: boolean, y: boolean) => x || y)
        ? errors.globals.map((err: string, index: number) => (
            <RedAlert key={index}>{err}</RedAlert>
          ))
        : null}

      {errors.passengers.length > 0 &&
        passengerData.passengers.map((passenger, index: number) => {
          console.log(errors.passengers, index);
          console.log(errors.passengers[index]);
          return (
            <FormPassenger
              errors={errors.passengers[index]}
              setError={(newError: any) => {
                const passengers: any = errors.passengers.map((oldError, i) =>
                  index === i ? newError : oldError,
                );
                setError({
                  ...errors,
                  passengers,
                });
              }}
              key={index}
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
          );
        })}
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
          Al continuar con la cotización acepta los{" "}
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
