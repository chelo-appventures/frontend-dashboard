export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 text-black">
      
      <div className="container bg-white rounded-lg shadow-md lg:px-12 px-6 py-8  lg:w-1/2 sm:w-0.8 max-w-full sm:max-w-md md:max-w-lg m-0 ">
        <h2 className="text-center text-2xl  mb-6"><span className="font-bold">Inicia</span> tu sesión</h2>
        <form action="#">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
            <input type="email" placeholder="Usuario" name="userEmail" id="userEmail" className="form-input w-full border rounded-md border-gray-300 px-2 py-2"/>
          </div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
            <input type="password" placeholder="Contraseña" name="password" id="password" className="form-input w-full border rounded-md border-gray-300 px-2 py-2"/>
          </div>
          <div className="mb-6 flex flex-wrap justify-between items-center">
            <a href="#" className="text-blue-500 hover:underline">Olvidé mi contraseña</a>
          </div>
          <div className="mb-6">
            <button type="submit" className="bg-orange-500 text-gray-100 w-full rounded-md border px-2 py-2">Ingresar</button>
          </div>
          <div className="flex items-center">
            <p className="text-sm mr-2">¿No tienes tus claves? <a href="#" className="text-blue-500 hover:underline"> Contacta a tu admin.</a> </p>
          </div>
        </form>
      </div>

    </main>
  );
}
