'use client'
import Alert from "@/components/alert";
import HeaderAV from "@/components/header";
import Hero from "@/components/hero";
import Important from "@/components/important";
import { LabelInput } from "@/components/input";
import Separator, { SeparatorPersona, SeparatorResponsible } from "@/components/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";    
import { useState } from "react";

// INTERFACES
interface Passenger  {
    first_name:string,
    last_name:string,
    identification: {
        type:string,
        number:string,
        country:string
    },
    age:string,
    gender:string,
    contact: {
        country_code:string,
        phone_number:string,
        email:string,
        address: {
            street:string,
            number:string,
            city:string,
            neighborhood:string,
            other:string
        }
    }
}
interface Responsible  { 
    company: {
        name: string,
        cuit: string
    },
    first_name:string,
    last_name:string,
    identification: {
        type:string,
        number:string,
        country:string
    },
    age:string,
    gender:string,
    contact: {
        phone_number:string,
        email:string,
        address: {
            street:string,
            number:string,
            city:string,
            neighborhood:string,
            other:string
        }
    }
}
interface Agreements {
    terms_condition:boolean,
    newsletter:boolean
}

// INICIALIZADORES DE LAS INTERFACES
const dataPassenger = {
    first_name:"",
    last_name:"",
    identification: {
        type:"",
        number:"",
        country:""
    },
    age:"",
    gender:"",
    contact: {
        country_code:"",
        phone_number:"",
        email:"",
        address: {
            street:"",
            number:"",
            city:"",
            neighborhood:"",
            other:""
        }
    }
}
const dataResponsible = {
    company: {
        name:"",
        cuit:""
    },
    first_name:"",
    last_name:"",
    identification: {
        type:"",
        number:"",
        country:""
    },
    age:"",
    gender:"",
    contact: {
        phone_number:"",
        email:"",
        address: {
            street:"",
            number:"",
            city:"",
            neighborhood:"",
            other:""
        }
    }
}
const dataAgreements = {
    terms_condition: false,
    newsletter: false
}

const numPeople = 2
const initialPassengers = Array.from( {length:numPeople}, ( _ ) => (dataPassenger))

export default function Passengers() {
    const [responsible, setResponsible] = useState<Responsible>(dataResponsible)
    const [passengers, setPassengers]:any = useState<Passenger[]>(initialPassengers)
    const [agreements, setAgreements] = useState<Agreements>(dataAgreements)
    const [isResponsible, setIsResponsible] =useState(false)
    const [isResponsibleAddress, setIsResponsibleAddress] = useState(true)
    const [isCompany, setIsCompany] = useState(false)


    const router = useRouter();
    const redirect = (path: string) => {
        router.push(path);
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        // console.log('AVFORM >> SubmitHandler');
        // redirect('/booking/travel_options');
        const data = {
            responsible: {...responsible},
            passengers: {...passengers},
            agreements: {...agreements}
        }
        console.log(data)
        
    }
        

    
    
    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-gray-300 max-h-screen">
                <div className=" bg-[#F4F4F7] w-[1280px] min-h-full flex flex-col">
                    <HeaderAV />
                    <div className="flex flex-col items-center justify-center">
                        <Hero />
                        <div
                            className="bg-white rounded-md shadow-lg flex flex-col items-center 
                            -m-20 border border-solid w-3/4"
                            >
                            <h3 className="font-bold text-[#10004F] text-[32px] my-6 w-10/12">
                                Datos de los pasajeros
                            </h3>
                            <form className="py-8 text-sm text-gray-500 font-bold w-10/12">
                            <>
                                <SeparatorResponsible title="Responsable del viaje" />
                                <Alert />
                                {/* RESPONSABLE DE LA RESERVA */}
                                <>
                                    <div className="flex flex-row items-center">
                                        <input 
                                            type="checkbox" 
                                            className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                                            focus:outline-none duration-500 hover:shadow-md"
                                            checked={isCompany}
                                            onChange={ (e:any) => setIsCompany(e.currentTarget.checked) }
                                        />
                                        <label 
                                            className="text-black p-2"
                                        >
                                            Comprar por empresa
                                        </label>
                                    </div>
                                    {
                                        isCompany && 
                                        <div className="flex flex-row">
                                            <div className="w-1/2 mr-2">
                                                <LabelInput type="text" placeholder="Empresa" />
                                            </div>
                                            <div className="w-1/2 ml-2">
                                                <LabelInput type="text" placeholder="CUIT" />
                                            </div>
                                        </div>
                                    }
                                </>
                                {/* datos del responsable */}
                                <>
                                    <div className="flex flex-row ">
                                        {/* NAME */}
                                        <div className="w-1/2 mr-2">
                                            <LabelInput placeholder="Nombre" 
                                                onChange={( e:any ) => {
                                                    const newResponsible = {
                                                        ...responsible,
                                                        first_name: e.currentTarget.value
                                                    }
                                                    setResponsible(newResponsible)
                                                }}
                                            />
                                        </div>
                                        {/* LAST NAME */}
                                        <div className="w-1/2 ml-2">
                                            <LabelInput placeholder="Apellido"
                                                onChange={( e:any ) => {
                                                    const newResponsible = {
                                                        ...responsible,
                                                        last_name: e.currentTarget.value
                                                    } 
                                                    setResponsible(newResponsible)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-1/2 flex flex-row">
                                            <div className="w-1/3">
                                                {/* IDENTIFICATION TYPE */}
                                                <div>
                                                    <label className="relative font-normal" >
                                                        <select 
                                                            className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                                            hover:shadow-md focus:shadow-md outline-none focus:border-black"
                                                            onChange={( e:any ) => {
                                                                const newResponsible = {
                                                                    ...responsible,
                                                                    identification : {
                                                                        ...responsible.identification,
                                                                        type: e.currentTarget.value
                                                                    }
                                                                } 
                                                                setResponsible(newResponsible)
                                                            }}
                                                        >
                                                            <option disabled selected></option>
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
                                            {/* IDENTIFICATION NUMBER */}
                                            <div className="w-3/4">
                                                <div className="ml-2 mr-4">
                                                    <LabelInput type="text" placeholder="Número de documento" 
                                                        onChange={( e:any ) => {
                                                            const newResponsible = {
                                                                ...responsible,
                                                                identification : {
                                                                    ...responsible.identification,
                                                                    number: e.currentTarget.value
                                                                }
                                                            } 
                                                            setResponsible(newResponsible)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* IDENTIFICATION COUNTRY */}
                                        <div className="w-1/2">
                                            <div>
                                                <label className="relative font-normal" >
                                                    <select 
                                                        className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                                        hover:shadow-md focus:shadow-md outline-none focus:border-black"
                                                        onChange={( e:any ) => {
                                                            const newResponsible = {
                                                                ...responsible,
                                                                identification : {
                                                                    ...responsible.identification,
                                                                    country: e.currentTarget.value
                                                                }
                                                            } 
                                                            setResponsible(newResponsible)
                                                        }}
                                                        >
                                                        <option disabled selected></option>
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
                                        {/* AGE */}
                                        <div className="edad w-3/12">
                                            <label className="relative font-normal" >
                                                <select 
                                                    className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                                    hover:shadow-md focus:shadow-md outline-none focus:border-black"
                                                    onChange={( e:any ) => {
                                                        const newResponsible = {
                                                            ...responsible,
                                                            age: e.currentTarget.value
                                                        } 
                                                        setResponsible(newResponsible)
                                                    }}
                                                    >
                                                    <option disabled selected></option>
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
                                        {/* GENDER */}
                                        <div className="sexo flex items-center w-9/12">
                                            <input type="radio" name="sexo" id="man" value="man" className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]" 
                                                onChange={( e:any ) => {
                                                    const newResponsible = {
                                                        ...responsible,
                                                        gender: e.currentTarget.value
                                                    } 
                                                    setResponsible(newResponsible)
                                                }}
                                            />
                                            <label htmlFor="man">Hombre</label>
                                            <input type="radio" name="sexo" id="woman" value="woman" className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]"
                                                onChange={( e:any ) => {
                                                    const newResponsible = {
                                                        ...responsible,
                                                        gender: e.currentTarget.value
                                                    } 
                                                    setResponsible(newResponsible)
                                                }}
                                            />
                                            <label htmlFor="man">Mujer</label>
                                            <input type="radio" name="sexo" id="nores" value="nores" className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]"
                                                onChange={( e:any ) => {
                                                    const newResponsible = {
                                                        ...responsible,
                                                        gender: e.currentTarget.value
                                                    } 
                                                    setResponsible(newResponsible)
                                                }}
                                            />
                                            <label htmlFor="man">Prefiero no decirlo</label>
                                        </div>
                                    </div>
                                </>                        
                                <>
                                    <div> 
                                        <Separator title="Datos de contacto" />
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-1/2 flex flex-row">
                                            <div className="w-1/3">
                                                {/* AREA CODE */}
                                                <div>
                                                    <label className="relative font-normal" >
                                                        <select 
                                                            className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                                            hover:shadow-md focus:shadow-md outline-none focus:border-black"
                                                            onChange={( e:any ) => {
                                                                const newResponsible = {
                                                                    ...responsible,
                                                                    contact: {
                                                                        ...responsible.contact,
                                                                        country_code: e.currentTarget.value
                                                                    }
                                                                } 
                                                                setResponsible(newResponsible)
                                                            }}
                                                        >
                                                            <option disabled selected></option>
                                                            <option value="54">+54</option>
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
                                                {/* PHONE NUMBER */}
                                                <div className="ml-2 mr-4">
                                                    <LabelInput placeholder="Número de teléfono" 
                                                        onChange={( e:any ) => {
                                                            const newResponsible = {
                                                                ...responsible,
                                                                contact: {
                                                                    ...responsible.contact,
                                                                    phone_number: e.currentTarget.value
                                                                }
                                                            } 
                                                            setResponsible(newResponsible)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* EMAIL */}
                                        <div className="w-1/2">
                                            <LabelInput type="text" placeholder="Correo Electrónico" 
                                                onChange={( e:any ) => {
                                                    const newResponsible = {
                                                        ...responsible,
                                                        contact: {
                                                            ...responsible.contact,
                                                            email: e.currentTarget.value
                                                        }
                                                    } 
                                                    setResponsible(newResponsible)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                                <Separator title="Dirección (por donde pasaremos a buscarte)" />
                                <>
                                    {/* ADDRESS ================================================== */}
                                    <div>
                                        <div className="flex flex-row ">
                                            <div className="w-1/2">
                                                <div className="flex justify-between">
                                                    {/* CITY */}
                                                    <div className="w-1/2 mx-1">
                                                        <LabelInput type="text" placeholder="Ciudad" disabled 
                                                            onChange={( e:any ) => {
                                                                const newResponsible = {
                                                                    ...responsible,
                                                                    contact: {
                                                                        ...responsible.contact,
                                                                        address: {
                                                                            ...responsible.contact.address,
                                                                            city: e.currentTarget.value
                                                                        }
                                                                    }
                                                                } 
                                                                setResponsible(newResponsible)
                                                            }}
                                                        />
                                                    </div>
                                                    {/* NEIGHBORHOOD */}
                                                    <div className="w-1/2 mx-1">
                                                        <LabelInput type="text" placeholder="Barrio" 
                                                            onChange={( e:any ) => {
                                                                const newResponsible = {
                                                                    ...responsible,
                                                                    contact: {
                                                                        ...responsible.contact,
                                                                        address: {
                                                                            ...responsible.contact.address,
                                                                            neighborhood: e.currentTarget.value
                                                                        }
                                                                    }
                                                                } 
                                                                setResponsible(newResponsible)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/2"></div>
                                        </div>
                                        <div className="flex flex-row">
                                            {/* STREET */}
                                            <div className="w-1/2 mr-2">
                                                <LabelInput placeholder="Calle" type="text"
                                                    onChange={( e:any ) => {
                                                        const newResponsible = {
                                                            ...responsible,
                                                            contact: {
                                                                ...responsible.contact,
                                                                address: {
                                                                    ...responsible.contact.address,
                                                                    street: e.currentTarget.value
                                                                }
                                                            }
                                                        } 
                                                        setResponsible(newResponsible)
                                                    }}
                                                />
                                            </div>
                                            <div className="flex w-1/2 justify-between">
                                                {/* STREET NUMBER */}
                                                <div className="w-1/2 mx-1">
                                                    <LabelInput type="text" placeholder="Número" 
                                                        onChange={( e:any ) => {
                                                            const newResponsible = {
                                                                ...responsible,
                                                                contact: {
                                                                    ...responsible.contact,
                                                                    address: {
                                                                        ...responsible.contact.address,
                                                                        number: e.currentTarget.value
                                                                    }
                                                                }
                                                            } 
                                                            setResponsible(newResponsible)
                                                        }}
                                                    />
                                                </div>
                                                {/* OTHER INFO */}
                                                <div className=" w-1/2 mx-1">
                                                    <LabelInput type="text" placeholder="Depto./Timbre/Otro" 
                                                        onChange={( e:any ) => {
                                                            const newResponsible = {
                                                                ...responsible,
                                                                contact: {
                                                                    ...responsible.contact,
                                                                    address: {
                                                                        ...responsible.contact.address,
                                                                        other: e.currentTarget.value
                                                                    }
                                                                }
                                                            } 
                                                            setResponsible(newResponsible)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                <Important />
                            </>
                                {passengers.map( (passenger: Passenger, personIndex: number) => {
                                    return (
                                        // <Pax index={personIndex} passenger={passenger} key={personIndex} />
                                        <>
                                            <SeparatorPersona title= {`Pasajero ${personIndex + 1}`}/>
                                            {/* RESPONSIBLE CHECKBOX =========================================== */}
                                            <>
                                                <div className="flex items-center">
                                                    <input 
                                                        type="checkbox" 
                                                        className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                                                        focus:outline-none duration-500 hover:shadow-md"
                                                        checked={isResponsible}
                                                        onChange={( e:any ) => setIsResponsible(e.currentTarget.checked)}
                                                    />
                                                    <label 
                                                        className="text-black p-2"
                                                    >
                                                        Es el responsable del viaje
                                                    </label>
                                                </div>
                                                {/* PERSONAL DATA =========================================================================== */}
                                                {
                                                    !isResponsible && 
                                                    <>
                                                        <div className="flex flex-row ">
                                                            {/* NAME */}
                                                            <div className="w-1/2 mr-2">
                                                                <LabelInput placeholder="Nombre" 
                                                                    onChange={( e:any ) => {
                                                                        const newPassenger = {
                                                                            ...passenger, 
                                                                            first_name: e.currentTarget.value
                                                                        }
                                                                        const newList = [...passengers]
                                                                        newList[personIndex] = newPassenger
                                                                        setPassengers(newList)
                                                                        }
                                                                    }
                                                                />
                                                            </div>
                                                            {/* LAST NAME */}
                                                            <div className="w-1/2 ml-2">
                                                                <LabelInput placeholder="Apellido"
                                                                    onChange={( e:any ) => {
                                                                        const newPassenger = {
                                                                            ...passenger, 
                                                                            last_name: e.currentTarget.value
                                                                        }
                                                                        const newList = [...passengers]
                                                                        newList[personIndex] = newPassenger
                                                                        setPassengers(newList)
                                                                        }
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row">
                                                            <div className="w-1/2 flex flex-row">
                                                                <div className="w-1/3">
                                                                    {/* IDENTIFICATION TYPE */}
                                                                    <div>
                                                                        <label className="relative font-normal" >
                                                                            <select 
                                                                                className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                                                                hover:shadow-md focus:shadow-md outline-none focus:border-black"
                                                                                onChange={( e:any ) => {
                                                                                    const newPassenger = {
                                                                                        ...passenger, 
                                                                                        identification: {
                                                                                            ...passenger.identification,
                                                                                            type: e.currentTarget.value
                                                                                        }
                                                                                    }
                                                                                    const newList = [...passengers]
                                                                                    newList[personIndex] = newPassenger
                                                                                    setPassengers(newList)
                                                                                    }}
                                                                            >
                                                                                <option disabled selected></option>
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
                                                                {/* IDENTIFICATION NUMBER */}
                                                                <div className="w-3/4">
                                                                    <div className="ml-2 mr-4">
                                                                        <LabelInput type="text" placeholder="Número de documento" 
                                                                            onChange={( e:any ) => {
                                                                                const newPassenger = {
                                                                                    ...passenger, 
                                                                                    identification: {
                                                                                        ...passenger.identification,
                                                                                        number: e.currentTarget.value
                                                                                    }
                                                                                }
                                                                                const newList = [...passengers]
                                                                                newList[personIndex] = newPassenger
                                                                                setPassengers(newList)
                                                                                }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* IDENTIFICATION COUNTRY */}
                                                            <div className="w-1/2">
                                                                <div>
                                                                    <label className="relative font-normal" >
                                                                        <select 
                                                                            className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                                                            hover:shadow-md focus:shadow-md outline-none focus:border-black"
                                                                            onChange={( e:any ) => {
                                                                                const newPassenger = {
                                                                                    ...passenger, 
                                                                                    identification: {
                                                                                        ...passenger.identification,
                                                                                        country: e.currentTarget.value
                                                                                    }
                                                                                }
                                                                                const newList = [...passengers]
                                                                                newList[personIndex] = newPassenger
                                                                                setPassengers(newList)
                                                                                }}
                                                                            >
                                                                            <option disabled selected></option>
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
                                                            {/* AGE */}
                                                            <div className="edad w-3/12">
                                                                <label className="relative font-normal" >
                                                                    <select 
                                                                        className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                                                        hover:shadow-md focus:shadow-md outline-none focus:border-black"
                                                                        onChange={( e:any ) => {
                                                                            const newPassenger = {
                                                                                ...passenger, 
                                                                                age: e.currentTarget.value
                                                                            }
                                                                            const newList = [...passengers]
                                                                            newList[personIndex] = newPassenger
                                                                            setPassengers(newList)
                                                                            }}
                                                                        >
                                                                        <option disabled selected></option>
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
                                                            {/* GENDER */}
                                                            <div className="sexo flex items-center w-9/12">
                                                                <input type="radio" name="sexo" id="man" value="man" className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]" 
                                                                    onChange={( e:any ) => {
                                                                        const newPassenger = {
                                                                            ...passenger, 
                                                                            gender: e.currentTarget.value
                                                                            }
                                                                        
                                                                        const newList = [...passengers]
                                                                        newList[personIndex] = newPassenger
                                                                        setPassengers(newList)
                                                                        }}
                                                                />
                                                                <label htmlFor="man">Hombre</label>
                                                                <input type="radio" name="sexo" id="woman" value="woman" className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]"
                                                                    onChange={( e:any ) => {
                                                                        const newPassenger = {
                                                                            ...passenger, 
                                                                            gender: e.currentTarget.value
                                                                            }
                                                                        
                                                                        const newList = [...passengers]
                                                                        newList[personIndex] = newPassenger
                                                                        setPassengers(newList)
                                                                        }}
                                                                />
                                                                <label htmlFor="man">Mujer</label>
                                                                <input type="radio" name="sexo" id="nores" value="nores" className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]"
                                                                    onChange={( e:any ) => {
                                                                        const newPassenger = {
                                                                            ...passenger, 
                                                                            gender: e.currentTarget.value
                                                                            }
                                                                        
                                                                        const newList = [...passengers]
                                                                        newList[personIndex] = newPassenger
                                                                        setPassengers(newList)
                                                                        }}
                                                                />
                                                                <label htmlFor="man">Prefiero no decirlo</label>
                                                            </div>
                                                        </div>
                                                        {/* <ContactData passenger={passenger}/> */}
                                                        {/* CONTACT DATA ========================================================= */}
                                                        <>
                                                            <div> 
                                                                <Separator title="Datos de contacto" />
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <div className="w-1/2 flex flex-row">
                                                                    <div className="w-1/3">
                                                                        {/* AREA CODE */}
                                                                        <div>
                                                                            <label className="relative font-normal" >
                                                                                <select 
                                                                                    className="block border border-gray-300 rounded-md px-3 py-3 my-5 w-full
                                                                                    hover:shadow-md focus:shadow-md outline-none focus:border-black"
                                                                                    onChange={( e:any ) => {
                                                                                        const newPassenger = {
                                                                                            ...passenger, 
                                                                                            contact: {
                                                                                                ...passenger.contact,
                                                                                                country_code: e.currentTarget.value,
                                                                                                address: {
                                                                                                    ...passenger.contact.address,
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                        
                                                                                        const newList = [...passengers]
                                                                                        newList[personIndex] = newPassenger
                                                                                        setPassengers(newList)
                                                                                        }}    
                                                                                >
                                                                                    <option disabled selected></option>
                                                                                    <option value="54">+54</option>
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
                                                                        {/* PHONE NUMBER */}
                                                                        <div className="ml-2 mr-4">
                                                                            <LabelInput placeholder="Número de teléfono" 
                                                                                onChange={( e:any ) => {
                                                                                    const newPassenger = {
                                                                                        ...passenger, 
                                                                                        contact: {
                                                                                            ...passenger.contact,
                                                                                            phone_number: e.currentTarget.value,
                                                                                            address: {
                                                                                                ...passenger.contact.address,
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    
                                                                                    const newList = [...passengers]
                                                                                    newList[personIndex] = newPassenger
                                                                                    setPassengers(newList)
                                                                                    }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* EMAIL */}
                                                                <div className="w-1/2">
                                                                    <LabelInput type="text" placeholder="Correo Electrónico" 
                                                                        onChange={( e:any ) => {
                                                                            const newPassenger = {
                                                                                ...passenger, 
                                                                                contact: {
                                                                                    ...passenger.contact,
                                                                                    email: e.currentTarget.value,
                                                                                    address: {
                                                                                        ...passenger.contact.address,
                                                                                    }
                                                                                }
                                                                            }
                                                                            
                                                                            const newList = [...passengers]
                                                                            newList[personIndex] = newPassenger
                                                                            setPassengers(newList)
                                                                            }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    </>
                                                }
                                            </>
                                            <>
                                                <Separator title="Dirección (por donde pasaremos a buscarte)" />
                                                <div className="flex items-center">
                                                    {/* IS RESPONSIBLE ADDRESS CHECKBOX */}
                                                    <input 
                                                        type="checkbox" 
                                                        className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                                                        focus:outline-none duration-500 hover:shadow-md " 
                                                        checked={isResponsibleAddress}
                                                        onChange={(e: any) => setIsResponsibleAddress(e.currentTarget.checked)}
                                                    />
                                                    <label 
                                                        className="text-black p-2"
                                                    >
                                                        Es la misma dirección que la anterior
                                                    </label>
                                                </div>
                                                { 
                                                    !isResponsibleAddress && 
                                                    <>
                                                        {/* ADDRESS ================================================== */}
                                                        <div>
                                                            <div className="flex flex-row ">
                                                                <div className="w-1/2">
                                                                    <div className="flex justify-between">
                                                                        {/* CITY */}
                                                                        <div className="w-1/2 mx-1">
                                                                            <LabelInput type="text" placeholder="Ciudad" disabled 
                                                                                onChange={( e:any ) => {
                                                                                    const newPassenger = {
                                                                                        ...passenger, 
                                                                                        contact: {
                                                                                            ...passenger.contact,
                                                                                            address: {
                                                                                                ...passenger.contact.address,
                                                                                                city: e.currentTarget.value
                                                                                            },
                                                                                        }
                                                                                    }
                                                                                    
                                                                                    const newList = [...passengers]
                                                                                    newList[personIndex] = newPassenger
                                                                                    setPassengers(newList)
                                                                                    }}
                                                                            />
                                                                        </div>
                                                                        {/* NEIGHBORHOOD */}
                                                                        <div className="w-1/2 mx-1">
                                                                            <LabelInput type="text" placeholder="Barrio" 
                                                                                onChange={( e:any ) => {
                                                                                    const newPassenger = {
                                                                                        ...passenger, 
                                                                                        contact: {
                                                                                            ...passenger.contact,
                                                                                            address: {
                                                                                                ...passenger.contact.address,
                                                                                                neighborhood: e.currentTarget.value,
                                                                                            },
                                                                                        }
                                                                                    }
                                                                                    
                                                                                    const newList = [...passengers]
                                                                                    newList[personIndex] = newPassenger
                                                                                    setPassengers(newList)
                                                                                    }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-1/2"></div>
                                                            </div>
                                                            <div className="flex flex-row">
                                                                {/* STREET */}
                                                                <div className="w-1/2 mr-2">
                                                                    <LabelInput placeholder="Calle" type="text"
                                                                        onChange={( e:any ) => {
                                                                            const newPassenger = {
                                                                                ...passenger, 
                                                                                contact: {
                                                                                    ...passenger.contact,
                                                                                    address: {
                                                                                        ...passenger.contact.address,
                                                                                        street: e.currentTarget.value,
                                                                                    }
                                                                                }
                                                                            }
                                                                            const newList = [...passengers]
                                                                            newList[personIndex] = newPassenger
                                                                            setPassengers(newList)
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="flex w-1/2 justify-between">
                                                                    {/* STREET NUMBER */}
                                                                    <div className="w-1/2 mx-1">
                                                                        <LabelInput type="text" placeholder="Número" 
                                                                            onChange={( e:any ) => {
                                                                                const newPassenger = {
                                                                                    ...passenger, 
                                                                                    contact: {
                                                                                        ...passenger.contact,
                                                                                        address: {
                                                                                            ...passenger.contact.address,
                                                                                            number: e.currentTarget.value
                                                                                        }
                                                                                    }
                                                                                }
                                                                                const newList = [...passengers]
                                                                                newList[personIndex] = newPassenger
                                                                                setPassengers(newList)
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    {/* OTHER INFO */}
                                                                    <div className=" w-1/2 mx-1">
                                                                        <LabelInput type="text" placeholder="Depto./Timbre/Otro" 
                                                                            onChange={( e:any ) => {
                                                                                const newPassenger = {
                                                                                    ...passenger, 
                                                                                    contact: {
                                                                                        ...passenger.contact,
                                                                                        address: {
                                                                                            ...passenger.contact.address,
                                                                                            other: e.currentTarget.value
                                                                                        }
                                                                                    }
                                                                                }
                                                                                const newList = [...passengers]
                                                                                newList[personIndex] = newPassenger
                                                                                setPassengers(newList)
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                }
                                            </>
                                        </>
                                    )}
                                )}
                                <>
                                    <Separator title="Otros"/>
                                    <div className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                                            focus:outline-none duration-500 hover:shadow-md"
                                            onChange={ (e:any) => {
                                                const newAgreements = {
                                                    ...agreements,
                                                    terms_condition: e.currentTarget.value
                                                }
                                                setAgreements(newAgreements)
                                            }}
                                        />
                                        <label 
                                            className="text-black p-2"
                                        >
                                            Al continua con la cotización acepta los <Link href="#" className="text-orange-500 underline">Términos y Condiciones</Link> y <Link href="#" className="text-orange-500 underline">Politicas de Privacidad.</Link>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                                            focus:outline-none duration-500 hover:shadow-md"
                                            onChange={ (e:any) => {
                                                const newAgreements = {
                                                    ...agreements,
                                                    newsletter: e.currentTarget.value
                                                }
                                                setAgreements(newAgreements)
                                            }}
                                        />
                                        <label 
                                            className="text-black p-2"
                                        >
                                            Deseo recibir ofertas y novedades de Turismo Ruggeri a mi correo.
                                        </label>
                                    </div>
                                </>
                                <div className="flex my-10 items-center justify-end">
                                    <button 
                                        type="button"
                                        className="bg-orange-500 text-white text-[18px] px-7 py-4 rounded-md
                                        duration-500 hover:shadow-md" 
                                        onClick={submitHandler}
                                    >
                                        Continuar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function TermsConditions () {
    return (
        <>
            <Separator title="Otros"/>
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md "
                />
                <label 
                    className="text-black p-2"
                >
                    Al continua con la cotización acepta los <Link href="#" className="text-orange-500 underline">Términos y Condiciones</Link> y <Link href="#" className="text-orange-500 underline">Politicas de Privacidad.</Link>
                </label>
            </div>
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md "
                />
                <label 
                    className="text-black p-2"
                >
                    Deseo recibir ofertas y novedades de Turismo Ruggeri a mi correo.
                </label>
            </div>
        </>
    )
}

