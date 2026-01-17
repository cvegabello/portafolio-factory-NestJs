export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <main className="flex flex-col gap-6 items-center justify-center min-h-screen">
        <h1 className="font-heading text-accent text-4xl font-bold">
          Configuración Lista
        </h1>
        <p className="font-body text-muted text-lg">
          Sistema de diseño configurado correctamente
        </p>
        <button className="font-mono bg-accent-secondary text-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Botón de Prueba
        </button>
      </main>
    </div>
  );
}