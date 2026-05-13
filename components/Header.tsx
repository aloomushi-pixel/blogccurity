"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image 
            src="https://cdn-jfepl.nitrocdn.com/IvslcYSboHnVotRTPmSOaEogFdyMPlgO/assets/images/source/rev-495a60b/ccurity.com.mx/wp-content/uploads/2023/07/CCURITY-PROVEEDOR-DE-SISTEMAS-DE-SEGURIDAD-1.svg" 
            alt="CCURITY Logo" 
            width={180} 
            height={48}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-secondary">
          <Link href="/inicio" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="/servicios/cctv-y-videovigilancia" className="hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link href="/blog/importancia-certificar-cableado-estructurado" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/contacto" className="hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/contacto" 
            className="hidden md:inline-flex px-5 py-2.5 bg-primary text-white font-medium rounded hover:bg-primary/90 transition-colors shadow-sm"
          >
            Solicitar Levantamiento
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-secondary hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col p-4 font-medium text-secondary">
            <Link 
              href="/inicio" 
              className="px-4 py-3 border-b border-slate-100 hover:text-primary hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/servicios/cctv-y-videovigilancia" 
              className="px-4 py-3 border-b border-slate-100 hover:text-primary hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              href="/blog/importancia-certificar-cableado-estructurado" 
              className="px-4 py-3 border-b border-slate-100 hover:text-primary hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contacto" 
              className="px-4 py-3 border-b border-slate-100 hover:text-primary hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="p-4 mt-2">
              <Link 
                href="/contacto" 
                className="flex w-full justify-center px-5 py-3 bg-primary text-white font-medium rounded hover:bg-primary/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Levantamiento
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
