# Reglas del Proyecto: Ccurity 2026

Estas reglas definen los límites arquitectónicos y las convenciones innegociables para el desarrollo en este workspace. Todos los agentes y desarrolladores deben adherirse a ellas.

## Stack Tecnológico
- **Core:** Next.js
- **Directrices de Diseño/UI:** Las directrices, estructura visual y diseño de las aplicaciones de este proyecto se tomarán SIEMPRE desde **Stitch**. Las pantallas, componentes y variantes se generarán y obtendrán mediante el uso de las herramientas del servidor MCP de Stitch.
- **Directrices de Código:** Seguir las prácticas recomendadas generadas y definidas a través del servidor MCP de Stitch.

## Arquitectura y Despliegue (Monorepo)
- **Infraestructura:** Dokploy.
- **Estructura de Repositorio:** Monorepo estándar (ej. Turborepo o PNPM Workspaces). Un solo repositorio maestro (`main`) que contiene todo.
- **Estructura de Carpetas:**
  - `/apps/*`: Cada servicio o faceta de la aplicación (ej. `booking`, `admin`, `proveedores`) vive en su propia carpeta aquí y se le asigna su propio subdominio en Dokploy.
  - `/packages/*`: Código compartido (ej. `database`, `ui`, `config`).
- **Despliegue Paralelo:** Dokploy apuntará siempre a la rama `main` pero construirá servicios independientes basándose en la carpeta modificada dentro de `/apps/`.
- **Base de Datos (Custom Architecture):** Una (1) sola base de datos centralizada, construida y gestionada manualmente a través de código y Docker Compose (o similar) por el agente. **ESTÁ ESTRICTAMENTE PROHIBIDO EL USO DE SUPABASE.** La conexión debe hacerse a través del paquete `packages/database` utilizando un ORM (como Prisma o Drizzle).

## Autenticación y Sesiones
- **Persistencia Cross-Domain:** Las sesiones de usuario DEBEN persistir de forma fluida a través de todos los subdominios. Cuando un usuario inicia sesión en una faceta (ej. `app1.ccurity.com`), debe estar autenticado automáticamente si navega a otra faceta (`app2.ccurity.com`). Esto requerirá configuración de cookies a nivel de dominio raíz (`.ccurity...` o el dominio final) y un mecanismo de validación de tokens centralizado.
