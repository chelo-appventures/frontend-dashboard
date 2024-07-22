import React, { ReactNode } from "react";
import { ErrorMessage, isError } from "./ErrorMessage";

interface OptionType {
    value: string;
    label: JSX.Element | string; // Permite etiquetas personalizadas
    countryName?: string; // Opcional: puedes mantener esta propiedad para otras necesidades
    flagUrl?: string; // URL de la bandera
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode;
    label?: string;
    errorField?: string | undefined;
}

const Select: React.FC<Props> = ({ children, label, errorField = "", ...props }) => {
    return (
        <div>
            <div className="relative">
                <label>
                    <select
                        className={`
                        ${isError(errorField)
                                ? "border-red-500"
                                : ""
                            }`}
                        {...props}
                    >
                        {children}
                    </select>
                    <span
                        className={`absolute font-semibold text-xs left-2 -top-2 bg-white px-2 
                            ${isError(errorField)
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
    );
};

export const Option: React.FC<OptionType> = ({ value, label, flagUrl }) => {
    return (
        <option value={value}>
            {typeof label === "string" ? label : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {flagUrl && <img src={flagUrl} alt={`${label} Flag`} style={{ width: '20px', marginRight: '8px' }} />}
                    {label}
                </div>
            )}
        </option>
    );
};

export default Select;
