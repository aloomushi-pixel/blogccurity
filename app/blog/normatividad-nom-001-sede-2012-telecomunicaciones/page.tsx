import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cumplimiento de la NOM-001-SEDE-2012 en Telecomunicaciones | CCURITY',
  description: 'Conoce los requisitos legales y técnicos de la NOM-001-SEDE-2012 para instalaciones de telecomunicaciones en México y evita riesgos operativos y multas.',
};

export default function BlogPostNom001() {
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
            Cumplimiento de la NOM-001-SEDE-2012 en Instalaciones de Telecomunicaciones
          </h1>
          
          <p className="text-lg text-slate-500 italic border-l-4 border-primary pl-4 mb-8">
            Dirigido a: Directores de Operaciones, Facility Managers e Integradores de Tecnología en México.
          </p>

          <p>
            Al hablar de cableado estructurado y redes corporativas, solemos pensar inmediatamente en estándares internacionales como TIA/EIA, ISO/IEC o BICSI. Sin embargo, en México, existe una regulación legal estricta y de carácter obligatorio que a menudo se pasa por alto en proyectos de TI: la <strong>Norma Oficial Mexicana NOM-001-SEDE-2012 (Instalaciones Eléctricas - Utilización)</strong>.
          </p>
          <p>
            Aunque el enfoque primario de la NOM-001 es la instalación eléctrica, contiene apartados críticos (como el Artículo 800) que regulan explícitamente los circuitos de telecomunicaciones. Ignorar estos lineamientos no solo pone en riesgo tus equipos, sino que expone a la empresa a riesgos de incendio, fallas sistémicas y fuertes multas en inspecciones de Protección Civil o de la STPS.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
            ¿Por qué la NOM-001-SEDE-2012 aplica a tu red de voz y datos?
          </h3>
          <p>
            Muchos instaladores sin experiencia creen erróneamente que "como el cable de red maneja voltajes bajos, no es peligroso". Esto es un grave error de diseño, especialmente con la adopción masiva de tecnologías <strong>PoE (Power over Ethernet)</strong>, donde los cables UTP ahora transportan suficiente corriente para alimentar antenas Wi-Fi, cámaras de videovigilancia y controles de acceso.
          </p>
          
          <div className="my-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <h4 className="text-yellow-800 font-bold mb-2">Puntos Críticos de Cumplimiento:</h4>
            <ul className="list-disc pl-6 space-y-2 text-yellow-900 m-0">
              <li><strong>Separación de circuitos:</strong> Los cables de telecomunicaciones no pueden compartir las mismas canalizaciones (tuberías, charolas) que los cables de fuerza y alumbrado sin una separación física aprobada.</li>
              <li><strong>Puestas a Tierra (Grounding):</strong> Los racks, escalerillas y equipos de telecomunicaciones deben estar correctamente aterrizados al sistema de tierras físicas del edificio para proteger contra descargas atmosféricas o transitorios de voltaje.</li>
              <li><strong>Propagación de incendios:</strong> Todo cableado que pase por plenos (espacios de aire acondicionado) debe tener un recubrimiento tipo <em>Plenum</em> (CMP) para evitar la emisión de humos tóxicos durante un incendio.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
            El riesgo legal y patrimonial de las malas prácticas
          </h3>
          <p>
            Una instalación que no cumple con la NOM-001-SEDE-2012 puede tener consecuencias desastrosas. Si ocurre un siniestro (como un conato de incendio en un rack sobrecalentado), los peritajes de las aseguradoras buscarán inmediatamente desviaciones a la norma oficial. Si se descubre que el diseño del cableado violaba las normativas de canalización o tierras físicas, <strong>la aseguradora puede negarse a pagar los daños.</strong>
          </p>
          <p>
            Además, para obtener la liberación de obra y el visto bueno de la Unidad de Verificación de Instalaciones Eléctricas (UVIE), la canalización de voz y datos debe estar ejecutada bajo norma.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
            ¿Cómo aseguramos el cumplimiento en CCURITY?
          </h3>
          <p>
            En CCURITY no solo tendemos cables; diseñamos infraestructuras seguras. Nuestros proyectos industriales y corporativos se rigen por la intersección entre las normativas de telecomunicaciones (TIA-568) y la legislación mexicana:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Cálculo de trayectorias:</strong> Aseguramos la separación geomagnética entre la fuerza y los datos para evitar Interferencia Electromagnética (EMI) y cumplir con la NOM.</li>
            <li><strong>Canalizaciones certificadas:</strong> Utilizamos charolas tipo malla y tubería conduit de especificación industrial, con sus respectivos puentes de unión equipotencial (bonding).</li>
            <li><strong>Memorias Técnicas:</strong> Entregamos planos as-built y reportes fotográficos que sirven como evidencia de cumplimiento ante cualquier auditoría.</li>
          </ul>

        </article>

        <hr className="my-12 border-slate-200" />

        {/* CRO Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Protege tu Inversión con Expertos</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            ¿No estás seguro si tus cuartos de telecomunicaciones y canalizaciones cumplen con la norma oficial? Evita riesgos operativos y multas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1">
              Solicitar una Auditoría de Red
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
