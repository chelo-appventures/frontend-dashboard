import React, { ReactNode } from "react";
import { ErrorMessage, isError } from "./ErrorMessage";
interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children:ReactNode;
    label: string;
    errorField?: string | undefined;
}


const Select:React.FC<Props> = ( props ) => {
    return (
        <div>
            <div className="relative">
                <label>
                    <select
                        className={`block border font-normal border-gray-300 rounded-md px-3 py-3 mt-5 mb-1 w-full hover:shadow-md focus:shadow-md outline-none focus:border-black 
                            ${
                                isError(props.errorField)
                                ? "border-red-500"
                                : ""
                            }`}
                        {...props}
                        >
                        {props.children}
                    </select>
                </label>
                <span
                    className={`absolute font-semibold text-xs left-2 -top-2 bg-white px-2 
                        ${
                        isError(props.errorField)
                            ? "text-red-500"
                            : ""
                        }`}
                >
                    {props.label}
                </span>
            </div>
            {isError(props.errorField) && <ErrorMessage field={props.errorField} />}
        </div>
    )
}

export default Select;

{/* <div>
    <label className="relative font-normal">
    <select
        className={`block border border-gray-300 rounded-md px-3 py-3 mt-5 mb-1 w-full hover:shadow-md focus:shadow-md outline-none focus:border-black 
        ${
            isError(errors.passenger.identification.country)
            ? "border-red-500"
            : ""
        }`}
        value={passenger.identification.country}
        onChange={(e) => {
        setPassenger({
            ...passenger,
            identification: {
            ...passenger.identification,
            country: e.target.value,
            },
        });
        }}
    >
        <option disabled defaultValue=""></option>
        <option value="arg">Argentina</option>
        <option value="bra">Brasil</option>
        <option value="chi">Chile</option>
        <option value="uru">Uruguay</option>
        <option value="bol">Bolivia</option>
        <option value="col">Colombia</option>
        <option value="ven">Venezuela</option>
    </select>
    <span
        className={`absolute text-xs left-2 -top-2 bg-white px-2 
        ${
        isError(errors.passenger.identification.country)
            ? "text-red-500"
            : ""
        }`}
    >
        País de emisión
    </span>
    </label>
    {isError(errors.passenger.identification.country) && (
    <ErrorMessage field={errors.passenger.identification.country} />
    )}
</div>
</div> */}