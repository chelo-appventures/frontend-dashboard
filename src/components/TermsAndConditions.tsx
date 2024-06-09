import Separator from "@/components/separator";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <>
      <Separator title="Otros" />
      <div className="flex items-center">
        <input
          type="checkbox"
          className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md "
        />
        <label className="text-black p-2">
          Al continua con la cotización acepta los{" "}
          <Link href="#" className="text-orange-500 underline">
            Términos y Condiciones
          </Link>{" "}
          y{" "}
          <Link href="#" className="text-orange-500 underline">
            Politicas de Privacidad.
          </Link>
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="px-2 h-5 w-5 accent-orange-500 rounded-md border-1 border-orange-500
                    focus:outline-none duration-500 hover:shadow-md "
        />
        <label className="text-black p-2">
          Deseo recibir ofertas y novedades de Turismo Ruggeri a mi correo.
        </label>
      </div>
    </>
  );
}
