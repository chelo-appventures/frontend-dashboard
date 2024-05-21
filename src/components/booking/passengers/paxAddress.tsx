import { LabelInput } from "@/components/input";
import Separator from "@/components/separator";

export default function PaxAddress ({checked}:{checked:boolean}) {
    return (
        <>
            <Separator title="Dirección (por donde pasaremos a buscarte)" />
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md " checked={checked}
                />
                <label 
                    className="text-black p-2"
                >
                    Es la misma dirección que la anterior
                </label>
            </div>
            <div hidden={checked}>
                <div className="flex flex-row ">
                    <div className="w-1/2">
                        <div className="flex justify-between">
                            <div className="w-1/2 mx-1">
                                <LabelInput type="text" placeholder="Ciudad" disabled />
                            </div>
                            <div className="w-1/2 mx-1">
                                <LabelInput type="text" placeholder="Barrio" />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2"></div>
                </div>
                <div className="flex flex-row">
                    <div className="w-1/2 mr-2">
                        <LabelInput placeholder="Calle" type="text"/>
                    </div>
                    <div className="flex w-1/2 justify-between">
                        <div className="w-1/2 mx-1">
                            <LabelInput type="text" placeholder="Número" />
                        </div>
                        <div className=" w-1/2 mx-1">
                            <LabelInput type="text" placeholder="Depto./Timbre/Otro" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function SameAddress () {
    return (
        <>
            <Separator title="Dirección (por donde pasaremos a buscarte)" />
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md "
                />
                <label 
                    className="text-black p-2"
                >
                    Es la misma dirección que la anterior
                </label>
            </div>
        </>
    )
}