"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { TripDataForm2 as PassengerData, Gender } from "../Passenger.type";

interface PassengerContextType {
  passengerData: PassengerData;
  setPassengerData: React.Dispatch<React.SetStateAction<PassengerData>>;
}

const PassengerContext = createContext<PassengerContextType | undefined>(
  undefined,
);

const PassengerDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [passengerData, setPassengerData] = useState<PassengerData>({
    passengers: [
      {
        isResponsible: true,
        firstName: "",
        lastName: "",
        identification: { type: "", number: "", country: "" },
        age: "",
        gender: Gender.Male,
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
      },
    ],
    agreements: {
      termsCondition: false,
      newsletter: false,
    },
  });

  return (
    <PassengerContext.Provider value={{ passengerData, setPassengerData }}>
      {children}
    </PassengerContext.Provider>
  );
};

// Hook personalizado para usar el contexto
const usePassengerData = (): PassengerContextType => {
  const context = useContext(PassengerContext);
  if (context === undefined) {
    throw new Error("useTrip debe usarse dentro de un TripProvider");
  }
  return context;
};

export { PassengerDataProvider, usePassengerData };
