import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog Técnico - CCURITY | Telecomunicaciones e Infraestructura',
  description: 'Artículos técnicos, normatividad, y mejores prácticas sobre cableado estructurado, fibra óptica, CCTV y diseño de centros de datos.',
};

const blogPosts = [
  {
    slug: 'importancia-certificar-cableado-estructurado',
    title: 'El costo oculto del "Rack Espagueti": ¿Por qué certificar el cableado?',
    excerpt: 'Descubre los riesgos operativos de un mal cableado de red y por qué certificar tu infraestructura con normas TIA/EIA asegura tu operación.',
    date: '2026-05-12',
    category: 'Infraestructura',
    readTime: '5 min',
    imageUrl: '/blog/images/technicians-rack.png',
  },
  {
    slug: 'analisis-arquitectonico-mdf-vs-idf',
    title: 'Análisis Arquitectónico: MDF vs. IDF - Diseño Eficiente de Cuartos de Telecomunicaciones',
    excerpt: 'Entiende las diferencias críticas entre el Main Distribution Frame y los Intermediate Distribution Frames para optimizar tu red.',
    date: '2026-05-14',
    category: 'Diseño',
    readTime: '6 min',
    imageUrl: '/blog/images/technician-mdf-idf.png',
  },
  {
    slug: 'normatividad-nom-001-sede-2012-telecomunicaciones',
    title: 'Cumplimiento de la NOM-001-SEDE-2012 en Instalaciones de Telecomunicaciones',
    excerpt: 'Todo lo que un gerente de TI y facility manager debe saber sobre la normatividad eléctrica y de telecomunicaciones en México.',
    date: '2026-05-15',
    category: 'Normatividad',
    readTime: '8 min',
    imageUrl: '/blog/images/technician-nom-001.png',
  },
  {
    slug: 'fibra-optica-vs-cobre-para-entornos-industriales',
    title: 'Fibra Óptica vs. Cobre: ¿Cuál elegir para el Backbone Industrial?',
    excerpt: 'Una comparativa técnica para naves industriales: distancias de transmisión, resistencia electromagnética y ROI a largo plazo.',
    date: '2026-05-16',
    category: 'Conectividad',
    readTime: '7 min',
    imageUrl: '/blog/images/technician-cable.png',
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary/20 pb-20">
      
      {/* Hero Header */}
      <div className="bg-slate-900 text-white pt-20 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full opacity-10 blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full opacity-10 blur-[80px] transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-sm font-semibold tracking-wider uppercase mb-6">
            Centro de Conocimiento
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Inteligencia en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Infraestructura IT</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Explora nuestros artículos técnicos orientados a arquitectos, directores de operaciones y gerentes de TI. Aprende sobre normas, diseño de redes y optimización de centros de datos.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <main className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-md">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-slate-500 mb-4 gap-4">
                  <span>{new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  Leer Artículo completo
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 mt-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-slate-700">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full opacity-10 blur-[80px]"></div>
           <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">¿Buscas un socio estratégico para tu infraestructura?</h3>
           <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
             Nuestros ingenieros certificados te guiarán en el diseño, implementación y mantenimiento de tus redes corporativas e industriales.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
             <Link href="/contacto" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg transition-transform transform hover:-translate-y-1">
               Solicitar Levantamiento
             </Link>
             <a href="https://wa.me/525500000000" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-white text-white font-bold rounded-xl shadow-lg transition-all">
               Hablar con un Experto
             </a>
           </div>
        </div>
      </section>

    </div>
  );
}
