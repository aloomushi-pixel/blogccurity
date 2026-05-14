import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Análisis Arquitectónico: MDF vs. IDF | CCURITY',
  description: 'Descubre las diferencias críticas entre un Main Distribution Frame (MDF) y los Intermediate Distribution Frames (IDF) para diseñar una red empresarial eficiente y escalable.',
};

export default function BlogPostMdfVsIdf() {
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
            Análisis Arquitectónico: MDF vs. IDF - Diseño Eficiente de Cuartos de Telecomunicaciones
          </h1>
          
          <p className="text-lg text-slate-500 italic border-l-4 border-primary pl-4 mb-8">
            Dirigido a: Arquitectos de red, diseñadores de planta interna, gerentes de TI y facility managers.
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden shadow-2xl relative aspect-[16/9]">
            <Image
              src="/blog/images/technician-mdf-idf.png"
              alt="Técnico de CCURITY revisando equipos de red en un cuarto MDF/IDF"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>

          <p>
            Al planificar la infraestructura de red para un edificio corporativo, una nave industrial o un campus universitario, uno de los desafíos más grandes es determinar cómo distribuir el cableado y los equipos activos para garantizar la conectividad de cientos o miles de usuarios. Aquí es donde entran en juego los conceptos fundamentales del diseño de telecomunicaciones: el <strong>MDF (Main Distribution Frame)</strong> y los <strong>IDF (Intermediate Distribution Frames)</strong>.
          </p>
          <p>
            En este artículo, analizaremos las diferencias arquitectónicas, funcionales y de normatividad entre estos dos componentes vitales de una red de cableado estructurado.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
            ¿Qué es el MDF (Main Distribution Frame)?
          </h3>
          <p>
            El MDF es el corazón de la red de tu empresa. Es el punto principal de interconexión arquitectónica donde las líneas de comunicación externas (como las acometidas de tu proveedor de servicios de internet o ISP) entran al edificio y se conectan con la red interna (LAN).
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Ubicación estratégica:</strong> Generalmente se ubica en la planta baja o en el primer piso del edificio, cerca del punto de demarcación del proveedor de servicios.</li>
            <li><strong>Equipamiento pesado:</strong> Aloja los routers de borde, firewalls perimetrales, el conmutador telefónico principal (PBX) y los switches de núcleo (core switches).</li>
            <li><strong>Conexión exterior:</strong> Es el único cuarto que tiene enlace directo con el mundo exterior.</li>
          </ul>

          <div className="my-8 rounded-xl bg-slate-200 border-2 border-dashed border-slate-400 flex flex-col items-center justify-center p-8 text-center shadow-inner">
            <span className="text-3xl mb-2">🏢</span>
            <p className="text-slate-600 font-semibold m-0">El MDF actúa como la oficina central de correos de tu edificio: todo paquete de datos (interno o externo) pasa por aquí en algún momento.</p>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
            ¿Qué son los IDF (Intermediate Distribution Frames)?
          </h3>
          <p>
            Los IDF son extensiones del MDF. Dado que el cableado de cobre (UTP Cat 6 o 6A) tiene una limitación técnica estricta de <strong>90 metros</strong> para garantizar la transmisión de datos a alta velocidad (norma TIA/EIA-568), es imposible cablear un edificio grande desde un solo punto.
          </p>
          <p>
            Los IDF resuelven este problema. Son cuartos de telecomunicaciones secundarios distribuidos estratégicamente por todo el edificio (por ejemplo, uno en cada piso o en cada ala de una nave industrial).
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Función principal:</strong> Conectar las estaciones de trabajo de los usuarios finales (computadoras, teléfonos IP, cámaras CCTV) hacia la red.</li>
            <li><strong>Equipamiento:</strong> Contienen switches de acceso y paneles de parcheo (patch panels).</li>
            <li><strong>Conexión al MDF:</strong> Todos los IDF deben conectarse de regreso al MDF a través de un cableado de alto rendimiento conocido como <em>Backbone</em>, típicamente utilizando <strong>Fibra Óptica</strong>.</li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
            Mejores Prácticas en el Diseño de MDF e IDF
          </h3>
          <p>
            Un diseño deficiente de estos cuartos resultará en caídas de red, sobrecalentamiento y mantenimientos imposibles. Considera lo siguiente:
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Dimensionamiento y Espacio:</strong> Un MDF debe tener al menos 3x4 metros para permitir el crecimiento. Los IDF deben tener espacio suficiente para racks de 19 pulgadas con espacio libre al frente y atrás.
            </li>
            <li>
              <strong>Enfriamiento Especializado (HVAC):</strong> Estos cuartos generan una cantidad masiva de calor. El aire acondicionado del edificio <em>no es suficiente</em>. Se requieren sistemas dedicados que operen 24/7/365.
            </li>
            <li>
              <strong>Sistemas de Respaldo de Energía (UPS):</strong> Un corte de energía no debe apagar tu red. Los racks deben contar con UPS y estar conectados a circuitos eléctricos de emergencia (plantas de luz).
            </li>
            <li>
              <strong>Seguridad Física:</strong> El acceso debe estar restringido con control de acceso biométrico o tarjetas. Un MDF comprometido significa una red empresarial completa comprometida.
            </li>
          </ol>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20 text-slate-900">
            <h4 className="font-bold text-xl mb-2 text-primary">¿Necesitas diseñar o auditar tus cuartos de telecomunicaciones?</h4>
            <p className="mb-0">
              En CCURITY somos especialistas en el diseño arquitectónico y normativo de Site de Cómputo (MDF/IDF). Aseguramos que tu infraestructura cumpla con los estándares TIA-942. <Link href="/contacto" className="text-primary font-bold underline hover:text-primary/80 transition-colors">Solicita una asesoría experta hoy.</Link>
            </p>
          </div>

        </article>

        <hr className="my-12 border-slate-200" />

        {/* CRO Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Eleva el estándar de tu infraestructura</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Desde la instalación de fibra óptica hasta el peinado de racks. Tenemos la experiencia y el equipo para llevar tu red corporativa al siguiente nivel.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1">
              Contactar Ingeniería
            </Link>
            
            <a href="https://wa.me/525500000000" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Habla por WhatsApp
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
