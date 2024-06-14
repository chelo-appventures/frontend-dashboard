import Separator, { SeparatorPersona } from "@/components/separator";
import LabelInput from "@/components/input";
import React, { useState } from "react";
import Important from "@/components/important";
import { usePassengerData } from "@/state/booking/PassengerContext";
import { Passenger, Gender } from "@/state/Passenger.type";
import { isError, ErrorMessage } from "@/components/ErrorMessage";

export default function PassengerForm({
  errors,
  setError,
  passenger,
  setPassenger,
  index,
}: {
  errors: any;
  setError: (error: any) => void;
  passenger: Passenger;
  setPassenger: (passenger: Passenger) => void;
  index: number;
}) {
  const [sameAdress, setSameAdress] = useState(true);

  const errorsInitialState: any = {
    passenger: {
      firstName: "",
      lastName: "",
      gender: Gender.Male,
      identification: {
        type: "",
        number: "",
        country: "",
      },
      age: 0,
      contact: {
        phoneCode: "",
        phoneNumber: "",
        email: "",
        address: {
          street: "",
          number: "",
          city: "",
          neighborhood: "",
        },
      },
    },
  };

  const handleSameAddress = (e: any) => {
    setSameAdress(e.currentTarget.checked);
  };

  const isResponsible = index === 0;
  return (
    <>
      {isResponsible ? (
        <SeparatorPersona title={`Responsable del viaje`} />
      ) : (
        <SeparatorPersona title={`Pasajero ${index + 1}`} />
      )}

      <>
        <div className="flex flex-row ">
          <div className="w-1/2 mr-2">
            <LabelInput
              placeholder="Nombre"
              value={passenger.firstName}
              errorField={errors.firstName}
              onChange={(e: any) => {
                setPassenger({
                  ...passenger,
                  firstName: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-1/2 ml-2">
            <LabelInput
              placeholder="Apellido"
              value={passenger.lastName}
              errorField={errors.lastName}
              onChange={(e: any) => {
                setPassenger({
                  ...passenger,
                  lastName: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-row">
            <div className="w-1/3">
              <div>
                <label className="relative font-normal">
                  <select
                    className={`block border border-gray-300 rounded-md px-3 py-3 mt-5 mb-1 w-full hover:shadow-md focus:shadow-md outline-none focus:border-black
                      ${
                        isError(errors.identification.type)
                          ? "border-red-500"
                          : ""
                      }`}
                    value={passenger.identification.type}
                    onChange={(e) => {
                      setPassenger({
                        ...passenger,
                        identification: {
                          ...passenger.identification,
                          type: e.target.value,
                        },
                      });
                    }}
                  >
                    <option defaultValue="" disabled></option>
                    <option value="dni">DNI</option>
                    <option value="passport">Pasaporte</option>
                    <option value="ci">CI (URU)</option>
                    <option value="rut">RUT (CHI)</option>
                  </select>
                  <span
                    className={`absolute text-xs left-2 -top-2 bg-white  px-2 ${
                      isError(passenger.identification.type)
                        ? "text-red-500 "
                        : ""
                    }`}
                  >
                    Documento
                  </span>
                </label>
                <ErrorMessage field={errors.identification.type} />
              </div>
            </div>
            <div className="w-3/4">
              <div className="ml-2 mr-4">
                <LabelInput
                  placeholder="Número de documento"
                  value={passenger.identification.number}
                  errorField={errors.identification.number}
                  onChange={(e: any) => {
                    setPassenger({
                      ...passenger,
                      identification: {
                        ...passenger.identification,
                        number: e.target.value,
                      },
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <label className="relative font-normal">
                <select
                  className={`block border border-gray-300 rounded-md px-3 py-3 mt-5 mb-1 w-full hover:shadow-md focus:shadow-md outline-none focus:border-black 
                    ${
                      isError(errors.identification.country)
                        ? "border-red-500"
                        : ""
                    }`}
                  value={passenger.identification.country}
                  onChange={(e) => {
                    setPassenger({
                      ...passenger,
                      identification: {
                        ...passenger.identification,
                        country: e.target.value,
                      },
                    });
                  }}
                >
                  <option disabled defaultValue=""></option>
                  <option value="arg">Argentina</option>
                  <option value="bra">Brasil</option>
                  <option value="chi">Chile</option>
                  <option value="uru">Uruguay</option>
                  <option value="bol">Bolivia</option>
                  <option value="col">Colombia</option>
                  <option value="ven">Venezuela</option>
                </select>
                <span
                  className={`absolute text-xs left-2 -top-2 bg-white px-2 
                  ${
                    isError(errors.identification.country) ? "text-red-500" : ""
                  }`}
                >
                  País de emisión
                </span>
              </label>
              <ErrorMessage field={errors.identification.country} />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="edad w-3/12">
            <div>
              <label className="relative font-normal">
                <select
                  className={`block border border-gray-300 rounded-md px-3 py-3 mt-5 mb-1 w-full hover:shadow-md focus:shadow-md outline-none focus:border-black 
                    ${isError(errors.age) ? "border-red-500" : ""}`}
                  value={passenger.age}
                  onChange={(e) => {
                    setPassenger({
                      ...passenger,
                      age: e.target.value,
                    });
                  }}
                >
                  <option disabled defaultValue="">
                    --
                  </option>
                  <option value="adult">Adulto</option>
                  <option value="child">Niño</option>
                  <option value="baby">Bebé</option>
                </select>
                <span
                  className={`absolute text-xs left-2 -top-2 bg-white px-2 
                  ${isError(errors.age) ? "text-red-500" : ""}`}
                >
                  Edad
                </span>
              </label>
              <ErrorMessage field={errors.age} />
            </div>
          </div>
          <div className="sexo flex items-center w-9/12">
            <input
              className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]"
              type="radio"
              name="sexo"
              checked={passenger.gender === Gender.Male}
              onChange={() => {
                setPassenger({
                  ...passenger,
                  gender: Gender.Male,
                });
              }}
            />
            <label htmlFor="man">Hombre</label>
            <input
              className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]"
              type="radio"
              name="sexo"
              checked={passenger.gender === Gender.Female ? true : false}
              onChange={() => {
                setPassenger({
                  ...passenger,
                  gender: Gender.Female,
                });
              }}
            />
            <label htmlFor="man">Mujer</label>
            <input
              className="mx-4 accent-orange-500 bg-white hover:shadow-md w-[20px] h-[20px]"
              type="radio"
              name="sexo"
              checked={passenger.gender === Gender.Other}
              onChange={(e) => {
                console.log(passenger);
                if (!e.target.checked) {
                  setPassenger({
                    ...passenger,
                    gender: Gender.Other,
                  });
                }
              }}
            />
            <label htmlFor="man">Prefiero no decirlo</label>
          </div>
        </div>
      </>
      {!isResponsible ? (
        <>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md "
              checked={sameAdress}
              onChange={handleSameAddress}
            />
            <label className="text-black p-2">
              Es la misma dirección que la anterior
            </label>
          </div>
        </>
      ) : null}

      {(isResponsible || !sameAdress) && (
        <div>
          {isResponsible ? (
            <>
              <div>
                <Separator title="Datos de contacto" />
              </div>
              <div className="flex flex-row">
                <div className="w-1/2 flex flex-row">
                  <div className="w-1/3">
                    <div>
                      <label className="relative font-normal">
                        <select
                          className={`block border border-gray-300 rounded-md px-3 py-3 mt-5 mb-1 w-full
                                    hover:shadow-md focus:shadow-md outline-none focus:border-black
                                    ${
                                      isError(errors.contact.phoneCode)
                                        ? "border-red-500"
                                        : ""
                                    }`}
                          onChange={(e) => {
                            setPassenger({
                              ...passenger,
                              contact: {
                                ...passenger.contact,
                                phoneCode: e.target.value,
                              },
                            });
                          }}
                        >
                          <option defaultValue="" disabled></option>
                          <option value="54">+54</option>
                          <option value="55">+55</option>
                          <option value="56">+56</option>
                          <option value="57">+57</option>
                        </select>
                        <span
                          className={`absolute text-xs left-2 -top-2 bg-white  px-2 
                          ${
                            isError(errors.contact.phoneCode)
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          Código de Área
                        </span>
                      </label>
                      <ErrorMessage field={errors.contact.phoneCode} />
                    </div>
                  </div>
                  <div className="w-3/4">
                    <div className="ml-2 mr-4">
                      <LabelInput
                        placeholder="Número de teléfono"
                        value={passenger.contact.phoneNumber}
                        errorField={errors.contact.phoneNumber}
                        onChange={(e: any) => {
                          setPassenger({
                            ...passenger,
                            contact: {
                              ...passenger.contact,
                              phoneNumber: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <LabelInput
                    type="text"
                    placeholder="Correo Electrónico"
                    value={passenger.contact.email}
                    errorField={errors.contact.email}
                    onChange={(e: any) => {
                      setPassenger({
                        ...passenger,
                        contact: {
                          ...passenger.contact,
                          email: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </>
          ) : null}
          <Separator title="Dirección (por donde pasaremos a buscarte)" />
          <div className="flex flex-row ">
            <div className="w-1/2">
              <div className="flex justify-between">
                <div className="w-1/2 mx-1">
                  <LabelInput
                    type="text"
                    placeholder="Ciudad"
                    value={passenger.contact.address.city}
                    onChange={(e: any) => {
                      setPassenger({
                        ...passenger,
                        contact: {
                          ...passenger.contact,
                          address: {
                            ...passenger.contact.address,
                            city: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </div>
                <div className="w-1/2 mx-1">
                  <LabelInput
                    type="text"
                    placeholder="Barrio"
                    value={passenger.contact.address.neighborhood}
                    errorField={errors.contact.address.neighborhood}
                    onChange={(e: any) => {
                      setPassenger({
                        ...passenger,
                        contact: {
                          ...passenger.contact,
                          address: {
                            ...passenger.contact.address,
                            neighborhood: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 mr-2">
              <LabelInput
                placeholder="Calle"
                type="text"
                value={passenger.contact.address.street}
                errorField={errors.contact.address.street}
                onChange={(e: any) => {
                  setPassenger({
                    ...passenger,
                    contact: {
                      ...passenger.contact,
                      address: {
                        ...passenger.contact.address,
                        street: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
            <div className="flex w-1/2 justify-between">
              <div className="w-1/2 mx-1">
                <LabelInput
                  type="text"
                  placeholder="Número"
                  value={passenger.contact.address.number}
                  errorField={errors.contact.address.number}
                  onChange={(e: any) => {
                    setPassenger({
                      ...passenger,
                      contact: {
                        ...passenger.contact,
                        address: {
                          ...passenger.contact.address,
                          number: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </div>
              <div className=" w-1/2 mx-1">
                <LabelInput
                  type="text"
                  placeholder="Depto./Timbre/Otro"
                  value={passenger.contact.address.other}
                  errorField={errors.contact.address.other}
                  onChange={(e: any) => {
                    setPassenger({
                      ...passenger,
                      contact: {
                        ...passenger.contact,
                        address: {
                          ...passenger.contact.address,
                          other: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </div>
            </div>
          </div>

          {isResponsible && <Important />}
        </div>
      )}
    </>
  );
}

function IsCompany() {
  const [isCompany, setIsCompany] = useState(false);
  const handlerCheckbox = (e: any) => {
    console.log(e.currentTarget.checked);
    setIsCompany(e.currentTarget.checked);
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md"
          checked={isCompany}
          onChange={handlerCheckbox}
        />
        <label className="text-black p-2">Comprar por empresa</label>
      </div>
      {isCompany && (
        <div className="flex flex-row">
          <div className="w-1/2 mr-2">
            <LabelInput type="text" placeholder="Empresa" />
          </div>
          <div className="w-1/2 ml-2">
            <LabelInput type="text" placeholder="CUIT" />
          </div>
        </div>
      )}
    </>
  );
}
