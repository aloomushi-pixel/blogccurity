import Link from "next/link";

export default function CCTV() {
  return (
    <div className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
          CCTV y Videovigilancia
        </h1>
        <p className="text-xl text-slate-600 mb-10">
          Sistemas de seguridad en alta definición para tu empresa.
        </p>
        <Link 
          href="/contacto" 
          className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md"
        >
          Solicitar Cotización
        </Link>
      </div>
    </div>
  );
}
