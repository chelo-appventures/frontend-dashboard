"use client";
import Separator, { SeparatorPersona } from "@/components/separator";
import LabelInput from "@/components/input";
import React, { useState } from "react";
import Important from "@/components/important";
import { usePassengerData } from "@/state/booking/PassengerContext";
import { Passenger, Gender } from "@/state/Passenger.type";
import { ErrorMessage, isError } from "@/components/ErrorMessage";
import Select from "@/components/select";
import { stringify } from "querystring";
import Accordion from "@/components/Accordion";

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

  const handleSameAddress = (e: any) => {
    setSameAdress(e.currentTarget.checked);
  };

  const isResponsible = index === 0;
  return (
    <Accordion
      title={isResponsible ? "Responsable del viaje" : `Pasajero ${index + 1}`}
    >
      <>
        <div className="flex flex-row ">
          <div className="w-1/2 mr-2">
            <LabelInput
              label=""
              placeholder="Nombre"
              value={passenger.firstName}
              errorField={errors.firstName}
              onChange={(e: any) => {
                if (isError(errors.firstName)) {
                  setError({
                    ...errors,
                    firstName: "",
                  });
                }
                setPassenger({
                  ...passenger,
                  firstName: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-1/2 ml-2">
            <LabelInput
              label=""
              placeholder="Apellido"
              value={passenger.lastName}
              errorField={errors.lastName}
              onChange={(e: any) => {
                if (isError(errors.lastName)) {
                  setError({
                    ...errors,
                    lastName: "",
                  });
                }

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
                <Select
                  label="Documento"
                  errorField={errors.identification.type}
                  className={`
                        ${
                          isError(errors.identification.type)
                            ? "border-red-500"
                            : ""
                        }`}
                  value={passenger.identification.type}
                  onChange={(e) => {
                    if (isError(errors.identification.type)) {
                      setError({
                        ...errors,
                        identification: {
                          ...errors.identification,
                          type: "",
                        },
                      });
                    }
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
                </Select>
              </div>
            </div>
            <div className="w-3/4">
              <div className="ml-2 mr-4">
                <LabelInput
                  label=""
                  placeholder="Número de documento"
                  value={passenger.identification.number}
                  errorField={errors.identification.number}
                  onChange={(e: any) => {
                    if (isError(errors.identification.number)) {
                      setError({
                        ...errors,
                        identification: {
                          ...errors.identification,
                          number: "",
                        },
                      });
                    }
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
              <Select
                label="País de emisión"
                errorField={errors.identification.country}
                value={passenger.identification.country}
                onChange={(e) => {
                  if (isError(errors.identification.country)) {
                    setError({
                      ...errors,
                      identification: {
                        ...errors.identification,
                        country: "",
                      },
                    });
                  }
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
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col w-3/12">
            <div>
              <Select
                label="Edad"
                errorField={errors.age}
                className={` 
                      ${isError(errors.age) ? "border-red-500" : ""}`}
                value={passenger.age}
                onChange={(e) => {
                  if (isError(errors.age)) {
                    setError({
                      ...errors,
                      age: "",
                    });
                  }
                  setPassenger({
                    ...passenger,
                    age: parseInt(e.target.value),
                  });
                }}
              >
                <option disabled defaultValue="">
                  --
                </option>
                <option value="adult">Adulto</option>
                <option value="child">Niño</option>
                <option value="baby">Bebé</option>
              </Select>
            </div>
          </div>
          <div className="flex flex-row items-center w-9/12">
            <div className="flex flex-col">
              <div className="flex items-center">
                <input
                  className="mx-4 "
                  type="radio"
                  name={`gender${index}`}
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
                  className="mx-4"
                  type="radio"
                  name={`gender${index}`}
                  checked={passenger.gender === Gender.Female}
                  onChange={() => {
                    setPassenger({
                      ...passenger,
                      gender: Gender.Female,
                    });
                  }}
                />
                <label htmlFor="man">Mujer</label>
                <input
                  className="mx-4"
                  type="radio"
                  name={`gender${index}`}
                  checked={passenger.gender === Gender.Other}
                  onChange={() => {
                    setPassenger({
                      ...passenger,
                      gender: Gender.Other,
                    });
                  }}
                />
                <label htmlFor="other">Prefiero no decirlo</label>
              </div>
              <div className="mx-3 pt-1">
                {isError(errors.gender) && (
                  <ErrorMessage field={errors.gender} />
                )}
              </div>
            </div>
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
                      <Select
                        label="Código de Área"
                        errorField={errors.contact.phoneCode}
                        className={`
                                      ${
                                        isError(errors.contact.phoneCode)
                                          ? "border-red-500 "
                                          : ""
                                      }`}
                        onChange={(e) => {
                          if (isError(errors.contact.phoneCode)) {
                            setError({
                              ...errors,
                              contact: {
                                ...errors.contact,
                                phoneCode: "",
                              },
                            });
                          }
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
                      </Select>
                    </div>
                  </div>
                  <div className="w-3/4">
                    <div className="ml-2 mr-4">
                      <LabelInput
                        label=""
                        placeholder="Número de teléfono"
                        value={passenger.contact.phoneNumber}
                        errorField={errors.contact.phoneNumber}
                        onChange={(e: any) => {
                          if (isError(errors.contact.phoneNumber)) {
                            setError({
                              ...errors,
                              contact: {
                                ...errors.contact,
                                phoneNumber: "",
                              },
                            });
                          }
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
                    label=""
                    type="text"
                    placeholder="Correo Electrónico"
                    value={passenger.contact.email}
                    errorField={errors.contact.email}
                    onChange={(e: any) => {
                      if (isError(errors.contact.email)) {
                        setError({
                          ...errors,
                          contact: {
                            ...errors.contact,
                            email: "",
                          },
                        });
                      }
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
                    label=""
                    type="text"
                    placeholder="Ciudad"
                    errorField={errors.contact.address.city}
                    value={passenger.contact.address.city}
                    onChange={(e: any) => {
                      if (isError(errors.contact.address.city)) {
                        setError({
                          ...errors,
                          contact: {
                            ...errors.contact,
                            address: {
                              ...errors.contact.address,
                              city: "",
                            },
                          },
                        });
                      }
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
                    label=""
                    type="text"
                    placeholder="Barrio"
                    value={passenger.contact.address.neighborhood}
                    errorField={errors.contact.address.neighborhood}
                    onChange={(e: any) => {
                      if (isError(errors.contact.address.neighborhood)) {
                        setError({
                          ...errors,
                          contact: {
                            ...errors.contact,
                            address: {
                              ...errors.contact.address,
                              neighborhood: "",
                            },
                          },
                        });
                      }
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
                label=""
                placeholder="Calle"
                type="text"
                value={passenger.contact.address.street}
                errorField={errors.contact.address.street}
                onChange={(e: any) => {
                  if (isError(errors.contact.address.street)) {
                    setError({
                      ...errors,
                      contact: {
                        ...errors.contact,
                        address: {
                          ...errors.contact.address,
                          street: "",
                        },
                      },
                    });
                  }
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
                  label=""
                  type="text"
                  placeholder="Número"
                  value={passenger.contact.address.number}
                  errorField={errors.contact.address.number}
                  onChange={(e: any) => {
                    if (isError(errors.contact.address.number)) {
                      setError({
                        ...errors,
                        contact: {
                          ...errors.contact,
                          address: {
                            ...errors.contact.address,
                            number: "",
                          },
                        },
                      });
                    }
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
                  label=""
                  type="text"
                  placeholder="Depto./Timbre/Otro"
                  value={passenger.contact.address.other}
                  errorField={errors.contact.address.other}
                  onChange={(e: any) => {
                    if (isError(errors.contact.address.other)) {
                      setError({
                        ...errors,
                        contact: {
                          ...errors.contact,
                          address: {
                            ...errors.contact.address,
                            other: "",
                          },
                        },
                      });
                    }
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
    </Accordion>
  );
}
