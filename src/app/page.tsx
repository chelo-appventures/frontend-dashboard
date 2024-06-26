import Link from "next/link";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Main Site</div>
      <Link href="/login"> Login </Link>
      <Link href="/booking"> Booking</Link>
      <Link href="/booking/passengers"> Passengers</Link>
      <Link href="/booking/travel_options"> Travel Options</Link>
      <Link href="/booking/checkout">Partial Pay</Link>
      <Link href="/booking/checkout/payment-method">Payment method</Link>
      <Link href="/booking/checkout/qr">QR</Link>
      <Link href="/budget-services">Budget & Services</Link>
      <Link href="/test">TEST</Link>
    </main>
  );
}


