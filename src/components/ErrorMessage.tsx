import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const errorsMsg: any = {
        tripType: {
            transferType: "Selecciona una opción",
            roundTrip: "",
        },
        fullTime: "",
        departure: {
            city: "Escribe y selecciona una opción válida",
            date: "Selecciona una fecha",
            time: "Selecciona una hora",
        },
        return: {
            city: "Escribe y selecciona una opción válida",
            date: "Selecciona una fecha",
            time: "Selecciona una hora",
        },
        passengers: {
            adult: "",
            kid: "",
            baby: "",
            pets: {
                small: "",
                big: "",
            },
        },
        luggage: {
        carryOn: 0,
        bag23: 0,
        special: {
            quantity: 0,
            detail: "Detalla tu equipaje especial por tipo, medidas y peso",
        },
        },
    };

    
const isError = (v: string): boolean => v === "";

const ErrorMessage = ({ field, message }: { field: string | undefined, message: string | undefined}) =>{
    // const [errorsMessage, setErrorsMessage] = useState(errorsMessages);
    // isError(field) ? (
    return(

        <>
            <div className="flex flex-row items-center text-red-500">
                <ExclamationCircleIcon className="size-4 " />
                <p className="ml-2 text-xs"> 
                    {message}
                </p>
            </div>
        </>
    )
    
}

export {ErrorMessage, isError}

