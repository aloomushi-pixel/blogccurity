import Link from "next/link";

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/blog/images/hero-pattern.svg')] opacity-10 bg-repeat"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Asegura el éxito de tu proyecto desde el primer paso
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Nuestros ingenieros expertos evalúan tus instalaciones para diseñar soluciones precisas en infraestructura, seguridad y telecomunicaciones.
          </p>
        </div>
      </section>

      {/* Pricing / CTAs Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿No sabes por dónde comenzar?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Solicita una visita de levantamiento. Un técnico experto te visitará para conocer tus requerimientos y asesorarte de la manera correcta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tarjeta 1: Levantamiento Simple */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Visita de levantamiento simple</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Un técnico visita tu sitio para tomar medidas y datos clave. Con esto generamos un presupuesto exacto.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$350</span>
                <span className="text-slate-500 font-medium ml-2">MXN</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-blue-600">
                  <CheckCircleIcon />
                  <span className="text-slate-700">Mediciones y verificación de puntos clave.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-600">
                  <CheckCircleIcon />
                  <span className="text-slate-700">Revisión de acometidas, recorridos y tomas.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-600">
                  <CheckCircleIcon />
                  <span className="text-slate-700">Recomendaciones rápidas en sitio.</span>
                </li>
              </ul>
              <a 
                href="https://app.ccurity.com.mx/api/stripe/checkout?type=simple"
                className="block w-full py-3 px-6 text-center font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors mt-auto"
              >
                Pagar Levantamiento
              </a>
            </div>

            {/* Tarjeta 2: Visita de Proyecto */}
            <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-8 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Más Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Visita de proyecto</h3>
              <p className="text-slate-400 mb-6 flex-grow">
                Incluye la visita anterior y la entrega de un proyecto ejecutivo con planos y justificaciones.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$1,900</span>
                <span className="text-slate-400 font-medium ml-2">MXN</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-blue-400">
                  <CheckCircleIcon />
                  <span className="text-slate-300">Planos sembrados con ubicaciones sugeridas.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-400">
                  <CheckCircleIcon />
                  <span className="text-slate-300">Propuesta de canalizaciones (rutas y calibres).</span>
                </li>
                <li className="flex items-start gap-3 text-blue-400">
                  <CheckCircleIcon />
                  <span className="text-slate-300">Propuesta de equipos por marca/segmento.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-400">
                  <CheckCircleIcon />
                  <span className="text-slate-300">Justificaciones técnicas y criterios de diseño.</span>
                </li>
              </ul>
              <a 
                href="https://app.ccurity.com.mx/api/stripe/checkout?type=project"
                className="block w-full py-3 px-6 text-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors mt-auto shadow-lg shadow-blue-900/20"
              >
                Pagar Proyecto Ejecutivo
              </a>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Explorar nuestro Blog técnico
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
