'use client'
import { useRouter } from 'next/navigation'
import AVCounter, { IconType} from "./counter";
import { LabelInput } from "./input";
import { RadioButtonComponent } from "./radioButton";
import Select from "./select";
import Separator from "./separator";
import TextArea from "./textArea";
import Image from 'next/image';
import React, {  useState } from 'react';
import { Inter } from "next/font/google";
import exclamation from "@/ui/icons/exclamation.svg";

export const passengerContext = React.createContext("")

const inter = Inter({ subsets: ["latin"] });

export default function AVForm () {
  const [roundTrip, setRoundTrip] = useState(true)
  const [transferType, setTransferType] = useState('particular')
  const [fullTime, setFullTime] = useState(true)
  const [departureCity, setDepartureCity] = useState("")
  const [departureDate, setDepartureDate] = useState("")
  const [departureTime, setDepartureTime] = useState("")  
  const [returnCity, setReturnCity] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [returnTime, setReturnTime] = useState("")
  const [adult, setAdult] = useState(0)
  const [kid, setKid] = useState(0)
  const [baby, setBaby] = useState(0)
  const [puppieSmall, setPuppieSmall] = useState(0)
  const [puppieBig, setPuppieBig] = useState(0)  
  const [carryOn, setCarryOn] = useState(0)
  const [bag23, setBag23] = useState(0)
  const [specialQuantity, setSpecialQuantity] = useState(0)
  const [specialDetail, setSpecialDetail] = useState("")
  
  
  
  const router = useRouter();
  const redirect = (path: string) => {
      router.push(path);
    }

  const submitHandler = (e: any) => {

    const data = {
      tripType: {
        transferType,
        roundTrip
      },
      fullTime,
      departure:{
        city:departureCity,
        date:departureDate,
        time:departureTime,
      },
      return: {
        city:returnCity,
        date:returnDate,
        time:returnTime
        
      },
      passengers: {
        adult,
        kid,
        baby,
        pets: {
          small:puppieSmall,
          big:puppieBig
        }
      },
      luggage: {
        carryOn,
        bag23,
        special: {
          quantity:specialQuantity,
          detail:specialDetail
        }
      }
    }

    e.preventDefault();
    console.log('AVFORM >> SubmitHandler');
    console.log(data)
    redirect('/booking/passengers');
  }

    

    

    return(
        <div 
          className="bg-white rounded-md shadow-lg flex flex-col items-center 
          -m-20 border border-solid w-[1052px]">
          <h3 
            className="font-bold text-[#10004F] text-[32px] my-6 w-10/12">
            Cotiza tu viaje ahora
          </h3>
          <form action="#" className="py-8 text-sm text-gray-500 font-bold w-11/12">
            <Separator title="Tipo de viaje"/>
            <div className="flex items-center">
              <div className="w-1/2">
              <div>
            <div className="relative font-semibold">
                <select
                    name="travel_type"
                    id="travel_type"
                    className="w-full rounded-md shadow-sm border border-gray-300
                    text-[16x] hover:shadow-md focus:shadow-md focus:border-gray-500
                    focus:border-1 px-4 py-3 my-5 duration-200 outline-none 
                    bg-inherit"
                    onChange={ (e: any) => {
                      setTransferType(e.currentTarget.value)
                    }}  
                    >
                    <option value="particular" label="Traslado Particular" />
                    <option value="corporative" label="Traslado Corporativo" />
                    <option value="nat_airport" label="Aeroportuario Nacional" />
                    <option value="int_airport" label="Aeroportuario Internacional" />
                </select>
                <span
                    className="absolute left-0 top-3 bg-white mx-3 px-2
                    peer focus:text-gray-300 duration-200 text-[16px]
                    text-xs font-normal" 
                >
                    Tipo de traslado
                </span>
            </div>
        </div>
              </div>
              <div className="flex">
                <RadioButtonComponent name='type' label="Ida y vuelta" value="true" checked={roundTrip}
                  onChange={ () => {
                    setRoundTrip(true)

                  }}/>
                <RadioButtonComponent name='type' label="Solo ida" value="false" checked={!roundTrip} 
                onChange={ () => {
                  setRoundTrip(false)
                }}/>
              </div>
            </div>
            
            
            {
              roundTrip && 
              <>
                <div>
                  <Separator title="Disponibilidad de vehículos" />
                    <div className="py-6">
                      <div className="flex">
                        <RadioButtonComponent name='disp' label="Solo durante la ida/vuelta" value="false" checked={!fullTime}
                          onChange={(e:any) => {
                            setFullTime(false)
                          }}/>
                        <RadioButtonComponent name='disp' label="100% del tiempo" value="true" checked={fullTime}
                        onChange={(e:any) => {
                          setFullTime(true)
                        }}/>
                      </div>
                    </div>
                    {fullTime && <FullTimeMessage />}
                </div>
              </>
            }
            
            <Separator title="Salida / Regreso" />
            <div className="flex flex-row pr-4 pt-3">
                <div className="w-1/2 mr-2">
                  <LabelInput type="search" placeholder="Salida" 
                    onChange={(e:any) => {
                      setDepartureCity(e.currentTarget.value)
                    }}/>
                </div>
                <div className="w-1/2 ml-2">
                  <LabelInput type="search" placeholder="Destino" 
                    onChange={(e:any) => {
                      setReturnCity(e.currentTarget.value)
                    }}
                  />
                </div>
            </div>
            <div className="flex">
                <div className="w-1/4 flex flex-col pr-4 pt-1">
                  <div>
                    <LabelInput type='date' placeholder='Fecha de partida' 
                      onChange={(e:any) => {
                        setDepartureDate(e.currentTarget.value)
                      }}  
                    />
                  </div>
                </div>
                <div className="w-1/4 flex flex-col pr-4 pt-1">
                  <div>
                    <LabelInput type='time' placeholder='Hora de partida' 
                      onChange={(e:any) => {
                        setDepartureTime(e.currentTarget.value)
                      }} 
                    />
                  </div>
                </div>
                <div className="w-1/4 flex flex-col pr-4 pt-1">
                  <div>
                    <LabelInput type='date' placeholder='Fecha de regreso' 
                      onChange={(e:any) => {
                      setReturnDate(e.currentTarget.value)
                    }} 
                    />
                  </div>
                </div>
                <div className="w-1/4 flex flex-col pr-4 pt-1">
                  <div>
                    <LabelInput type='time' placeholder='Hora de regreso' 
                      onChange={(e:any) => {
                        setReturnTime(e.currentTarget.value)
                      }} 
                    />
                  </div>
                </div>
            </div>
            <Separator title="Pasajeros" />
            <div className="flex flex-column justify-left">
                <AVCounter 
                  icon={"adult" as IconType}
                  title='Adulto'
                  subtitle='18 o más años'
                  value={adult}
                  handleValue={setAdult}
                />
                <AVCounter 
                  icon={"child" as IconType}
                  title='Niño'
                  subtitle='De 3 a 17 años'
                  value={kid}
                  handleValue={setKid}
                />
                  <AVCounter 
                  icon={"baby" as IconType}
                  title='Bebé'
                  subtitle='Hasta 3 años'
                  value={baby}
                  handleValue={setBaby}
                />

            </div>
            <div className="flex flex-column justify-left my-4">
                <AVCounter 
                  icon={"puppySmall" as IconType}
                  title='Hasta 8kg'
                  subtitle='Mascota en falda'
                  value={puppieSmall}
                  handleValue={setPuppieSmall}
                />
                <AVCounter 
                  icon={"puppyBig" as IconType}
                  title='Mas de 8kg'
                  subtitle='Mascota en asiento'
                  value={puppieBig}
                  handleValue={setPuppieBig}
                />
            </div>
            <Separator title="Equipaje" />
            <div className="flex flex-column justify-left">
                <AVCounter 
                  icon={"carry_1" as IconType}
                  title='Carry-on 15kg'
                  alert
                  subtitle='El número de maletas definen el tipo de vehículo'
                  value={carryOn}
                  handleValue={setCarryOn}
                />
                <AVCounter 
                  icon={"bag_1" as IconType}
                  title='Maleta 23kg'
                  alert
                  subtitle='El número de maletas definen el tipo de vehículo'
                  value={bag23}
                  handleValue={setBag23}
                />
                  <AVCounter 
                  icon={"special" as IconType}
                  title='Equipaje especial'
                  alert
                  subtitle='Importante detallarlos, condicionan el tipo de vehículo'
                  value={specialQuantity}
                  handleValue={setSpecialQuantity}
                />

            </div>
            <div>
              {
                specialQuantity > 0 &&
                <>
                  <label className="relative font-semibold">
                      <textarea name="description" id="" placeholder="Describa, ej. Ski, bicicleta, instrumentos..."
                          className="border border-1 border-gray-300 w-full p-5 h-[200px] my-10 rounded-md placeholder:font-normal
                          hover:shadow-md duration-500 focus:border-gray-500 focus:shadow-md focus:duration-500 outline-none"
                          onChange={(e:any) =>{
                            setSpecialDetail(e.currentTarget.value)
                          }}
                          >
                      </textarea>
                      <span
                          className="absolute left-5 -top-[235px] px-2 font-normal text-opacity-80 bg-white
                          text-xs"
                      >
                      Detalle de equipajes especiales
                      </span>
                  </label>
                </>
              }
            </div>
            <div className="flex justify-end py-4">
                <input 
                  type="button" 
                  value="Cotizar" 
                  className="border-2 border-solid border-orange-500 bg-orange-500 text-white py-3 px-6 rounded-md"
                  onClick={submitHandler}
                />
            </div>
          </form>
        </div>
    )
}

function ShowDisponibility () {
  const [fullTime, setFullTime] = useState(true)
  
  return (
    <>
    <div>
      <Separator title="Disponibilidad de vehículos" />
        <div className="py-6">
          <div className="flex">
            <RadioButtonComponent name='disp' label="Solo durante la ida/vuelta" value="false" checked={!fullTime}
              onChange={(e:any) => {
                setFullTime(false)
              }}
            />
            <RadioButtonComponent name='disp' label="100% del tiempo" value="true" checked={fullTime}
              onChange={(e:any) => {
                setFullTime(true)
              }}
            />
          </div>
        </div>
        {fullTime && <FullTimeMessage />}
    </div>
    </>
  )
}

function FullTimeMessage () {
  return (
    <>
      <div className={`${inter.className} border border-[#4658DF] text-[#10004f] rounded-lg px-4 py-6 text-[16px] font-normal`}>
        <p className='text-[18px] font-bold ' >Importante:</p>
        <p className='mt-2 '>El o los vehículos y sus condutores estarán a disposición durante todo el viaje, incluyendo hasta 50km de recorrido libre sin cargo por hora esperada (no inlcuye posibles peajes u otros cargos)</p>

        <div className='border border-[#4658DF] rounded-lg bg-[#D9DDF8] mt-4 p-2 flex flex-row'>
          <Image src={exclamation} alt="exclamation" className='m-2' />
          <p>Si las necesidades del viaje excedieran este tope emitiremos una factura posterior con este detalle. El valor del km extra es de $300</p>
        </div>
      </div>
    </>
  )
}