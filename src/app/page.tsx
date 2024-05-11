import Image from "next/image";
//import { montserrat, montserrat } from "@/ui/fonts"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={montserrat.className}>Main Site</div>
      <a href="/login"> Login </a>
      <a href="/booking"> Booking</a>
    </main>
  );
}


