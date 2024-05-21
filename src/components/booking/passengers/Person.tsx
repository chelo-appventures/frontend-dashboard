import Separator from "@/components/separator"
import { LabelInput } from "@/components/input";

export default function Person () {
    return (
        <>
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md "
                />
                <label 
                    className="text-black p-2"
                >
                    Comprar por empresa
                </label>
            </div>
            <div className="flex flex-row ">
                <div className="w-1/2 mr-2">
                    <LabelInput placeholder="Nombre"/>
                </div>
                <div className="w-1/2 ml-2">
                    <LabelInput placeholder="Apellido"/>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2 flex flex-row">
                    <div className="w-1/3">
                        <div>
                            <label className="relative font-normal" >
                                <select 
                                    className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                    hover:shadow-md focus:shadow-md outline-none focus:border-black">
                                    <option value="dni">DNI</option>
                                    <option value="passport">Pasaporte</option>
                                    <option value="ci">CI (URU)</option>
                                    <option value="rut">RUT (CHI)</option>
                                </select>
                                <span 
                                    className="absolute text-xs left-2 -top-2 bg-white  px-2"
                                    >
                                    Documento
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="w-3/4">
                        <div className="ml-2 mr-4">

                            <LabelInput placeholder="Número de documento" />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div>
                        <label className="relative font-normal" >
                            <select 
                                className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                hover:shadow-md focus:shadow-md outline-none focus:border-black">
                                <option value="arg">Argentina</option>
                                <option value="bra">Brasil</option>
                                <option value="chi">Chile</option>
                                <option value="uru">Uruguay</option>
                                <option value="bol">Bolivia</option>
                                <option value="col">Colombia</option>
                                <option value="ven">Venezuela</option>
                            </select>
                            <span 
                                className="absolute text-xs left-2 -top-2 bg-white  px-2
                                ">
                                País de emisión
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full justify-between">
                <div className="edad w-3/12">
                    <label className="relative font-normal" >
                        <select 
                            className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                            hover:shadow-md focus:shadow-md outline-none focus:border-black">
                            <option value="adult">Adulto</option>
                            <option value="child">Niño</option>
                            <option value="baby">Bebé</option>
                        </select>
                        <span 
                            className="absolute text-sm left-2 top-2 bg-white  px-2
                            ">
                            Edad
                        </span>
                    </label>
                </div>
                <div className="sexo flex items-center w-9/12">
                    <input type="radio" name="sexo" id="man" className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]" />
                    <label htmlFor="man">Hombre</label>
                    <input type="radio" name="sexo" id="woman" className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]"/>
                    <label htmlFor="man">Mujer</label>
                    <input type="radio" name="sexo" id="nores" className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]"/>
                    <label htmlFor="man">Prefiero no decirlo</label>
                </div>
            </div>
            <div>
                <Separator title="Datos de contacto" />
            </div>
            <div className="flex flex-row">
                <div className="w-1/2 flex flex-row">
                    <div className="w-1/3">
                        <div>
                            <label className="relative font-normal" >
                                <select 
                                    className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                    hover:shadow-md focus:shadow-md outline-none focus:border-black">
                                    <option value="54" selected>+54</option>
                                    <option value="55">+55</option>
                                    <option value="56">+56</option>
                                    <option value="57">+57</option>
                                </select>
                                <span 
                                    className="absolute text-xs left-2 -top-2 bg-white  px-2
                                    ">
                                    Código de Área
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="w-3/4">
                        <div className="ml-2 mr-4">

                            <LabelInput placeholder="Número de teléfono" />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <LabelInput type="text" placeholder="Correo Electrónico" />
                </div>
            </div>
            
        </>
    )
}