import React from "react";
import { isError, ErrorMessage } from "./ErrorMessage";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  errorField?: string | undefined;
}

const LabelInput: React.FC<Props> = (props) => {
  const { placeholder, errorField, ...inputProps } = props;

  return (
    <>
      <div className="relative">
        <label className="relative font-semibold block">
          <input
            className={`block w-full rounded-md shadow-sm border border-gray-300
            text-[16px] hover:shadow-md focus:shadow-md focus:border-gray-500
            focus:border-1 disabled:bg-gray-200
            px-4 py-3 mt-5 mb-1 duration-200 outline-none
            peer bg-inherit placeholder-transparent ${
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

export default LabelInput;
