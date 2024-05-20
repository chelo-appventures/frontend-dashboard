import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: "Dashboard AV",
  description: "Created by AppVentures",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
