import type { Metadata } from "next";
import { Montserrat, Open_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "sonner";

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
  title: "Santiago Vega | Student-Athlete Portfolio",
  description:
    "Official recruiting portfolio of Santiago Vega. Class of 2027 Midfielder & Scholar.",
  icons: {
    icon: "/favicon.ico", // Esto busca el archivo en la carpeta public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        // 1. AGREGUÉ 'bg-black' aquí para asegurar que la base sea negra
        className={`${openSans.variable} ${montserrat.variable} ${firaCode.variable} antialiased bg-black`}
      >
        {/* --- INICIO DEL PATRÓN DE FONDO --- */}
        <div
          className="fixed inset-0 z-[-1] pointer-events-none opacity-20"
          style={{
            // Aquí está su patrón rojo (#ff0000)
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23ff0000' fill-opacity='0.6'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        {/* --- FIN DEL PATRÓN DE FONDO --- */}

        <Navbar />
        {children}
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  );
}
