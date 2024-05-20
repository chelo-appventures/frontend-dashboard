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
            <div>
                <select name="pax" id="pax" className="border rounded-md p-2 mr-4">
                    <option value="1">1 pasajero</option>
                    <option value="2">2 pasajeros</option>
                    <option value="3">3 pasajeros</option>
                    <option value="4">4 pasajeros</option>
                    <option value="5">5 pasajeros</option>
                    <option value="6">6 pasajeros</option>
                    <option value="7">7 pasajeros</option>
                    <option value="8">8 pasajeros</option>
                </select>
                <select name="puppies" id="puppies" className="border rounded-md p-2 mr-4">
                    <option value="0">0 mascotas</option>
                    <option value="1">1 mascota</option>
                    <option value="2">2 mascotas</option>
                    <option value="3">3 mascotas</option>
                </select>
                <select name="bags" id="bags" className="border rounded-md p-2 mr-4">
                    <option value="0">0 maletas</option>
                    <option value="1">1 maletac</option>
                    <option value="2">2 maletas</option>
                    <option value="3">3 maletas</option>
                </select>
            </div>
            <div className="flex justify-end py-4">
                <input type="button" value="Cotizar" className="border-2 border-solid border-orange-500 bg-orange-500 text-white py-3 px-6 rounded-md"/>
            </div>
          </form>
        </div>
    )
}