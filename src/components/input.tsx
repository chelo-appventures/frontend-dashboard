import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}


export default function Input( props: Props) {
  return (
    <div>
      <input 
        className="block w-full rounded-md shadow-sm border-0 ring-1 ring-inset ring-gray-300
        placeholder:text-gray-400 placeholder:text-[14px] text-[16px] focus:ring-2 focus:ring-inset
        sm:text-sm sm:leading-6 px-3 py-3 my-5 focus:shadow-md "
        {...props} 
      />
    </div>
  )
}


export function LabelInput (props: Props) {
  return (
    <div>
      <label className="relative font-semibold">
        <input 
          required
          className="block w-full rounded-md shadow-sm border border-gray-300
          text-[16px] hover:shadow-md focus:shadow-md focus:border-gray-500
          focus:border-1 disabled:bg-gray-200
          px-4 py-3 my-5 duration-200 outline-none
          peer  bg-inherit placeholder-transparent" 
          {...props} 
        />
        <span 
          className="absolute left-0 top-3 font-normal text-opacity-80 bg-white mx-3 px-2
          peer focus:text-gray-300 duration-200 text-[16px]
          peer-focus:text-xs peer-focus:font-normal peer-focus:-translate-y-5 
          peer-valid:text-xs peer-valid:-translate-y-5 peer-disabled:-translate-y-5 peer-disabled:bg-inherit"
        >
          {props.placeholder}
        </span>
      </label>
    </div>
  )
}

  

