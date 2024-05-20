

export default function Select () {
    return (
        <div>
            <div className="relative font-semibold">
                <select
                    name="travel_type"
                    id="travel_type"
                    className="w-full rounded-md shadow-sm border border-gray-300
                    text-[16x] hover:shadow-md focus:shadow-md focus:border-gray-500
                    focus:border-1 px-4 py-3 my-5 duration-200 outline-none 
                    bg-inherit"
                    >
                    <Option value="particular" title="Traslado Particular" />
                    <Option value="corporative" title="Traslado Corporativo" />
                    <Option value="nat_airport" title="Aeroportuario Nacional" />
                    <Option value="int_airport" title="Aeroportuario Internacional" />
                </select>
                <span
                    className="absolute left-0 top-3 bg-white mx-3 px-2
                    peer focus:text-gray-300 duration-200 text-[16px]
                    text-sm font-normal" 
                >
                    Tipo de traslado
                </span>
            </div>
        </div>
    )
}

function Option ({value, title}:{value:string, title:string}) {
    return (
        <option 
            value={value}
            className="py-3"
        >
            {title}
        </option>
    )
}