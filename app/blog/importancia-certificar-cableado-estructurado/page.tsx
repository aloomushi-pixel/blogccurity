import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'El costo oculto del Rack Espagueti: ¿Por qué certificar tu cableado? | CCURITY',
  description: 'Descubre los riesgos operativos de un mal cableado de red y por qué certificar tu infraestructura con normas TIA/EIA asegura tu operación. Solicita un levantamiento técnico.',
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary/20">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-slate prose-lg md:prose-xl max-w-none">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            El costo oculto del "Rack Espagueti": ¿Por qué es vital certificar el cableado estructurado de tu empresa?
          </h1>
          
          <p className="text-lg text-slate-500 italic border-l-4 border-primary pl-4 mb-8">
            Dirigido a: Gerentes de TI, administradores de edificios, arquitectos y directores de operaciones.
          </p>

          <p>
            Imagina este escenario: Es cierre de mes, la operación de tu empresa está al máximo y, de repente, el sistema ERP se cae o las cámaras IP de videovigilancia pierden conexión. Tu equipo de soporte pasa horas tratando de encontrar el origen del problema, solo para descubrir que la falla proviene de un cable cruzado en un cuarto de telecomunicaciones caótico.
          </p>
          <p>
            En la era digital, invertir en los mejores servidores empresariales no sirve de nada si la "autopista" por la que viaja la información está llena de baches. Gran parte de las fallas de red empresariales provienen de la infraestructura física: un cableado estructurado deficiente, desactualizado o mal administrado.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
            1. El temido "Rack Espagueti": El enemigo número uno del mantenimiento
          </h3>
          <p>
            ¿Al abrir la puerta de tu Site te encuentras con una cascada incomprensible de cables enredados, sin identificar y colgando al azar? A esto se le conoce en el sector corporativo como el "rack espagueti".
          </p>
          
          <div className="my-8 rounded-xl bg-slate-200 border-2 border-dashed border-slate-400 flex items-center justify-center h-64 text-slate-500 font-semibold shadow-inner">
            [SUBIR AQUÍ FOTO REAL DE ANTES Y DESPUÉS DE RACK]
          </div>

          <p className="font-semibold mt-6">Más allá de dar una pésima imagen, este desorden tiene consecuencias graves:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tiempos de inactividad (Downtime) prolongados:</strong> Identificar un solo nodo defectuoso toma horas.</li>
            <li><strong>Sobrecalentamiento:</strong> La acumulación de cables bloquea el flujo de aire, reduciendo la vida útil de los equipos.</li>
          </ul>

          <p className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20 text-slate-900">
            <strong>La solución:</strong> Un servicio profesional de <Link href="/contacto" className="text-primary font-bold underline hover:text-primary/80 transition-colors">mantenimiento y peinado de racks</Link>. Mediante el uso de organizadores, velcros y etiquetado bajo normas TIA/EIA, transformamos el caos en un panel de control eficiente.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
            2. Diferencia entre cable UTP Cat 6, Cat 6A y Fibra Óptica: ¿Qué necesita tu obra?
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Cableado de Cobre (Cat 6 y Cat 6A):</strong> Es el estándar para llevar internet de alta velocidad y energía a estaciones de trabajo y sistemas de <Link href="/contacto" className="text-primary hover:text-primary/80 underline transition-colors">cctv y videovigilancia</Link>. La Cat 6A es la norma corporativa actual.
            </li>
            <li>
              <strong>Fibra Óptica:</strong> Si necesitas conectar dos naves industriales o superar la barrera de los 90 metros, la <Link href="/contacto" className="text-primary hover:text-primary/80 underline transition-colors">instalación de fibra óptica</Link> es la ruta obligatoria para tu backbone.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
            3. ¿Por qué es importante certificar un cableado estructurado?
          </h3>
          <p>
            Para garantizar que tu red cumple con las estrictas normas TIA/EIA, es fundamental realizar una <Link href="/contacto" className="text-primary hover:text-primary/80 underline transition-colors">certificación de redes</Link>. Utilizando escáneres de alta precisión (Fluke Networks), auditamos cada cable y emitimos un reporte técnico en PDF.
          </p>

          <div className="my-12 p-8 bg-slate-900 text-white rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl"></div>
            <h3 className="text-2xl font-bold text-white mt-0 mb-4 flex items-center gap-2">
              <span className="text-3xl">🏆</span> Caso de Éxito: Renovando un Site sin detener la operación
            </h3>
            <p className="text-slate-300 m-0">
              Sabemos que para corporativos, detener la operación no es una opción. Recientemente, renovamos el site principal de un call center 24/7 sin desconectar a los operadores en turno mediante cortes programados y canalizaciones paralelas.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-4">
            Tu proyecto en manos expertas y seguras
          </h2>
          <p>
            Nuestros ingenieros acuden a cada levantamiento físico y ejecución de obra con todo el Equipo de Protección Personal (EPP) requerido (cascos, botas, chalecos). Somos la opción más segura para integrarnos con tus residentes de obra.
          </p>
          
          <div className="my-8 rounded-xl bg-slate-200 border-2 border-dashed border-slate-400 flex items-center justify-center h-64 text-slate-500 font-semibold shadow-inner">
            [SUBIR AQUÍ FOTO DE TÉCNICOS CON CASCO Y CHALECO EN OBRA]
          </div>

        </article>

        <hr className="my-12 border-slate-200" />

        {/* FASE 4: Trust Badges / Carrusel de logotipos */}
        <section className="mb-16">
          <h4 className="text-center text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Trabajamos con las mejores marcas del mercado</h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Como no tenemos los SVG de las marcas, usamos placeholders estilizados */}
            <span className="text-xl font-bold text-slate-600">Panduit</span>
            <span className="text-xl font-bold text-slate-600">Belden</span>
            <span className="text-xl font-bold text-slate-600">CommScope</span>
            <span className="text-xl font-bold text-slate-600">Furukawa</span>
            <span className="text-xl font-bold text-slate-600">Condumex</span>
            <span className="text-xl font-bold text-slate-600">Fluke Networks</span>
          </div>
        </section>

        {/* FASE 5: Optimización de Conversión (CRO) */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Tu infraestructura de red está lista para el futuro?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Evita fallas costosas. Nuestro equipo evaluará tu site y propondrá la mejor solución bajo normatividad internacional.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Botón Principal */}
            <Link href="/contacto" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1">
              Solicita un Levantamiento Técnico Sin Costo
            </Link>
            
            {/* Botón de WhatsApp (Secundario) */}
            <a href="https://wa.me/525500000000" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Habla con un Ingeniero hoy mismo - Envía tus planos
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
