import React from "react";
import { isError, ErrorMessage } from "./ErrorMessage";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  errorField?: string | undefined;
}

const LabelInput: React.FC<Props> = (props) => {
  const { placeholder, errorField = "", ...inputProps } = props;

  return (
    <>
      <div className="relative">
        <label className="relative font-semibold block">
          <input
            className={`peer placeholder-transparent 
            ${
              isError(errorField) ? "border-red-500" : ""
            }`}
            {...inputProps}
            placeholder={placeholder}
          />
          <span
            className={`absolute left-0 top-3 text-opacity-80 bg-white mx-3 px-2
            peer-focus:text-gray-500 duration-200 text-[16px]
            peer-focus:text-xs peer-focus:-translate-y-5 
            peer-valid:text-xs peer-valid:-translate-y-5 peer-disabled:-translate-y-5 peer-disabled:bg-inherit peer-disabled:text-xs ${
              isError(errorField) ? "text-red-500" : ""
            }`}
          >
            {placeholder}
          </span>
        </label>
        {isError(errorField) && <ErrorMessage field={errorField} />}
      </div>
    </>
  );
};

const Checkbox: React.FC<Props> = (props) => {
  const {className, ...checkProps} = props
  return (
    <>
    <div className="relative inline-block w-5 h-5">
        <input
          type="checkbox"
          className="custom-checkbox appearance-none w-full h-full bg-transparent border-2 border-gray-300 rounded-md cursor-pointer peer"
          {...props}
        />
        <div className="absolute inset-0 bg-orange-500 opacity-0 peer-checked:opacity-100 rounded-md transition-opacity duration-200"></div>
        <svg
          className="absolute w-3 h-3 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
    </div>
    </>
  )
}
export default LabelInput;
export {Checkbox}
