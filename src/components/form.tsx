"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AVCounter, { IconType } from "./counter";
import { RadioButtonComponent } from "./radioButton";
import Select from "./select";
import Separator from "./separator";
import Image from "next/image";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import exclamation from "@/ui/icons/exclamation.svg";
import { useTrip } from "@/state/booking/TripContext";
import LabelInput, { SearchPlaces } from "./input";
import { RedAlert } from "./alert";
import { isError } from "./ErrorMessage";
import TextArea from "./textArea";
import { getLongNames, isValid } from "@/utils/basics";
import { loadGoogleMaps } from "@/utils/loadGoogleMaps";
import SearchAddresses from "./PlacesAutocomplete";

const inter = Inter({ subsets: ["latin"] });

export default function AVForm() {
  const { trip, setTrip } = useTrip();
  const [departureSelectedCity, setDepartureSelectedCity] = useState<string>('');
  const [returnSelectedCity, setReturnSelectedCity] = useState<string>('');
  const [returnCityBounds, setReturnCityBounds] = useState<google.maps.LatLngBounds | null>(null);
  const [departureCityBounds, setDepartureCityBounds] = useState<google.maps.LatLngBounds | null>(null);
  const [mapsLoaded, setMapsLoaded] = useState<boolean>(false);
  const [enableDepartureSearchAddresses, setEnableDepartureSearchAddresses] = useState<boolean>(false)
  const [enableReturnSearchAddresses, setEnableReturnSearchAddresses] = useState<boolean>(false)
  const errorsInitialState: any = {
    globals: [],
    tripType: {
      transferType: "",
      roundTrip: "",
    },
    fullTime: "",
    departure: {
      city: "",
      street: "",
      number: "",
      date: "",
      time: "",
    },
    return: {
      city: "",
      street: "",
      number: "",
      date: "",
      time: "",
    },
    passengers: {
      adult: "",
      kid: "",
      baby: "",
      pets: {
        small: "",
        big: "",
      },
    },
    luggage: {
      carryOn: "",
      bag23: "",
      special: {
        quantity: "",
        detail: "",
      },
    },
  };

  const [errors, setErrors] = useState(errorsInitialState);



  function errorChecker(resObj: any) {
    const INCOMPLETE_FORM = "Hay datos incompletos en el formulario";
    const NO_ADULTS = "Debe haber al menos 1 pasajero adulto";
    const newErrors = { ...errors };

    if (resObj?.tripType?.transferType === "")
      newErrors.tripType.transferType = "Selecciona un tipo de traslado";

    if (resObj?.departure?.city === "")
      newErrors.departure.city = "Selecciona una ciudad";

    if (resObj?.departure?.street === "")
      newErrors.departure.street = "Selecciona una calle";

    if (resObj?.departure?.number === "")
      newErrors.departure.number = "Indica una numeración";

    if (resObj?.departure?.date === "")
      newErrors.departure.date = "Selecciona una fecha de salida";

    if (resObj?.departure?.time === "")
      newErrors.departure.time = "Selecciona una hora de salida";

    if (resObj?.return?.city === "")
      newErrors.return.city = "Selecciona una ciudad";

    if (resObj?.return?.street === "")
      newErrors.return.street = "Selecciona una calle";

    if (resObj?.return?.number === "")
      newErrors.return.number = "Indica una numeración";

    if (resObj?.return?.date === "")
      newErrors.return.date = "Selecciona una fecha de regreso";

    if (resObj?.return?.time === "")
      newErrors.return.time = "Selecciona una hora de regreso";

    if (resObj?.passengers?.adult === 0)
      newErrors.passengers.adult = "Debe haber al menos 1 pasajero adulto";

    if (
      resObj?.luggage?.special?.quantity > 0 &&
      resObj?.luggage?.special?.detail === ""
    )
      newErrors.luggage.special.detail = "Debes detallar tu equipaje";

    setErrors(newErrors);
  }

  const router = useRouter();
  const redirect = (path: string) => {
    router.push(path);
  };

  let initialData = trip;
  useEffect(() => {
    loadGoogleMaps(() => {
      setMapsLoaded(true);
    })
    try {
      const form0Data = window.localStorage.getItem("form0");
      initialData = form0Data ? JSON.parse(form0Data) : trip;
      console.log(initialData);
    } catch (error) {
      console.log(error);
    }
    setTrip(initialData);

  }, []);

  const handleReturnCitySelected = (place: google.maps.places.PlaceResult): void => {
    const city = place.address_components?.find((component: any) => component.types.includes('locality'));

    setReturnSelectedCity(city ? city.long_name : '')

    // Verificar si la geometría está disponible directamente
    console.log('place', place)
    const div:any = document.createElement('div')
    div.className = 'hidden'
    if (place.geometry && place.geometry.viewport) {
      setReturnCityBounds(place.geometry.viewport);
    } 
    else {
      // Obtener más detalles sobre el lugar utilizando PlacesService
      const service = new google.maps.places.PlacesService(div);

      service.getDetails({ placeId: place.place_id }, (result: any, status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && result.geometry && result.geometry.viewport) {
          console.log('Result:',result)
          setReturnCityBounds(result.geometry.viewport);
        }
      });
    }
    setTrip((trip) => ({
      ...trip,
      return: {
        ...trip.return,
        city: place?.formatted_address,
        googlePlace: {
          ...trip.return.googlePlace,
          lat: place?.geometry.location.lat(),
          lng: place?.geometry.location.lng(),
        },
      },
    }))
    setEnableReturnSearchAddresses(true)
  };
  const handleDepartureCitySelected = (place: google.maps.places.PlaceResult): void => {
    const city = place.address_components?.find((component: any) => component.types.includes('locality'));

    setDepartureSelectedCity(city ? city.long_name : '')

    // Verificar si la geometría está disponible directamente
    if (place.geometry && place.geometry.viewport) {
      setDepartureCityBounds(place.geometry.viewport);
    } else {
      // Obtener más detalles sobre el lugar utilizando PlacesService
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails({ placeId: place.place_id }, (result: any, status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && result.geometry && result.geometry.viewport) {
          setDepartureCityBounds(result.geometry.viewport);
        }
      });
    }
    setTrip((trip) => ({
      ...trip,
      departure: {
        ...trip.departure,
        city: place?.formatted_address,
        googlePlace: {
          ...trip.departure.googlePlace,
          lat: place?.geometry.location.lat(),
          lng: place?.geometry.location.lng(),
        },
      },
    }))
    setEnableDepartureSearchAddresses(true)
  };

  const handleDepartureAddressSelected = (place: google.maps.places.PlaceResult): void => {
    
    setTrip((trip) => ({
      ...trip,
      departure: {
        ...trip.departure,
        street: getLongNames(place).route,
        number: getLongNames(place).streetNumber,
        googlePlace: {
          ...trip.departure.googlePlace,
          lat: place?.geometry.location.lat(),
          lng: place?.geometry.location.lng(),
        },
      },
    }));
  };
  const handleReturnAddressSelected = (place: google.maps.places.PlaceResult): void => {
    setTrip((trip) => ({
      ...trip,
      return: {
        ...trip.return,
        street: getLongNames(place).route,
        number: getLongNames(place).streetNumber,
        googlePlace: {
          ...trip.return.googlePlace,
          lat: place?.geometry.location.lat(),
          lng: place?.geometry.location.lng(),
        },
      },
    }));
  };

  if (!mapsLoaded) {
    return <div>Loading...</div>;
  }


  const submitHandler = (e: any) => {
    e.preventDefault();
    errorChecker(trip);
    const persistedData = JSON.stringify(trip);
    window.localStorage.setItem("form0", persistedData);
    isValid(errors, errorsInitialState) ? redirect("/booking/passengers") : null
  };

  return (
    <div
      className="bg-white rounded-md shadow-lg flex flex-col items-center h-full
          -mt-20 mb-10 border border-solid w-[1052px]"
    >
      <h3 className="font-bold text-[#10004F] text-[32px] my-6 w-10/12">
        Cotiza tu viaje ahora
      </h3>
      <form action="#" className="py-8 text-sm text-gray-500 font-bold w-11/12">
        {errors.globals.length > 0
          ? errors.globals.map((err: string, index: number) => (
            <RedAlert key={index}>{err}</RedAlert>
          ))
          : null}
        <Separator title="Tipo de viaje" />
        <div className="flex items-center">
          <div className="w-1/2">
            <Select
              errorField={errors.tripType.transferType}
              label="Tipo de traslado"
              value={trip.tripType.transferType}
              onChange={(e: any) => {
                if (isError(errors.tripType.transferType)) {
                  setErrors({
                    ...errors,
                    tripType: {
                      ...errors.tripType,
                      transferType: "",
                    },
                  });
                }
                setTrip({
                  ...trip,
                  tripType: {
                    ...trip.tripType,
                    transferType: e.currentTarget.value,
                  },
                });
              }}
            >
              <option value="" defaultValue="" disabled>
                Selecciona una opción
              </option>
              <option value="particular">Traslado Particular</option>
              <option value="corporative">Traslado Corporativo</option>
              <option value="nat_airport">Aeroportuario Nacional</option>
              <option value="int_airport">Aeroportuario Internacional</option>
            </Select>
          </div>
          <div className="flex">
            <RadioButtonComponent
              name="type"
              label="Ida y vuelta"
              value="true"
              checked={trip.tripType.roundTrip}
              onChange={() => {
                setTrip({
                  ...trip,
                  tripType: {
                    ...trip.tripType,
                    roundTrip: true,
                  },
                });
              }}
            />
            <RadioButtonComponent
              name="type"
              label="Solo ida"
              value="false"
              checked={!trip.tripType.roundTrip}
              onChange={() => {
                setTrip({
                  ...trip,
                  tripType: {
                    ...trip.tripType,
                    roundTrip: false,
                  },
                });
              }}
            />
          </div>
        </div>

        {trip.tripType.roundTrip && (
          <>
            <div>
              <Separator title="Disponibilidad de vehículos" />
              <div className="py-6">
                <div className="flex">
                  <RadioButtonComponent
                    name="disp"
                    label="Solo durante la ida/vuelta"
                    value="false"
                    checked={!trip.fullTime}
                    onChange={() => {
                      setTrip({
                        ...trip,
                        fullTime: false,
                      });
                    }}
                  />
                  <RadioButtonComponent
                    name="disp"
                    label="100% del tiempo"
                    value="true"
                    checked={trip.fullTime}
                    onChange={() => {
                      setTrip({
                        ...trip,
                        fullTime: true,
                      });
                    }}
                  />
                </div>
              </div>
              {trip.fullTime && <FullTimeMessage />}
            </div>
          </>
        )}

        <Separator title="Salida" />
        <div className="flex flex-row">
          <div className="w-1/2 mr-2">
            <SearchPlaces
              label="Ciudad"
              errorField={errors.departure.city}
              onPlaceSelected={handleDepartureCitySelected}
              onChange={(e: any) => {
                if (isError(errors.departure.city)) {
                  setErrors((errors: any) => ({
                    ...errors,
                    departure: {
                      ...errors.departure,
                      city: "",
                    },
                  }));
                }
              }}
            />
            
          </div>
          <div className="w-1/2 ml-2">
            <SearchAddresses
              label="Dirección"
              bounds={departureCityBounds}
              errorField={errors.departure.street}
              onPlaceSelected={handleDepartureAddressSelected}
              disabled={!enableDepartureSearchAddresses}
              onChange={(e: any) => {
                if (isError(errors.departure.street)) {
                  setErrors((errors: any) => ({
                    ...errors,
                    departure: {
                      ...errors.departure,
                      street: "",
                    },
                  }));
                }
              }}
              />
          
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4 mr-2">
            
          </div>
          <div className="w-1/4 mx-2">
          </div>
          <div className="w-1/4 mx-2">
            <LabelInput
              label=""
              type="date"
              placeholder="Fecha de partida"
              value={trip.departure.date}
              errorField={errors.departure.date}
              onChange={(e: any) => {
                if (isError(errors.departure.date)) {
                  setErrors({
                    ...errors,
                    departure: {
                      ...errors.departure,
                      date: "",
                    },
                  });
                }
                setTrip({
                  ...trip,
                  departure: {
                    ...trip.departure,
                    date: e.currentTarget.value,
                  },
                });
              }}
            />
          </div>
          <div className="w-1/4 ml-2">
            <LabelInput
              type="time"
              label=""
              placeholder="Hora de partida"
              value={trip.departure.time}
              errorField={errors.departure.time}
              onChange={(e: any) => {
                if (isError(errors.departure.time)) {
                  setErrors({
                    ...errors,
                    departure: {
                      ...errors.departure,
                      time: "",
                    },
                  });
                }
                setTrip({
                  ...trip,
                  departure: {
                    ...trip.departure,
                    time: e.currentTarget.value,
                  },
                });
              }}
            />
          </div>
        </div>
        <Separator title="Destino y Regreso" />
        <div className="flex flex-row">
          <div className="w-1/2 mr-2">
            <SearchPlaces
              label="Ciudad"
              errorField={errors.return.city}
              onPlaceSelected={handleReturnCitySelected}
              onChange={(e: any) => {
                if (isError(errors.return.city)) {
                  setErrors((errors: any) => ({
                    ...errors,
                    return: {
                      ...errors.return,
                      city: "",
                    },
                  }));
                }
              }}
            />
            
          </div>
          <div className="w-1/2 ml-2">
          <SearchAddresses
              label="Dirección"
              bounds={returnCityBounds}
              errorField={errors.return.street}
              onPlaceSelected={handleReturnAddressSelected}
              disabled={!enableReturnSearchAddresses}
              onChange={(e: any) => {
                if (isError(errors.return.street)) {
                  setErrors((errors: any) => ({
                    ...errors,
                    return: {
                      ...errors.return,
                      street: "",
                    },
                  }));
                }
              }}
              />
            
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4 mr-2">
            
          </div>
          <div className="w-1/4 mx-2">
            
          </div>
          <div className="w-1/4 mx-2">
            <LabelInput
              type="date"
              label=""
              placeholder="Fecha de regreso"
              errorField={errors.return.date}
              value={trip.return.date}
              onChange={(e: any) => {
                if (isError(errors.return.date)) {
                  setErrors({
                    ...errors,
                    return: {
                      ...errors.return,
                      date: "",
                    },
                  });
                }
                setTrip({
                  ...trip,
                  return: {
                    ...trip.return,
                    date: e.currentTarget.value,
                  },
                });
              }}
            />
          </div>
          <div className="w-1/4 ml-2">
            <LabelInput
              type="time"
              label=""
              placeholder="Hora de regreso"
              value={trip.return.time}
              errorField={errors.return.time}
              onChange={(e: any) => {
                if (isError(errors.return.time)) {
                  setErrors({
                    ...errors,
                    return: {
                      ...errors.return,
                      time: "",
                    },
                  });
                }
                setTrip({
                  ...trip,
                  return: {
                    ...trip.return,
                    time: e.currentTarget.value,
                  },
                });
              }}
            />
          </div>
        </div>
        <Separator title="Pasajeros" />
        <div className="flex flex-row justify-left mt-4">
          <div className="w-1/3 mr-2">
            <AVCounter
              icon={"adult" as IconType}
              title="Adulto"
              subtitle="18 o más años"
              value={trip.passengers.adult}
              errorField={errors.passengers.adult}
              handleValue={(adult: number) => {
                if (isError(errors.passengers.adult)) {
                  setErrors({
                    ...errors,
                    passengers: {
                      ...errors.passengers,
                      adult: "",
                    },
                  });
                }
                setTrip({
                  ...trip,
                  passengers: {
                    ...trip.passengers,
                    adult,
                  },
                });
              }}
            />
          </div>
          <div className="w-1/3 mx-2">
            <AVCounter
              icon={"child" as IconType}
              title="Niño"
              subtitle="De 3 a 17 años"
              value={trip.passengers.kid}
              errorField={errors.passengers.kid}
              handleValue={(kid: number) => {
                setTrip({
                  ...trip,
                  passengers: {
                    ...trip.passengers,
                    kid,
                  },
                });
              }}
            />
          </div>
          <div className="w-1/3 ml-2">
            <AVCounter
              icon={"baby" as IconType}
              title="Bebé"
              subtitle="Hasta 3 años"
              value={trip.passengers.baby}
              errorField={errors.passengers.baby}
              handleValue={(baby: number) => {
                setTrip({
                  ...trip,
                  passengers: {
                    ...trip.passengers,
                    baby,
                  },
                });
              }}
            />
          </div>
        </div>
        <div className="flex flex-row justify-left mt-4">
          <div className="w-1/3 mr-2">
            <AVCounter
              icon={"puppySmall" as IconType}
              title="Hasta 8kg"
              subtitle="Mascota en falda"
              value={trip.passengers.pets.small}
              errorField={errors.passengers.pets.small}
              handleValue={(small: number) => {
                setTrip({
                  ...trip,
                  passengers: {
                    ...trip.passengers,
                    pets: {
                      ...trip.passengers.pets,
                      small,
                    },
                  },
                });
              }}
            />
          </div>
          <div className="w-1/3 mx-2">
            <AVCounter
              icon={"puppyBig" as IconType}
              title="Mas de 8kg"
              subtitle="Mascota en asiento"
              value={trip.passengers.pets.big}
              errorField={errors.passengers.pets.big}
              handleValue={(big: number) => {
                setTrip({
                  ...trip,
                  passengers: {
                    ...trip.passengers,
                    pets: {
                      ...trip.passengers.pets,
                      big,
                    },
                  },
                });
              }}
            />
          </div>
          <div className="w-1/3 ml-2"></div>
        </div>

        <Separator title="Equipaje" />
        <div className="flex flex-row justify-between mt-4">
          <div className="w-1/3 mr-1">
            <AVCounter
              icon={"carry_1" as IconType}
              title="Carry-on 15kg"
              alert
              subtitle="El número de maletas definen el tipo de vehículo"
              value={trip.luggage.carryOn}
              errorField={errors.luggage.carryOn}
              handleValue={(carryOn: number) => {
                setTrip({
                  ...trip,
                  luggage: {
                    ...trip.luggage,
                    carryOn,
                  },
                });
              }}
            />
          </div>
          <div className="w-1/3 mx-2">
            <AVCounter
              icon={"bag_1" as IconType}
              title="Maleta 23kg"
              alert
              subtitle="El número de maletas definen el tipo de vehículo"
              value={trip.luggage.bag23}
              errorField={errors.luggage.bag23}
              handleValue={(bag23: number) => {
                setTrip({
                  ...trip,
                  luggage: {
                    ...trip.luggage,
                    bag23,
                  },
                });
              }}
            />
          </div>
          <div className="w-1/3 ml-1">
            <AVCounter
              icon={"special" as IconType}
              title="Equipaje especial"
              alert
              subtitle="Importante detallarlos, condicionan el tipo de vehículo"
              value={trip.luggage.special.quantity}
              errorField={errors.luggage.special.quantity}
              handleValue={(quantity: number) => {
                setTrip({
                  ...trip,
                  luggage: {
                    ...trip.luggage,
                    special: {
                      ...trip.luggage.special,
                      quantity,
                    },
                  },
                });
              }}
            />
          </div>
        </div>
        <div>
          {trip.luggage.special.quantity > 0 && (
            <>
              <TextArea
                placeholder="Describa, ej. Ski, bicicleta, instrumentos..."
                errorField={errors.luggage.special.detail}
                label="Detalle de equipajes especiales"
                onChange={(e: any) => {
                  if (isError(errors.luggage.special.detail)) {
                    setErrors({
                      ...errors,
                      luggage: {
                        ...errors.luggage,
                        special: {
                          ...errors.luggage.special,
                          detail: "",
                        },
                      },
                    });
                  }
                  setTrip({
                    ...trip,
                    luggage: {
                      ...trip.luggage,
                      special: {
                        ...trip.luggage.special,
                        detail: e.currentTarget.value,
                      },
                    },
                  });
                }}
              ></TextArea>
            </>
          )}
        </div>
        <div className="flex justify-end py-4">
          <button className="py-3 px-6" onClick={submitHandler}>
            Cotizar
          </button>
        </div>
      </form>
    </div>
  );
}

function ShowDisponibility() {
  const [fullTime, setFullTime] = useState(true);

  return (
    <>
      <div>
        <Separator title="Disponibilidad de vehículos" />
        <div className="py-6">
          <div className="flex">
            <RadioButtonComponent
              name="disp"
              label="Solo durante la ida/vuelta"
              value="false"
              checked={!fullTime}
              onChange={(e: any) => {
                setFullTime(false);
              }}
            />
            <RadioButtonComponent
              name="disp"
              label="100% del tiempo"
              value="true"
              checked={fullTime}
              onChange={(e: any) => {
                setFullTime(true);
              }}
            />
          </div>
        </div>
        {fullTime && <FullTimeMessage />}
      </div>
    </>
  );
}

function FullTimeMessage() {
  return (
    <>
      <div
        className={`${inter.className} border border-[#4658DF] text-[#10004f] rounded-lg px-4 py-6 text-[16px] font-normal`}
      >
        <p className="text-[18px] font-bold ">Importante:</p>
        <p className="mt-2 ">
          El o los vehículos y sus condutores estarán a disposición durante todo
          el viaje, incluyendo hasta 50km de recorrido libre sin cargo por hora
          esperada (no inlcuye posibles peajes u otros cargos)
        </p>

        <div className="border border-[#4658DF] rounded-lg bg-[#D9DDF8] mt-4 p-2 flex flex-row">
          <Image src={exclamation} alt="exclamation" className="m-2" />
          <p>
            Si las necesidades del viaje excedieran este tope emitiremos una
            factura posterior con este detalle. El valor del km extra es de $300
          </p>
        </div>
      </div>
    </>
  );
}
