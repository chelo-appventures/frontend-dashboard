import { isCompositeComponentWithType } from "react-dom/test-utils";
import AVCounter, { IconType} from "./counter";
import { LabelInput } from "./input";
import RadioButton from "./radioButton";
import Select from "./select";
import Separator from "./separator";

export default function AVForm () {
    return(
        <div 
          className="bg-white rounded-md shadow-lg flex flex-col items-center 
          -m-20 border border-solid w-3/4">
          <h3 
            className="font-bold text-[#10004F] text-[32px] my-6 w-10/12">
            Cotiza tu viaje ahora
          </h3>
          <form action="#" className="py-8 text-sm text-gray-500 font-bold w-10/12">
            <Separator title="Tipo de viaje"/>
            <div className="flex items-center">
              <div className="w-1/2">
                <Select />
              </div>
              <div>
                <RadioButton name="travel_type" title="Ida y vuelta"/>
                <RadioButton name="travel_type" title="Solo ida"/>
              </div>
              {/* <div className="px-6">
                <input type="radio" className="mx-3" name="travel_type"/>
                Ida y vuelta
                <input type="radio" className="mx-3" name="travel_type"/>
                Solo ida
              </div> */}
            </div>
            
            <div className="py-6">
              <Separator title="Disponibilidad de vehículos" />
              <div className="inline ">
                <input type="radio" className="mr-3" name="vehicle_disp"/>
                Solo durante la ida/vuelta
                <input type="radio" className="mx-3" name="vehicle_disp"/>
                100% del tiempo
              </div>
            </div>
            
            <div>
              <Separator title="Salida / Regreso" />
            </div>
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
            <div className="py-6">
              <Separator title="Pasajeros" />
            </div>
            <div className="flex flex-column justify-between">
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
            <div className="py-6">
              <Separator title="Equipaje" />
            </div>
            <div className="flex flex-column justify-between">
                <AVCounter 
                  icon={"adult" as IconType}
                  title='Carry-on'
                  subtitle='El número de maletas definen el tipo de vehículo'
                />
                <AVCounter 
                  icon={"child" as IconType}
                  title='Maleta'
                  subtitle='El número de maletas definen el tipo de vehículo'
                />
                  <AVCounter 
                  icon={"baby" as IconType}
                  title='Equipaje especial'
                  subtitle='Importante detallarlos, condicionan el tipo de vehículo'
                />

            </div>
            <div className="flex justify-end py-4">
                <input type="button" value="Cotizar" className="border-2 border-solid border-orange-500 bg-orange-500 text-white py-3 px-6 rounded-md"/>
            </div>
          </form>
        </div>
    )
}