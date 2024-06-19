import { ReactNode } from "react"
import { ErrorMessage, isError } from "./ErrorMessage"

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string,
    errorField?: string | undefined,
}

const TextArea: React.FC<Props> = (props) => {
    const {label, errorField, children, ...textAreaProps} = props
    return(
        <>
                <label className="relative font-semibold">
                    <textarea
                            className={`border border-1 border-gray-300 w-full p-5 h-[200px] mt-10 mb-1 rounded-md placeholder:font-normal
                                hover:shadow-md duration-500 focus:border-gray-500 focus:shadow-md focus:duration-500 outline-none 
                                ${
                                    isError(errorField) ? "border-red-500" : ""
                                }`
                            }
                        
                    />
                    
                    {isError(errorField) && <ErrorMessage field={errorField} />}
                    <span
                        className={`absolute left-5 -top-[200px] px-2 font-normal text-opacity-80 bg-white
                            text-xs 
                            ${
                                isError(errorField) ? "text-red-500 font-semibold" : ""
                            }`
                        }
                    >
                        {label}
                    </span>
                </label>
        </>
    )
}

export default TextArea