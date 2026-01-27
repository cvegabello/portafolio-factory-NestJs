export default function Footer() {
  const currentYear = new Date().getFullYear(); // Año dinámico para que no le toque cambiarlo manual

  return (
    <footer className="w-full bg-black py-10! border-t border-white/10">
      <div className="max-w-7xl mx-auto! px-4! flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-gray-500 text-xl font-medium tracking-wide">
          &copy; {currentYear}{" "}
          <span className="text-white font-bold">Santiago Vega</span>. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
