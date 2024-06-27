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
                            className={` 
                                ${
                                    isError(errorField) ? "border-red-500" : ""
                                }`
                            }
                            {...textAreaProps}
                        
                    />
                    
                    {isError(errorField) && <ErrorMessage field={errorField} />}
                    <span
                        className={`absolute left-5 -top-[200px] px-2 font-semibold text-opacity-80 bg-white
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