import React from 'react';

export default function Contacto() {
  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Solicita un Levantamiento Técnico
          </h1>
          <p className="text-lg text-slate-600">
            Déjanos tus datos y un ingeniero especialista se pondrá en contacto contigo para evaluar tu proyecto en CDMX o área metropolitana.
          </p>
        </div>

        <form className="bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">Nombre completo *</label>
              <input type="text" id="nombre" name="nombre" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="Ej. Juan Pérez" />
            </div>
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium text-slate-700 mb-2">Empresa *</label>
              <input type="text" id="empresa" name="empresa" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="Ej. Corporativo XYZ" />
            </div>
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-slate-700 mb-2">Correo Corporativo *</label>
              <input type="email" id="correo" name="correo" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="juan@empresa.com" />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">Teléfono *</label>
              <input type="tel" id="telefono" name="telefono" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="55 1234 5678" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="descripcion" className="block text-sm font-medium text-slate-700 mb-2">Número aproximado de nodos a instalar o breve descripción del proyecto *</label>
              <textarea id="descripcion" name="descripcion" rows={4} required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="Ej. Necesitamos cablear 50 nodos Cat 6A en nuevas oficinas..."></textarea>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors duration-200 shadow-md">
              Enviar Solicitud de Levantamiento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
