"use client";
import React, { useState } from "react";

interface Passenger {
  name: string;
  dni: string;
}

const initialPassengers: Passenger[] = [
  { name: "p--", dni: "1" },
  { name: "pp-", dni: "2" },
  { name: "ppp", dni: "3" },
];

function FormTest() {
  const [passengers, setPassengers]: any =
    useState<Passenger[]>(initialPassengers);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(passengers);
  };

  return (
    <>
      <form>
        {passengers.map((passenger: Passenger, index: number) => {
          return (
            <>
              <h1>
                <strong>Pasajero {index}</strong>
              </h1>
              <label>Nombre</label>
              <input
                type="text"
                onChange={(e: any) => {
                  const newPassenger = {
                    ...passenger,
                    name: e.currentTarget.value,
                  };
                  const newList = [...passengers];
                  newList[index] = newPassenger;
                  setPassengers(newList);
                }}
              />
              <label>Email</label>
              <input
                type="text"
                onChange={(e: any) => {
                  const newPassenger = {
                    ...passenger,
                    email: e.currentTarget.value,
                  };
                  const newList = [...passengers];
                  newList[index] = newPassenger;
                  setPassengers(newList);
                }}
              />
            </>
          );
        })}

        <button
          type="submit"
          className="bg-green-500 rounded-md text-white font-bold p-2"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </>
  );
}

export default FormTest;
