import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 m-auto">
      <div className="font-bold mb-5 text-3xl">Main Site</div>
      <div className="grid gap-2 items-center border rounded-lg p-6 font-semibold text-xl bg-orange-500 text-white shadow-lg w-1/2 justify-center h-1/2">
        <Link href="/login" className="hover:text-2xl hover:text-gray-300 duration-200"> Login </Link>
        <Link href="/booking" className="hover:text-2xl hover:text-gray-300 duration-200"> Booking</Link>
      </div>
    </main>
  );
}


