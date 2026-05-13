---
name: ccurity-reporting-engine
description: Specialized skill to handle the S1 (Data), S2 (Diagnostics), and S3 (Volumetrics) reporting templates within the Ccurity platform.
---

# Ccurity Reporting Engine Skill

This skill contains the business rules for managing the specialized reporting engine in the Provider Portal.

## Architecture Guidelines

1. **S1 (Operational Data)**: Fields must be dynamically loaded from the client's record and company configuration.
2. **S2 (Diagnostics)**: Dynamic sub-templates (e.g., CCTV evaluation, Access Control checklist) mapped to database JSONB structures.
3. **S3 (Volumetrics)**: A "mini-quoter" that reads `Master Concepts` from the database. It allows providers to list required materials and labor but WITHOUT pricing (pricing is handled by the Quoting Engine based on admin settings or provider overrides).
4. **Signatures**: Dual verification required (Provider sign-off + Client sign-off) stored securely.

When building features related to reports, strictly adhere to this step-by-step separation to maintain clean Data vs. Diagnostics vs. Estimation.
