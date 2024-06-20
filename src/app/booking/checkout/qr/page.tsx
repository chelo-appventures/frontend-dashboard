"use client";
import { useState, useEffect } from "react";
import HeaderAV, { OptionHeader } from "@/components/header";
import AVQRCode from "@/components/qrcode";
import Image from "next/image";

import minibus from "@/ui/icons/minibus.svg";
import download from "@/ui/icons/download.svg";
import share from "@/ui/icons/share.svg";
import { Ruda, Inter } from "next/font/google";
import Link from "next/link";

const ruda = Ruda({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function QR() {
  const [result, setResult] = useState({});
  useEffect(() => {
    const form0 = JSON.parse(localStorage.getItem("form0") || "");
    const form1 = JSON.parse(localStorage.getItem("form1") || "");
    const form2 = JSON.parse(localStorage.getItem("form2") || "");
    const form3 = JSON.parse(localStorage.getItem("form3") || "");

    if (form0 && form1) {
      setResult({ form0, form1, form2, form3 });
    }
  }, []);
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-gray-300 max-h-screen">
        <div className=" bg-[#F4F4F7] w-full min-h-full flex flex-col">
          <HeaderAV />
          <OptionHeader />

          <div className="flex flex-col items-center justify-center h-full bg-gray-200 pb-10 pt-20">
            {/* TODO DEBE IR DENTRO DE ESTE CONTAINER */}

            <h1 className="w-[814px] text-left text-[36px] text-[#10004f]">
              <strong>Comprobante / eTicket</strong>
            </h1>
            <div className="w-[813px] h-auto bg-white my-6 rounded-lg shadow-lg">
              <div className="flex flex-row-w-full bg-[#3198A5] rounded-t-lg py-6 px-10">
                <p className="font-semibold text-white text-[24px] text-justify">
                  Recuerda cancelar el saldo del servicio antes de comenzar el
                  viaje. Podrás hacerlo ingresando mediante el código QR.
                </p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col w-1/3 m-[60px]">
                  <div className="flex items-center bg-[#3198A5] h-[26px] w-[232px] mb-5">
                    <Image src={minibus} alt="minibus" className="mx-2" />
                    <p className="text-white font-semibold text-[14px]">
                      EN MINIBUS
                    </p>
                  </div>
                  <AVQRCode text="A viajarrr!!!" />
                  <div className="my-5">
                    <p
                      className={`${ruda.className} font-bold text-[#5C5C5C] text-[16px]`}
                    >
                      Código:
                    </p>
                    <p className="font-bold text-[24px]">ARGBUY</p>
                  </div>
                </div>
                <div className="flex flex-col mt-[60px]">
                  <div className="mb-6">
                    <p
                      className={`${ruda.className} font-bold text-[#5C5C5C] text-[16px]`}
                    >
                      Origen / Destino:
                    </p>
                    <p className="text-[48px] font-semibold text-[#10004f]">
                      Belgrano / Pinamar
                    </p>
                  </div>
                  <div className="mb-6">
                    <p
                      className={`${ruda.className} font-bold text-[#5C5C5C] text-[16px]`}
                    >
                      Salida:
                    </p>
                    <p className="text-[32px] font-semibold text-[#10004f]">
                      15 de Feb 2024 / 23:00
                    </p>
                  </div>
                  <div className="mb-6">
                    <p
                      className={`${ruda.className} font-bold text-[#5C5C5C] text-[16px]`}
                    >
                      Desde:
                    </p>
                    <p className="text-[32px] font-semibold text-[#10004f]">
                      Av. Cmd. Rivadavia 1450
                    </p>
                  </div>
                  <div className="mb-6">
                    <p
                      className={`${ruda.className} font-bold text-[#5C5C5C] text-[16px]`}
                    >
                      Pasajero:
                    </p>
                    <p className="text-[32px] font-semibold text-[#10004f]">
                      Gonzalo García Luna
                    </p>
                    <p className="text-[20px] font-semibold text-[#8B8B8B]">
                      1 mascota en falda
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center mb-10 mt-6">
                <button className="outline-none border-2 border-orange-500 rounded-md h-[40px] inline-flex items-center px-6 mx-5">
                  Descargar
                  <Image src={download} alt="download" className="ml-2" />
                </button>
                <button className="outline-none border-2 border-orange-500 rounded-md h-[40px] inline-flex items-center px-6">
                  Compartir
                  <Image src={share} alt="share" className="ml-2" />
                </button>
              </div>
            </div>

            {/* FIN DEL CONTAINER */}
            <div className="font-bold text-orange-500 text-[18px]">
              <Link href="#">Continuar en el sitio</Link>
            </div>

            <div className="">
              <pre>{JSON.stringify(result, null, 2)}</pre>
              <button
                onClick={() => {
                  console.log("clean");
                  localStorage.removeItem("form0");
                  localStorage.removeItem("form1");
                  localStorage.removeItem("form2");
                }}
              >
                Limpiar Codigo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
