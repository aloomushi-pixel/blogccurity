---
name: ccurity-autonomous-workflow
description: The autonomous 9-step execution engine for CCURITY-APP deployments, quality assurance, and automated reporting.
---

# Ccurity Autonomous Workflow
**Version**: 1.0.0
**Project Philosophy**: Make telecommunications infrastructure projects the most transparent and honest ever made. Version control for budgets and reports must be exact. Protect our clients from ourselves and establish the company as the benchmark for strict honesty. Always prioritize features that improve accountability.

---

## 1. Single Source of Truth: Credentials & Services
> [!IMPORTANT]
> The agent MUST always reference these credentials when executing. Do NOT prompt the user for them. Do NOT modify the Coolify configs of other projects. Work EXCLUSIVELY on `CCURITY-APP`.

### 1.1 Supabase Configuration (Project: `pghqeoijbtzipzziezmn`)
- **API URL**: `https://pghqeoijbtzipzziezmn.supabase.co`
- **Publishable Key**: `sb_publishable_yEncRxhxBfbUzSCpNaOKag_oCJJ4-E7`
- **API Secret**: `sb_secret_2VUM79cCAcKms7SOmOCvnA_glM2xknp`
- **Anon Public JWT**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnaHFlb2lqYnR6aXB6emllem1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NTY1MzAsImV4cCI6MjA5MDIzMjUzMH0.e7YfCBC9diL1KDaKz52EBPfEUa8R2iahXpXF0xctsNg`
- **Service Role JWT**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnaHFlb2lqYnR6aXB6emllem1uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDY1NjUzMCwiZXhwIjoyMDkwMjMyNTMwfQ.xVPzMZtxHT4ZWiC38hgdi139v1LuLDCG3OdlzpSWiRE`

### 1.2 Coolify Deployment Service
- **MCP API Root Token**: `4|BEleDgkcaX73XQ8R7MYd1C08qXEfDq5yTA31MBAp7f5575df`
- **Target Service Name**: `CCURITY-APP`
- **Primary Domain**: `app.ccurity.com.mx`
- **Constraint**: The agent is FORBIDDEN from touching other apps, networking configurations, or Traefik. The scope is strictly `CCURITY-APP`.
- **Domain Strictness Rule**: The project strictly uses `app.ccurity.com.mx` for URL paths AND email domains. Under NO circumstances should `ccurity.mx` or `ccurity.com.mx` be used without `app.`. The domain and corporate email suffix is ALWAYS `@app.ccurity.com.mx`.

### 1.3 Notifications Service (Resend)
- **API KEY**: `re_RiP1RyPr_PApUgpnztwZbsadPNcdVEYTY`

### 1.4 Stripe Production Configuration
- **Publishable Key**: `pk_live_51S2h0HR46N0b3mOVGGWzJEcuUELasCkxYGUzVsEfcgeUPdjSa4rHQv9KTa5IplH4Fnt3C0s7fBjLYmkRH1sWB2Mn00jQD6orZ5`
- **Secret Key (Restricted)**: `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`
- **Webhook Signing Secret**: `whsec_xC13eqj2NErWyzWCboc8KteugKfu3h8L`

### 1.5 Persistent Storage & Volume Hierarchy (Coolify)
To guarantee media preservation across deployments (Nixpacks/Docker), the application MUST use `/app/storage` as the absolute root path inside the container for all generated media and file uploads.
*Note: This directory must be mapped in the Coolify UI (under Application -> Storage) as a Persistent Volume mapping `/app/storage` to a managed host volume.*

**Standardized Subdirectory Pattern**:
- **Generales / Avatares**: `/app/storage/uploads/`
- **Planos CAD**: `/app/storage/cad/`
- **Contratos Firmados (PDF)**: `/app/storage/contratos/`
- **Facturación (XML/PDF)**: `/app/storage/facturas/`
- **Evidencias (Fotos de tickets, reportes)**: `/app/storage/evidencias/`

*Rule*: Every time a new module requires physical file storage, create its dedicated subdirectory under `/app/storage/<module-name>/` in the code logic (using `fs/promises` `mkdir` with `recursive: true`). Never save files randomly in the root.


---

## 2. Global Test Fleet
These virtual users exist to test all workflows. **Never invent new ones.** Use the password: `E4ae5d6c0c.` for all accounts.

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin Principal** | `juan@app.ccurity.com.mx` | `E4ae5d6c0c.` |

---

## 3. The Autonomous Lifecycle Engine (Standard Procedure)
When the user issues a directive, execute the following 9-step engine AUTONOMOUSLY WITHOUT REQUESTING LOCALHOST VALIDATION.

### Step 1: Instruction Reception
Analyze the request and cross-reference with the philosophical goal of total project transparency.

### Step 2: Skill Check & Construction 
- Determine if a required skill is missing. If yes, query `https://github.com/sickn33/antigravity-awesome-skills` or install autonomously via `npx skills add <skill_name>`.
- Use Github/Powershell permissions. Build the necessary code.

### Step 3: Source Verification
Autonomously run `git add .`, `git commit -m "Auto-Deploy: <Subject>"`, and `git push`. (If a conflict arises, resolve it natively).

### Step 4: Coolify Deployment
Trigger the deployment to `CCURITY-APP` via the exact `coolify-mcp` commands.
*(Ignore localhost. Localhost does not exist in the pipeline).*

### Step 5: Coolify Logs Auditing
**CRITICAL**: The agent MUST use `mcp_coolify-mcp_deployment` to monitor the deployment. You are **STRICTLY FORBIDDEN** from exiting the turn or announcing completion until the deployment status explicitly reads `"status": "finished"`. 
- If it takes several minutes, use `command_status` or long API polling loops.
- Do not assume a queued state means success.
- If it crash loops or build fails, enter Step 6.

### Step 6: Server Resilience Loop
If step 5 fails, enter the CI/CD correction loop. Modify the codebase -> return to Step 3. Do not block on the user. Output terminal fixes automatically.

### Step 7: QA Interactivo y Multi-Rol (Subagent & Playwright)
**CRITICAL:** Only execute after Step 5 explicitly returns `"status": "finished"`.
Use Playwright OR `browser_subagent` to execute End-to-End tests strictly against **`https://app.ccurity.com.mx`**.
Automate login flows utilizing the required roles from Section 2.
**REGLA DE ORO DE PRUEBAS**: "Probar" significa hacer click de forma real en **cada uno de los botones y funciones** que se encuentren en la vista (por ej: si hay un botón 'Nueva Reserva', debes darle click, ver que abra, rellenarlo, enviar, y observar la respuesta del servidor). NUNCA des por funcional algo si el botón no hace nada. Test for both Visual/Desktop metrics and API/Functionality constraints. 
**You MUST manually request/run the checkout test logic to confirm it is completely operational.**

### Step 8: Client Resilience Loop (Playwright QA)
If step 7 uncovers a UI or functionality regression, rewrite the UI/logic -> return to Step 3. No deployment can be considered finished while failing standard QA.

### Step 9: Final Report
Upon pure completion, append the success report, components changed, and feature summary to `Historial_implementaciones_ccurity.md`.

### Step 8.5: Visual & Multi-Device Verification
**CRITICAL MANDATE**: For any UI or CSS layout modification (e.g. Sidebars, Modals, Navigations), the agent MUST verify the design in Desktop and Mobile using local \rowser_subagent\ snapshots or explicitly verifying the CSS flex bounds. NEVER conclude the workflow without explicitly guaranteeing that interactive components render fully and bounds are constrained (e.g., ensuring footers fit vertically without overflowing).
