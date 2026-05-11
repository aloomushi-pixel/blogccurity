# Starter Kit: Contextos de IA para Desarrollo Frontend

Este paquete contiene los lineamientos, reglas de oro, y patrones de diseño utilizados en CCurity/Aionia para garantizar que las Inteligencias Artificiales (como Cursor, Copilot o Gemini) escriban código de altísima calidad desde el primer momento en tu nuevo proyecto de Blog.

## ¿Qué incluye este paquete?

1. **La Carpeta `.agent/skills` (¡La más importante!)**
   Esta carpeta contiene los "Skills" o reglas predefinidas que usamos. Si estás usando Cursor o Gemini, dile a tu agente que lea el contenido de esta carpeta antes de empezar a programar.
   - `stitch-ui-design/SKILL.md`: Aquí están los secretos de diseño, espaciados, colores y tipografía para que todo se vea profesional, con fondos limpios y componentes muy pulidos.
   - `nextjs-app-router-patterns/SKILL.md`: Las mejores prácticas para usar React y Next.js. Esto hará que el blog sea súper rápido para SEO.
   - `ccurity-autonomous-workflow/SKILL.md`: El flujo de trabajo y arquitectura. Aunque el blog será más simple, las filosofías de calidad están aquí.

2. **Archivo Global de Estilos (`globals.css`)**
   Contiene el punto de partida estándar de Tailwind V4 y las correcciones de modo oscuro que usamos.

## Instrucciones para arrancar el Blog

1. **Descomprime** este archivo `.zip`.
2. **Crea el proyecto base** de Next.js (el agente de IA te puede ayudar con el comando `npx create-next-app@latest`).
3. **Copia la carpeta `.agent`** en la raíz del nuevo proyecto.
4. **Copia el archivo `globals.css`** reemplazando el que te da Next.js por defecto.
5. **Abre el proyecto en tu editor** (ej. Cursor) y pégalo el siguiente prompt en el chat de IA:

> *"Actúa como un desarrollador Frontend Experto. Acabo de inicializar este proyecto para un Blog. Por favor revisa detenidamente las reglas en la carpeta `.agent/skills/` (especialmente stitch-ui-design y nextjs-app-router-patterns). Quiero que construyas la arquitectura base de mi blog y la landing page siguiendo EXACTAMENTE esos estándares de diseño limpio y moderno."*

¡Éxito con la construcción del blog!
