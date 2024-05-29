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
import exclamation from "@/ui/icons/exclamation.svg"

const inter = Inter({ subsets: ["latin"] });

export default function AVForm () {
    const router = useRouter();
    const redirect = (path: string) => {
      router.push(path);
    }

    const submitHandler = (e: any) => {
      e.preventDefault();
      console.log('AVFORM >> SubmitHandler');
      redirect('/booking/passengers');
    }

    const [travelType, setTravelType] = useState('idaVuelta')
    
    const isSelected = (value: string): boolean => travelType === value
    const handlerRadioChange = (e: React.ChangeEvent<HTMLInputElement> ) : void => {
      console.log(travelType)
      setTravelType(e.currentTarget.value)
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
                <Select />
              </div>
              <div className="flex">
                <RadioButtonComponent name='type' label="Ida y vuelta" value="idaVuelta" checked={isSelected('idaVuelta')}
                  onChange={handlerRadioChange}/>
                <RadioButtonComponent name='type' label="Solo ida" value="ida" checked={isSelected('ida')} 
                onChange={handlerRadioChange}/>
              </div>
            </div>

            {travelType === 'idaVuelta' && <ShowDisponibility /> }
            
            <Separator title="Salida / Regreso" />
            <div className="flex flex-row pr-4 pt-3">
                <div className="w-1/2 mr-2">
                  <LabelInput type="search" placeholder="Salida" />
                </div>
                <div className="w-1/2 ml-2">
                  <LabelInput type="search" placeholder="Destino" />
                </div>
            </div>
            <div className="flex">
                <div className="w-1/4 flex flex-col pr-4 pt-3">
                    <label htmlFor="init_date">Fecha de partida</label>
                    <input type="date" name="init_date" id="init_date" className="border rounded-md p-2"/>
                </div>
                <div className="w-1/4 flex flex-col pr-4 pt-3">
                    <label htmlFor="init_time">Hora de partida</label>
                    <input type="time" name="init_time" id="init_time" className="border rounded-md p-2"/>
                </div>
                <div className="w-1/4 flex flex-col pr-4 pt-3">
                    <label htmlFor="final_date">Fecha de regreso</label>
                    <input type="date" name="final_date" id="final_date" className="border rounded-md p-2"/>
                </div>
                <div className="w-1/4 flex flex-col pr-4 pt-3">
                    <label htmlFor="final_time">Hora de regreso</label>
                    <input type="time" name="final_time" id="final_time" className="border rounded-md p-2"/>
                </div>
            </div>
            <Separator title="Pasajeros" />
            <div className="flex flex-column justify-left">
                <AVCounter 
                  icon={"adult" as IconType}
                  title='Adulto'
                  subtitle='18 o más años'
                />
                <AVCounter 
                  icon={"child" as IconType}
                  title='Niño'
                  subtitle='De 3 a 17 años'
                />
                  <AVCounter 
                  icon={"baby" as IconType}
                  title='Bebé'
                  subtitle='Hasta 3 años'
                />

            </div>
            <div className="flex flex-column justify-left my-4">
                <AVCounter 
                  icon={"puppySmall" as IconType}
                  title='Hasta 8kg'
                  subtitle='Mascota en falda'
                />
                <AVCounter 
                  icon={"puppyBig" as IconType}
                  title='Mas de 8kg'
                  subtitle='Mascota en asiento'
                />
            </div>
            <Separator title="Equipaje" />
            <div className="flex flex-column justify-left">
                <AVCounter 
                  icon={"carry_1" as IconType}
                  title='Carry-on 15kg'
                  alert
                  subtitle='El número de maletas definen el tipo de vehículo'
                />
                <AVCounter 
                  icon={"bag_1" as IconType}
                  title='Maleta 23kg'
                  alert
                  subtitle='El número de maletas definen el tipo de vehículo'
                />
                  <AVCounter 
                  icon={"special" as IconType}
                  title='Equipaje especial'
                  alert
                  subtitle='Importante detallarlos, condicionan el tipo de vehículo'
                />

            </div>
            <div>
                <TextArea label="Detalle equipajes epseciales"/>
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
  const [disponibility, setDisponibility] = useState('travelOnly')
  const isSelected = (value: string): boolean => disponibility === value
  const handlerRadioChange = (e: React.ChangeEvent<HTMLInputElement> ) : void => {
      setDisponibility(e.currentTarget.value)
    }
  
  return (
    <>
    <div>
      <Separator title="Disponibilidad de vehículos" />
        <div className="py-6">
          <div className="flex">
            <RadioButtonComponent name='disp' label="Solo durante la ida/vuelta" value="travelOnly" checked={isSelected('travelOnly')}
              onChange={handlerRadioChange}/>
            <RadioButtonComponent name='disp' label="100% del tiempo" value="allTime" checked={isSelected('allTime')} 
            onChange={handlerRadioChange}/>
          </div>
        </div>
        {disponibility === 'allTime' && <AllTimeMessage />}
    </div>
    </>
  )
}

function AllTimeMessage () {
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