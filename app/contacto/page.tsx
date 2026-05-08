import React from 'react';

export default function Contacto() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-400 mb-8">
          Solicita un Levantamiento Técnico
        </h1>
        <p className="text-center text-slate-300 mb-12">
          Déjanos tus datos y un ingeniero especialista se pondrá en contacto contigo para evaluar tu proyecto en CDMX o área metropolitana.
        </p>

        <form className="bg-slate-800 shadow-xl rounded-2xl p-8 border border-slate-700">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo *</label>
              <input type="text" id="nombre" name="nombre" required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Ej. Juan Pérez" />
            </div>
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium text-slate-300 mb-2">Empresa *</label>
              <input type="text" id="empresa" name="empresa" required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Ej. Corporativo XYZ" />
            </div>
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-slate-300 mb-2">Correo Corporativo *</label>
              <input type="email" id="correo" name="correo" required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="juan@empresa.com" />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-slate-300 mb-2">Teléfono *</label>
              <input type="tel" id="telefono" name="telefono" required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="55 1234 5678" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="descripcion" className="block text-sm font-medium text-slate-300 mb-2">Número aproximado de nodos a instalar o breve descripción del proyecto *</label>
              <textarea id="descripcion" name="descripcion" rows={4} required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Ej. Necesitamos cablear 50 nodos Cat 6A en nuevas oficinas..."></textarea>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg shadow-emerald-900/20">
              Enviar Solicitud de Levantamiento
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
