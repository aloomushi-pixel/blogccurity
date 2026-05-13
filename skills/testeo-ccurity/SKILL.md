---
name: testeo-ccurity
description: "Flujo de auditoría interactiva (E2E) que recorre el ciclo de vida completo de un servicio en CCurity: Levantamiento -> Presupuesto -> Servicio Publicado -> Inventario -> Facturación."
---

# Flujo de Trabajo: Testeo CCurity (Auditoría E2E Multi-Rol)

**Versión**: 1.0.0
**Propósito**: Garantizar la integridad total de la plataforma simulando el ciclo de vida completo de un requerimiento operativo y financiero, rotando a través de todos los actores (Cliente, Proveedor, Admin, Contabilidad).

## Instrucciones de Ejecución (El "Recorrido")

Cuando el usuario invoque esta habilidad (`@[/testeo-ccurity]`), el agente deberá ejecutar las siguientes verificaciones lógicas (simuladas o vía tests reales) y documentarlas en un `audit_report.md`:

### Fase 1: Ingreso y Levantamiento
1. **Simulación Cliente/Asesor**: Entrar por la URL de levantamiento simple.
2. Generar un requerimiento inicial (ej. instalación de cámaras).
3. **Verificación de Estancia**: Inspeccionar que el levantamiento aparezca en el panel correspondiente (bolsa de levantamientos).

### Fase 2: Proveedor y Visita (Reporte)
4. **Simulación Proveedor**: Iniciar sesión como `proveedor@app.ccurity.com.mx`.
5. Aceptar/Confirmar el levantamiento.
6. **Verificación de Estancia**: Comprobar que aparece en los módulos del proveedor.
7. Correr el proceso de campo (Firmas de S1, S2, S3) simulando el actuar del proveedor o técnico.
8. **Verificación de Estancia**: Asegurar que el reporte firmado esté visible en la bitácora del servicio.

### Fase 3: Presupuesto y Versionado
9. Generar el Presupuesto basado en el reporte inmutable.
10. **Auditoría de Versiones**: Verificar el funcionamiento del control de versiones (Si se modifica, se guarda como V1, V2...).
11. Publicar el presupuesto.

### Fase 4: Aceptación y Bifurcación Financiera
12. **Simulación Cliente**: Iniciar sesión como `cliente@app.ccurity.com.mx` y aceptar el presupuesto.
13. **Prueba Ácida de Separación (M.O. vs Inventario)**:
    - **Servicio Publicado**: Verificar que TODOS los conceptos de la categoría Mano de Obra (M.O.) vivan aquí, esperando ser ejecutados.
    - **Inventario**: Verificar que todos los equipos y materiales se hayan ido a la herramienta de Inventario (o requisición) sin exponer precios de venta.

### Fase 5: Módulo de Finanzas y Facturación
14. **Validación Automática de CxP**: Verificar que, tras aceptar el presupuesto, el anticipo del 80% (o el pago completo) se coloque como factura por pagar en el módulo de Finanzas.
15. **Opciones de Pago del Cliente**: Evaluar el flujo donde el cliente sube su comprobante (transferencia) o paga vía Stripe (con comisión del 3% u otra agregada automáticamente).
16. **Simulación Contador**: Iniciar sesión como `contabilidad@app.ccurity.com.mx` y verificar que la factura fiscal validada (.XML y .PDF) pueda ser cargada a la cola de facturas.
17. Verificar que el flujo del 80% anticipo y 20% contra-entrega quede auditado y no permita el cierre de servicio sin el pago completado.

---
**NOTA PARA EL AGENTE**: Al finalizar este flujo, debes reportar cualquier anomalía (fugas financieras, cálculos de márgenes erróneos, falta de UI para alguna de estas interfaces) y proponer mejoras.
