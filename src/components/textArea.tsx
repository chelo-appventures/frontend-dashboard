
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea (
    {
        label,
        value,
        handleValue,
        props
    }:
    {
        label:string,
        value: string,
        handleValue: Function,
        props: Props
    }) {
    return(
        <>
            <label className="relative font-semibold">
                <textarea name="description" id="" placeholder="Describa, ej. Ski, bicicleta, instrumentos..."
                    className="border border-1 border-gray-300 w-full p-5 h-[200px] my-10 rounded-md placeholder:font-normal
                    hover:shadow-md duration-500 focus:border-gray-500 focus:shadow-md focus:duration-500 outline-none"
                    onBlur={(e: any) => {
                        handleValue(e.currentTarget.value)
                    }}
                    {...props}
                    >
                </textarea>
                <span
                    className="absolute left-5 -top-[235px] px-2 font-normal text-opacity-80 bg-white
                    text-xs"
                >
                {label}
                </span>
            </label>
        </>
    )
}