import Link from "next/link";

export default function Inicio() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-50 text-secondary py-20 px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
          Proteja Su Empresa
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl">
          Expertos en Cableado Estructurado, Redes y Videovigilancia para el sector corporativo en CDMX y área metropolitana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contacto" 
            className="px-8 py-3.5 bg-primary text-white font-semibold rounded-md shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all"
          >
            Solicitar Levantamiento
          </Link>
          <Link 
            href="/blog/importancia-certificar-cableado-estructurado" 
            className="px-8 py-3.5 bg-white text-secondary border border-slate-300 font-semibold rounded-md shadow-sm hover:bg-slate-50 hover:text-primary hover:border-primary/50 transition-all"
          >
            Leer nuestro Blog
          </Link>
        </div>
      </section>

      {/* Stats/Feature section as placeholder for corporate feel */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">+15 Años</h3>
            <p className="text-slate-600">De experiencia comprobada</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">Soporte 24/7</h3>
            <p className="text-slate-600">Disponibilidad total para su empresa</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">Marcas Líderes</h3>
            <p className="text-slate-600">Trabajamos con los mejores proveedores</p>
          </div>
        </div>
      </section>
    </div>
  );
}
