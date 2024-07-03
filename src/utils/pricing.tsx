function pricing(
    {
        agencyToPOD,         //distancia en KM desde la agencia al punto de "departure"
        porToAgency,         //distancia en KM desde el punto de "return" hasta la agencia.
        journeyKM,           //distancia ida y vuelta en KM
        driverQuantity,      //cantidad de choferes
        driverFee,           //tarifa por chofer
        waitingKm,           //Km equivalentes por espera en paradas
        waitingTime,         //tiempo de espera en Horas.
        vehicleTypePrice,    //precio de km por tipo de vehiculo
        vehicleCode,         //código asignado a un vehìculo. Ej: "sprinter24"
        vehicleQuantity,     //cantidad de vehículos
        availabilityCoef,    //coeficiente de disponibilidad
        closenessCoef = 0.5,   //coeficiente de cercania
        trafficCoef,          //coeficiente de trafico
        travelExpenses       // viaticos (calculados en otra funcion)
    }: {
        agencyToPOD: number,
        porToAgency: number,
        journeyKM: number,
        driverQuantity: number,
        driverFee: number,
        waitingKm: number,
        waitingTime: number,
        vehicleTypePrice: number,
        vehicleCode: string,
        vehicleQuantity: number,
        availabilityCoef: number,
        closenessCoef: number,
        trafficCoef: number,
        travelExpenses: number
    }
) {

    const vehicle_distance_coef = (vehicle: string, journey_km: number) => {
        const vehicle1 = ["sharan", "sprinter19"]
        const vehicle2 = ["sprinter24", "bus45", "bus60"]

        if (vehicle1.includes(vehicle) && journey_km <= 600)
            return 1
        if (vehicle1.includes(vehicle) && journey_km > 600)
            return 2
        if (vehicle2.includes(vehicle) && journey_km <= 100)
            return 1
        if (vehicle2.includes(vehicle) && journey_km > 100)
            return 2
        return 0
    }

    const journey = (vehicleTypePrice * availabilityCoef * agencyToPOD * closenessCoef)
        + (vehicleTypePrice * availabilityCoef) * ((journeyKM * trafficCoef) + waitingKm)
        + (vehicleTypePrice * availabilityCoef) * porToAgency * closenessCoef

    const driver = driverFee * vehicle_distance_coef(vehicleCode, journeyKM) * driverQuantity

    const wait_stay = driverFee * waitingTime

    const total_fee = (journey + driver + wait_stay) * vehicleQuantity + travelExpenses

    return total_fee
}

function travelExpenses(
    inicioViaje: Date,
    finViaje: Date,
    cantidadChoferes: number
): number {
    const costoComidas = 10000;
    const costoHospedaje = 30000;

    let costoTotalComidas = 0;
    let costoTotalHospedaje = 0;

    // Convertir las fechas de inicio y fin a horas en formato 24 horas
    const inicioHora = inicioViaje.getHours();
    const finHora = finViaje.getHours();

    // Verificar si el viaje ocurre en el rango de comidas
    if (
        (inicioHora >= 0 && inicioHora <= 15) ||
        (inicioHora >= 20 && inicioHora <= 23) ||
        (finHora >= 0 && finHora <= 15) ||
        (finHora >= 20 && finHora <= 23)
    ) {
        costoTotalComidas = costoComidas * cantidadChoferes;
    }

    // Verificar si el viaje ocurre en el rango de hospedaje
    if (
        (inicioHora >= 21 || inicioHora <= 4) ||
        (finHora >= 21 || finHora <= 4)
    ) {
        costoTotalHospedaje = costoHospedaje * cantidadChoferes;
    }

    // Sumar los costos
    return costoTotalComidas + costoTotalHospedaje;
}