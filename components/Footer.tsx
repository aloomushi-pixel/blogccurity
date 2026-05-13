import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              {/* We use a white version of the logo if available, otherwise filter the blue one to white, or just text */}
              <div className="text-white font-bold text-2xl tracking-tighter flex items-center gap-2">
                <span className="text-primary">C</span>CURITY
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Expertos en Infraestructura Tecnológica. Cableado estructurado, CCTV, fibra óptica y adecuación de sites.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios/cctv-y-videovigilancia" className="hover:text-primary transition-colors">
                  CCTV y Videovigilancia
                </Link>
              </li>
              <li>
                <Link href="/servicios/certificacion-de-redes" className="hover:text-primary transition-colors">
                  Certificación de Redes
                </Link>
              </li>
              <li>
                <Link href="/servicios/instalacion-cableado-cobre" className="hover:text-primary transition-colors">
                  Cableado Estructurado
                </Link>
              </li>
              <li>
                <Link href="/servicios/instalacion-fibra-optica" className="hover:text-primary transition-colors">
                  Fibra Óptica
                </Link>
              </li>
              <li>
                <Link href="/servicios/mantenimiento-y-peinado-de-racks" className="hover:text-primary transition-colors">
                  Mantenimiento de Racks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/inicio" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/blog/importancia-certificar-cableado-estructurado" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Ciudad de México y Área Metropolitana</li>
              <li>info@ccurity.com.mx</li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/contacto" 
                className="inline-flex px-4 py-2 bg-primary/20 text-primary border border-primary/50 font-medium rounded hover:bg-primary hover:text-white transition-colors text-sm"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} CCURITY. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
