import { TripDataForm1 } from "@/state/Trip.type";

function isValid(resultJson: any, originJson: any): boolean {
  // Helper function to check if two objects have the same structure and values
  const compareStructureAndValues = (obj1: any, obj2: any): boolean => {
    if (typeof obj1 !== typeof obj2) return false;
    if (typeof obj1 !== "object" || obj1 === null || obj2 === null)
      return obj1 === obj2;

    if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) return false;
      for (let i = 0; i < obj1.length; i++) {
        if (!compareStructureAndValues(obj1[i], obj2[i])) return false;
      }
      return true;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
      if (!keys2.includes(key)) return false;
      if (!compareStructureAndValues(obj1[key], obj2[key])) return false;
    }
    return true;
  };

  return compareStructureAndValues(resultJson, originJson);
}

const formatDate = (originalDate: Date) => {
  let date = new Date(originalDate);
  let daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  let months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
  let dayOfWeek = daysOfWeek[date.getDay()];
  let dayOfMonth = date.getDate();
  let month = months[date.getMonth()];
  let formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
  return formattedDate
}

const formatDateDDMMYYY = (originalDate: Date) => {
  let date: Date = new Date(originalDate);
  let day: number = date.getDate();
  let month: number = date.getMonth() + 1;
  let year: number = date.getFullYear();
  let dayStr: string = day < 10 ? '0' + day : day.toString();
  let monthStr: string = month < 10 ? '0' + month : month.toString();

  let formattedDate: string = `${dayStr}/${monthStr}/${year}`;
  return formattedDate
}

const ageDetail = ( age:string | undefined):string => {
  if (age === undefined) return "null";
  if (age.includes("adult")) return "Adulto"
  if (age.includes("child")) return "Niño"
  if (age.includes("baby")) return "Bebé"
  return "null"
}

const idTypeDetail = ( idType: string) => {
  if (idType.includes("dni")) return "DNI"
  if (idType.includes("passport")) return "Pasaporte"
  if (idType.includes("ci")) return "CI"
  if (idType.includes("rut")) return "RUT"
  return null

}

const transferTypeDescription = (data: TripDataForm1) => {
  if (data.tripType.transferType.includes('particular')) return "Traslado particular"
  if (data.tripType.transferType.includes('corporative')) return "Traslado corporativo"
  if (data.tripType.transferType.includes('nat_airport')) return "Aeroportuario | Vuelo Nacional"
  if (data.tripType.transferType.includes('int_airport')) return "Aeroportuario | Vuelo Internacional"
}

function obtenerFechaDeHoy(): string {
  const hoy = new Date();
  const dia = hoy.getDate();
  const mes = hoy.toLocaleString('es-ES', { month: 'long' });
  const año = hoy.getFullYear();

  return `${dia} de ${mes.charAt(0).toUpperCase() + mes.slice(1)} de ${año}`;
}

function sumarDuracion(horaPartida: string, travelDuration: number): string {
  // Paso 1: Crear un objeto Date con la hora de partida
  const [hours, minutes] = horaPartida.split(":").map(Number);
  const fechaPartida = new Date();
  fechaPartida.setHours(hours, minutes, 0, 0);

  // Paso 2: Sumar la duración del viaje (convertir segundos a milisegundos)
  fechaPartida.setSeconds(fechaPartida.getSeconds() + travelDuration);

  // Paso 3: Redondear los minutos al múltiplo de 10 más cercano
  let minutosSumados = fechaPartida.getMinutes();
  minutosSumados = Math.ceil(minutosSumados / 10) * 10;

  // Si los minutos exceden 60, ajustar la hora
  if (minutosSumados === 60) {
      fechaPartida.setHours(fechaPartida.getHours() + 1);
      minutosSumados = 0;
  }

  const horasSumadas = fechaPartida.getHours().toString().padStart(2, '0');
  const minutosFormateados = minutosSumados.toString().padStart(2, '0');

  return `${horasSumadas}:${minutosFormateados}`;
}


export { isValid, formatDate, formatDateDDMMYYY, ageDetail, idTypeDetail, transferTypeDescription, obtenerFechaDeHoy, sumarDuracion };
