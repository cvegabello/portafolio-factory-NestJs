import type { Metadata } from "next";
import { Montserrat, Open_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio Factory",
  description: "Portafolio Factory - Sistema de diseño profesional",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <body
        className={`${openSans.variable} ${montserrat.variable} ${firaCode.variable} antialiased`}
        style={{ backgroundColor: '#000000', color: '#ffffff', margin: 0, padding: 0 }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
