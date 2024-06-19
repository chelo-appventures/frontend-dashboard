import React, { ReactNode } from "react";
import { ErrorMessage, isError } from "./ErrorMessage";
interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children:ReactNode;
    label?: string;
    errorField?: string | undefined;
}


const Select:React.FC<Props> = ({children, label, errorField="", ...props }) => {
    return (
        <div>
            <div className="relative">
                <label>
                    <select
                        className={`
                            ${
                                isError(errorField)
                                ? "border-red-500"
                                : ""
                            }`}
                        {...props}
                        >
                        {children}
                    </select>
                    <span
                        className={`absolute font-semibold text-xs left-2 -top-2 bg-white px-2 
                            ${
                            isError(errorField)
                                ? "text-red-500"
                                : ""
                            }`}
                    >
                        {label}
                    </span>
                </label>
            </div>
            {isError(errorField) && <ErrorMessage field={errorField} />}
        </div>
    )
}

export default Select;

