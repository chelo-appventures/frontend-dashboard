
import Link from "next/link";
import Input, {LabelInput} from "./input";

export default function LoginComp () {
    return (
        <div className="container bg-white rounded-lg shadow-md lg:px-12 px-6 py-8  lg:w-1/2 sm:w-0.8 max-w-full sm:max-w-md md:max-w-lg m-0 ">
            <h2 className="text-center text-2xl  mb-6"><span className="font-bold">Inicia</span> tu sesión</h2>
            <form action="#">
                <LabelInput placeholder="Usuario" type="text"/>
                <LabelInput placeholder="Contraseña" type="password"/>
                <div className="mb-6 flex flex-wrap justify-between items-center">
                    <Link href="#" className="text-blue-500 hover:underline">Olvidé mi contraseña</Link>
                </div>
                <div className="mb-6">
                    <button type="submit" className="bg-orange-500 text-gray-100 w-full rounded-md border px-2 py-2">Ingresar</button>
                </div>
                <div className="flex items-center">
                    <p className="text-sm mr-2">¿No tienes tus claves? <a href="#" className="text-blue-500 hover:underline"> Contacta a tu admin.</a> </p>
                </div>
            </form>
        </div>
    )
}