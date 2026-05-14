import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Fibra Óptica vs. Cobre: Backbone Industrial | CCURITY',
  description: 'Compara las ventajas técnicas y financieras de utilizar fibra óptica frente al cobre en entornos industriales para garantizar la comunicación a largas distancias.',
};

export default function BlogPostFibraVsCobre() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary/20">
      <main className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Breadcrumb / Regresar */}
        <div className="mb-8">
          <Link href="/blog" className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver al Blog
          </Link>
        </div>

        <article className="prose prose-slate prose-lg md:prose-xl max-w-none">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Fibra Óptica vs. Cobre: ¿Cuál elegir para el Backbone Industrial?
          </h1>
          
          <p className="text-lg text-slate-500 italic border-l-4 border-primary pl-4 mb-8">
            Dirigido a: Ingenieros de Planta, Jefes de Mantenimiento IT y Diseñadores de Naves Industriales.
          </p>

          <p>
            Al diseñar la red de telecomunicaciones de una nave industrial, parque logístico o planta de manufactura, una de las decisiones más críticas es la selección del medio físico para el <strong>Backbone</strong> (la columna vertebral de la red que interconecta todos los cuartos de telecomunicaciones).
          </p>
          <p>
            El debate eterno entre utilizar cableado de cobre de alta categoría (como Cat 6A) o dar el salto definitivo a la fibra óptica tiene ramificaciones directas en el presupuesto del proyecto (CAPEX) y, más importante aún, en la estabilidad operativa a largo plazo (OPEX). A continuación, desglosamos técnicamente ambos enfoques.
          </p>
          
          <div className="my-8 rounded-xl overflow-hidden shadow-2xl">
            <Image src="/blog/images/technician-cable.png" alt="Técnico de CCURITY instalando infraestructura" width={800} height={500} className="w-full h-auto object-cover" />
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
            1. La barrera de la distancia: El límite de los 90 metros
          </h3>
          <p>
            El cableado de cobre de par trenzado (UTP/FTP) tiene un límite físico dictado por la física electromagnética y los estándares de la industria (TIA-568). Independientemente de si usas Categoría 5e, 6 o 6A, la distancia máxima garantizada para la transmisión de datos desde el switch hasta el dispositivo final es de <strong>90 metros de cableado horizontal</strong> (más 10 metros para patch cords).
          </p>
          <p>
            En un entorno de oficinas corporativas, esto rara vez es un problema. Sin embargo, en una nave industrial de 10,000 metros cuadrados, conectar una cámara perimetral o una línea de ensamblaje ubicada a 300 metros del cuarto de servidores con cable de cobre es sencillamente imposible sin instalar múltiples switches repetidores (lo que introduce puntos de falla).
          </p>
          <p>
            <strong>La ventaja de la fibra:</strong> La fibra óptica monomodo (OS2) puede transmitir datos a velocidades de 10 Gbps a 100 Gbps a distancias de <em>decenas de kilómetros</em> sin pérdida de señal. Para backbones dentro de un mismo parque industrial, la fibra multimodo (OM3/OM4) maneja fácilmente distancias de hasta 300-500 metros.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
            2. Resistencia a la Interferencia Electromagnética (EMI)
          </h3>
          <p>
            Las plantas industriales son entornos hostiles para las señales de datos. La presencia de motores eléctricos pesados, variadores de frecuencia (VFD), soldadoras robóticas y maquinaria pesada genera enormes campos electromagnéticos.
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Cobre:</strong> Funciona mediante impulsos eléctricos. Si un cable UTP corre cerca de una línea de alto voltaje, el ruido electromagnético puede inducir errores en los paquetes de datos, causando que las máquinas CNC o los sistemas SCADA pierdan conexión. (Aunque cables blindados F/UTP ayudan, requieren puestas a tierra perfectas).
            </li>
            <li>
              <strong>Fibra Óptica:</strong> Transmite luz a través de filamentos de vidrio. Es físicamente <strong>inmune</strong> a la interferencia electromagnética y de radiofrecuencia (EMI/RFI). Puedes tender fibra óptica junto a cables de 480V sin que sufra la más mínima degradación de señal.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
            3. Consideraciones de Costo y ROI
          </h3>
          <p>
            El mito más común es que "la fibra es muy cara". Si analizamos únicamente el costo por metro de cable, el cobre sigue siendo más económico. Sin embargo, en la arquitectura de un Backbone industrial, el análisis de Costo Total de Propiedad (TCO) favorece a la fibra.
          </p>
          <div className="my-8 p-6 bg-slate-900 text-white rounded-lg shadow-xl">
            <h4 className="font-bold text-xl mb-4 text-primary-light">¿Por qué la fibra óptica es rentable?</h4>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 m-0">
              <li><strong>Menos equipo activo:</strong> Elimina la necesidad de construir múltiples IDFs intermedios, ahorrando en aires acondicionados, UPS y gabinetes.</li>
              <li><strong>Ancho de banda "Future-Proof":</strong> Una vez instalada la fibra, actualizar de 1 Gbps a 10 Gbps (o más) usualmente solo requiere cambiar los transceptores (SFP+) en los switches, sin tocar el cableado.</li>
              <li><strong>Durabilidad:</strong> El cable armado para exteriores (OSP) y para interiores industriales soporta ambientes altamente corrosivos.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
            Veredicto y Recomendación de Diseño
          </h3>
          <p>
            En <strong>CCURITY</strong> recomendamos un diseño híbrido: utiliza fibra óptica (Multimodo u OS2 dependiendo de la distancia) para unir tu MDF principal con todos los IDF distribuidos en la planta (el Backbone). Luego, utiliza cableado de cobre (Categoría 6A) para los últimos metros desde cada IDF hacia los puntos de acceso Wi-Fi, cámaras y estaciones de trabajo, aprovechando la tecnología PoE para energizarlos.
          </p>

        </article>

        <hr className="my-12 border-slate-200" />

        {/* CRO Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Construye una Red a Prueba de Fallas</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            ¿Necesitas interconectar naves industriales o certificar tus enlaces de fibra óptica? Nuestros ingenieros están listos para diseñar la topología perfecta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1">
              Contactar a Ingeniería Óptica
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
