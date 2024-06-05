import Separator, { SeparatorPersona, SeparatorResponsible } from "@/components/separator"
import { LabelInput } from "@/components/input";
import React, { useState } from "react";
import Alert from "@/components/alert";
import Important from "@/components/important";

export default function Person ({key}:{key:string}) {
    console.log(key)
    const personNumber = key

    return (
        <>
            <SeparatorPersona title= {`Pasajero ${personNumber}`}/>
            <IsResponsible />
            <SameAddress />
        </>
    )
}

export function Responsible() {
    

    return (
        <>
            <SeparatorResponsible title="Responsable del viaje" />
            <Alert />
            <IsCompany /> 
            <PersonalData />
            <Address />
            <Important />
        </>
    )
}

function Company() {
    return (
        <div className="flex flex-row">
            <div className="w-1/2 mr-2">
                <LabelInput type="text" placeholder="Empresa" />
            </div>
            <div className="w-1/2 ml-2">
                <LabelInput type="text" placeholder="CUIT" />
            </div>
        </div>
    )
}

function PersonalData () {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [identificationType, setIdentificationType] = useState("")
    const [identificationNumber, setIdentificationNumber] = useState("")
    const [identificationCountry, setIdentificationCountry] = useState("")
    return (
        <>
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
            <ContactData />
        </>
    )
}

function ContactData () {
    return (
        <>
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

function SameAddress () {
    const [sameAdress, setSameAdress] = useState(true)
    const handlerCheckbox = (e: any) => {
        console.log(e.currentTarget.checked)
        setSameAdress(e.currentTarget.checked)
    }
    return (
        <>
            <Separator title="Dirección (por donde pasaremos a buscarte)" />
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md " 
                    checked={sameAdress}
                    onChange={handlerCheckbox}
                />
                <label 
                    className="text-black p-2"
                >
                    Es la misma dirección que la anterior
                </label>
            </div>

            { !sameAdress && <Address /> }
            
        </>
    )
}

function Address () {
    return (
        <>
            <div>
                <Separator title="Dirección (por donde pasaremos a buscarte)" />
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

function IsCompany() {
    const [isCompany, setIsCompany] = useState(false)
    const handlerCheckbox = (e : any) => {
        console.log(e.currentTarget.checked)
        setIsCompany(e.currentTarget.checked)
    }

    return (
        <>
            <div className="flex flex-row items-center">
                <input 
                    type="checkbox" 
                    className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md"
                    checked={isCompany}
                    onChange={handlerCheckbox}
                />
                <label 
                    className="text-black p-2"
                >
                    Comprar por empresa
                </label>
            </div>
            {isCompany && <Company />}
        </>
    )
}

function IsResponsible() {
    const [isResponsible, setIsResponsible] =useState(false)
    const handlerCheckbox = ( e:any ) => {
        setIsResponsible(e.currentTarget.checked)
    }
    return (
        <>
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md"
                    checked={isResponsible}
                    onChange={handlerCheckbox}
                />
                <label 
                    className="text-black p-2"
                >
                    Es el responsable del viaje
                </label>
            </div>
            {!isResponsible && <PersonalData /> }
        </>
    )
}