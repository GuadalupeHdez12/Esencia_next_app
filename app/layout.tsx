import type { Metadata } from "next";
import { Aclonica } from "next/font/google";//Importancion de fuentes de google fonts
import "./globals.css";

//Configuracion de fuentes de google fonts
const font = Aclonica({
  subsets: ['latin'], // Tipo de tipografía
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Esencia App",
  description: "Proyecto con next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
