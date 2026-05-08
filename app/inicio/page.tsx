import Link from "next/link";

export default function Inicio() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6 text-emerald-400">CCURITY</h1>
      <p className="text-xl text-slate-300 mb-12 max-w-2xl text-center">
        Expertos en Cableado Estructurado, Redes y Videovigilancia para el sector corporativo en CDMX y área metropolitana.
      </p>
      <div className="flex gap-4">
        <Link href="/blog/importancia-certificar-cableado-estructurado" className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
          Leer nuestro Blog
        </Link>
        <Link href="/contacto" className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition">
          Solicitar Levantamiento
        </Link>
      </div>
    </main>
  );
}
