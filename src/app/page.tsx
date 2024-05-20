import Link from "next/link";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Main Site</div>
      <Link href="/login"> Login </Link>
      <Link href="/booking"> Booking</Link>
    </main>
  );
}


