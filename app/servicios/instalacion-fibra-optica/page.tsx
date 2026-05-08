import Link from "next/link";

export default function InstalacionFibra() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-emerald-400">Instalación de Fibra Óptica</h1>
      <p className="text-lg text-slate-300 mb-8">Conectividad de alta velocidad para entornos industriales y corporativos.</p>
      <Link href="/inicio" className="text-emerald-500 hover:text-emerald-400 transition-colors">
        &larr; Volver al inicio
      </Link>
    </main>
  );
}
