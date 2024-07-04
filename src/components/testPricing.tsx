import { driverPrice, journeyPrice, pricing, travelExpenses } from "@/utils/pricing";

function Price(
    {
        trayecto_distanciaKm,
        trayecto_tarifaKm,
        chofer_tarifaKM,
        chofer_cantidad,
        vehiculo_codigo,
        vehiculo_cantidad,
        viaje_inicio,
        viaje_fin
    }:{
        trayecto_distanciaKm: number,
        trayecto_tarifaKm: number,
        chofer_tarifaKM: number,
        chofer_cantidad: number,
        vehiculo_codigo: string,
        vehiculo_cantidad: number,
        viaje_inicio: Date,
        viaje_fin: Date
    }
) {
    const precioTrayecto = journeyPrice(trayecto_tarifaKm, trayecto_distanciaKm)
    const precioChofer = driverPrice(chofer_tarifaKM, vehiculo_codigo, trayecto_distanciaKm, chofer_cantidad)
    const viaticos = travelExpenses(viaje_inicio, viaje_fin, chofer_cantidad)
    return (
        <>
            <div className="font-bold mx-2">
                <div className="text-2xl border-b-2 border-black">
                    <h1 className="font-bold">Prueba de formula de costo de viaje</h1>
                </div>
                <div className="text-gray-500 font-semibold">
                    <h1 className="text-xl text-black font-bold">Parámetros</h1>
                    <p>Distancia en KM del viaje: <span className="text-black">{trayecto_distanciaKm}</span></p>
                    <p>Tarifa por KM: <span className="text-black">{trayecto_tarifaKm}</span></p>
                    <p>Tarifa de chofer por KM: <span className="text-black">{chofer_tarifaKM}</span></p>
                    <p>Cantidad de choferes: <span className="text-black">{chofer_cantidad}</span></p>
                    <p>Código de vehículo: <span className="text-black">{vehiculo_codigo}</span></p>
                    <p>Cantidad de vehiculos: <span className="text-black">{vehiculo_cantidad}</span></p>
                    <p>Inicio de viaje: <span className="text-black">{viaje_inicio.toDateString()}</span></p>
                    <p>Fin de viaje: <span className="text-black">{viaje_fin.toDateString()}</span></p>

                </div>
                <div className="font-semibold text-gray-500 border-t-2 border-gray-400">
                    <p className="flex flex-row justify-between">Costo de trayecto: <span className="text-black text-xl">$ {precioTrayecto}</span></p>
                    <p className="flex flex-row justify-between">Costo de choferes: <span className="text-black text-xl">$ {precioChofer}</span></p>
                    <p className="flex flex-row justify-between">Costo de espera: <span className="text-black text-xl">$ {"0"}</span></p> 
                    <p className="flex flex-row justify-between">Costo de viaticos: <span className="text-black text-xl">$ {viaticos}</span></p>
                    <p className="flex flex-row justify-between border-t-2 border-black">Total: <span className="text-black text-xl">$ {pricing(vehiculo_cantidad, precioChofer, precioTrayecto, viaticos )}</span></p>
                </div>
            </div>
        </>
    )
}

export { Price }