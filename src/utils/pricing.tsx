function pricing(
        vehicleQuantity: number,
        driverPrice: number,
        journeyPrice: number,
        travelExpenses: number
    
): number {
    return (journeyPrice + driverPrice) * vehicleQuantity + travelExpenses

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

function journeyPrice(
        vehicleTypePrice: number,
        journeyKM: number
): number {
    return ( vehicleTypePrice * journeyKM )
}

function driverPrice(
        driverFee: number,
        vehicleCode: string,
        journeyKm: number,
        driverQuantity: number
): number {
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
    const price = driverFee * vehicle_distance_coef(vehicleCode, journeyKm) * driverQuantity

    return price
}


export { travelExpenses, journeyPrice, driverPrice, pricing }