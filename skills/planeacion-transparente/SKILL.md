---
name: planeacion-transparente
description: Flujo de trabajo estricto para la planeación exhaustiva, documentación transparente y autorización explícita antes de la ejecución de tareas críticas en CCURITY-APP.
---

# Flujo de Trabajo: Planeación Transparente (Transparent Planning)

**Versión**: 1.0.0
**Filosofía**: En CCurity, la transparencia es nuestra piedra angular. Antes de ejecutar cambios profundos, arquitectónicos o que afecten los flujos operativos (presupuestos, reportes, usuarios), el agente debe documentar de manera granular lo que va a hacer, sus implicaciones y esperar autorización.

---

## 1. Criterios de Activación
Este flujo de trabajo DEBE usarse cuando:
- El usuario lo solicita explícitamente (ej. "usa planeación transparente").
- Se van a realizar cambios en la arquitectura de la base de datos (Supabase).
- Se van a alterar reglas de negocio, roles (RBAC) o cálculos de presupuestos/cotizaciones.
- Se van a refactorizar componentes grandes de la UI/UX.

---

## 2. El Ciclo de Planeación Transparente (5 Pasos)

### Paso 1: Investigación y Diagnóstico (Sin Mutación)
- El agente utilizará herramientas de lectura (`view_file`, `grep_search`, `list_dir`) para entender el estado actual del código y cómo interactúa con otras partes del sistema.
- **REGLA ESTRICTA**: Está **PROHIBIDO** realizar cambios en el código base, instalar dependencias o ejecutar comandos que muten el estado durante esta fase.

### Paso 2: Diseño del Plan de Implementación (`implementation_plan.md`)
- El agente debe generar el artefacto `implementation_plan.md` (marcando `request_feedback = true`).
- El documento debe ser claro, en español y contener:
  - **Objetivo**: Qué problema se está resolviendo.
  - **Implicaciones**: Qué impacto tendrá en otras partes del sistema (ej. posibles caídas de la base de datos, efectos en el frontend).
  - **Estrategia Técnica**: Explicación de la solución.
  - **Archivos Afectados**: Lista detallada indicando `[NUEVO]`, `[MODIFICAR]`, `[ELIMINAR]`.
  - **Preguntas Abiertas / Bloqueos**: Cualquier información que el agente necesite del usuario antes de comenzar.

### Paso 3: Punto de Control (Autorización Explícita)
- Tras presentar el plan, el agente **DEBE DETENERSE**.
- No se escribirá ninguna línea de código hasta que el usuario responda con una afirmación explícita (ej. "Aprobado", "Dale", "Autorizado", "Adelante").
- Si el usuario solicita cambios, el agente debe actualizar el `implementation_plan.md` y volver a pedir revisión.

### Paso 4: Ejecución Trazable (`task.md`)
- Una vez obtenida la autorización, el agente creará o actualizará un artefacto `task.md`.
- Este archivo contendrá un checklist exhaustivo:
  - `- [ ]` Tarea pendiente
  - `- [/]` Tarea en progreso
  - `- [x]` Tarea completada
- El agente debe actualizar este checklist conforme avanza, para que el usuario sepa exactamente en qué paso se encuentra la ejecución.

### Paso 5: Verificación y Reporte de Transparencia (`walkthrough.md` y Bitácora)
- Al finalizar la ejecución, el agente verificará que no haya errores de linting o compilación.
- Se generará un artefacto `walkthrough.md` que resuma la implementación final (incluyendo demostraciones o capturas si aplica).
- Finalmente, se registrará el resumen de los cambios en el archivo `Historial_implementaciones_ccurity.md`, de acuerdo a las directrices de OMEGA-PRO, para mantener un registro inmutable y transparente de la evolución de la plataforma.
