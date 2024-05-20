import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button (props:Props) {
    return (
        <>
            <button
                className="border-2 border-solid border-orange-500 bg-orange-500 text-white py-3 px-6 rounded-md"
                {...props}
            ></button>
        </>
    )
}