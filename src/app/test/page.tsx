
import { Price } from "@/components/testPricing";

export default function Test() {
  const distanciaKm = 800
  const tarifaKM = 2000
  const tarifaChoferKm = 90
  const cantidadChoferes = 3
  const cantidadVehiculos = 2
  const codVehiculo = "sprinter19"
  const inicioViaje = new Date('2023-07-03T22:00:00')
  const finViaje = new Date('2023-07-04T02:00:00')

  return (
    <div className="bg-purple-200 p-20">
      <div className="container m-auto bg-white shadow-lg py-10 px-20">
        <Price 
          trayecto_distanciaKm={distanciaKm} 
          trayecto_tarifaKm={tarifaKM}
          chofer_cantidad={cantidadChoferes}
          chofer_tarifaKM={tarifaChoferKm}
          vehiculo_cantidad={cantidadVehiculos}
          vehiculo_codigo={codVehiculo}
          viaje_inicio={inicioViaje}
          viaje_fin={finViaje}
        />
      </div>
    </div>
  );
}
