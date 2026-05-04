# TechVault — Claude Code Developer Guide

## Project Overview

TechVault is a ServiceNow scoped application built using the **ServiceNow Now SDK** (`@servicenow/sdk`). It is an IT Request & Provisioning Platform for Nexoria Technologies (fictional company).

**Scope:** `x_2015976_techva_0`
**Scope ID:** `85ac42879360031039b3fe9bdd03d646`
**App Name:** TechVault
**Platform:** ServiceNow (Australia Release — Latest)

---

## Documentation Index

| Doc | Path | Purpose |
|---|---|---|
| This file | `CLAUDE.md` | Main dev guide — start here |
| FSD | `docs/FSD.md` | Full functional spec, requirements, ATF cases |
| Data Model | `docs/data-model.md` | Tables, fields, relationships, ACLs |
| Business Rules | `docs/business-rules.md` | All 7 BR — logic + code |
| Client Scripts | `docs/client-scripts.md` | All 5 CS — logic + code |
| Diagrams | `docs/diagrams/` | Mermaid diagrams (lifecycle, flow, ERD, arch) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| SDK | `@servicenow/sdk` (Now SDK) |
| Language | TypeScript (fluent definitions) + JavaScript (server scripts) |
| Glide API | `@servicenow/glide` |
| Build | `now build` |
| Deploy | `now deploy` |

---

## Project Structure

```
TechVault/
├─ CLAUDE.md                     ← You are here
├─ docs/
│  ├─ FSD.md
│  ├─ data-model.md
│  ├─ business-rules.md
│  ├─ client-scripts.md
│  └─ diagrams/
│     ├─ lifecycle.md
│     ├─ lifecycle-steps.md
│     ├─ approval-flow.md
│     ├─ rest-api-sequence.md
│     ├─ erd.md
│     └─ architecture.md
├─ src/
│  ├─ fluent/
│  │  ├─ generated/
│  │  │  └─ keys.ts              ← Auto-generated. DO NOT edit.
│  │  └─ example.now.ts          ← Component definitions entry point
│  ├─ server/
│  │  └─ script.js               ← Server-side logic
│  ├─ jsconfig.json
│  ├─ jsconfig.client.json
│  └─ jsconfig.server.json
├─ dist/                         ← Build output. DO NOT edit.
├─ now.config.json
└─ package.json
```

---

## Development Rules

1. **Component definitions go in `src/fluent/`** — TypeScript files with BusinessRule, ClientScript, etc.
2. **Server logic goes in `src/server/`** — export functions and import in fluent files
3. **Never edit `generated/keys.ts`, `dist/`, or `target/`** — auto-generated
4. **Always use `Now.ID['key']` for `$id`** — new keys auto-registered on `now build`
5. **Import Glide APIs from `@servicenow/glide`** — `gs`, `GlideRecord`, `GlideDateTime`
6. **Always prefix table names with scope** — `x_2015976_techva_0_request` not `request`
7. **Use `const`/`let` in TypeScript** — no `var` in fluent files
8. **In server `.js` files**, GlideRecord and gs are available globally

---

## Component Patterns

### Business Rule

```typescript
// src/fluent/example.now.ts
import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { myFunction } from '../server/script'

BusinessRule({
    $id: Now.ID['br_unique_key'],
    name: 'TVR My Business Rule',
    table: 'x_2015976_techva_0_request',
    action: ['insert'],        // 'insert' | 'update' | 'delete' | 'query'
    when: 'before',            // 'before' | 'after' | 'async' | 'display'
    order: 100,
    active: true,
    script: myFunction,
})
```

```javascript
// src/server/script.js
import { gs } from '@servicenow/glide'

export function myFunction(current, previous) {
    gs.info('TechVault: ' + current.getValue('number'))
}
```

### Client Script

```typescript
ClientScript({
    $id: Now.ID['cs_unique_key'],
    name: 'TVR My Client Script',
    table: 'x_2015976_techva_0_request',
    type: 'onLoad',            // 'onLoad' | 'onChange' | 'onSubmit' | 'onCellEdit'
    ui_type: 'all',
    active: true,
    applies_extended: false,
    global: false,
    isolate_script: false,
    messages: '',
    description: 'What this script does',
    script: script`function onLoad() {
        g_form.addInfoMessage('TechVault loaded')
    }`,
})
```

### Script Include

```typescript
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['si_unique_key'],
    name: 'TechVaultInventoryUtil',
    description: 'REST API utility for inventory system',
    active: true,
    access: 'package_private',
    script: script`
var TechVaultInventoryUtil = Class.create();
TechVaultInventoryUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    checkAvailability: function() {
        var itemId = this.getParameter('sysparm_item_id');
        return JSON.stringify({ available: true, stock: 5 });
    },
    type: 'TechVaultInventoryUtil'
});
    `,
})
```

---

## Components To Build

### Business Rules — see `docs/business-rules.md` for full logic

| Key | Name | When | Trigger |
|---|---|---|---|
| `br_auto_number` | TVR Auto Number | before | insert |
| `br_set_opened_at` | TVR Set Opened At | before | insert |
| `br_route_approval` | TVR Route to Approval | after | update |
| `br_validate_quantity` | TVR Validate Quantity | before | insert, update |
| `br_mandate_justification` | TVR Mandate Justification | before | insert, update |
| `br_set_closed_at` | TVR Set Closed At | before | update |
| `br_log_approval` | TVR Log Approval Action | after | update |

### Client Scripts — see `docs/client-scripts.md` for full logic

| Key | Name | Type | Field |
|---|---|---|---|
| `cs_role_visibility` | TVR onLoad Role Visibility | onLoad | — |
| `cs_toggle_quantity` | TVR onChange Toggle Quantity | onChange | item |
| `cs_bulk_warning` | TVR onChange Bulk Warning | onChange | quantity |
| `cs_cancel_confirm` | TVR onSubmit Cancel Confirm | onSubmit | — |
| `cs_cell_edit_guard` | TVR onCellEdit State Guard | onCellEdit | state |

### Script Includes

| Key | Name | Notes |
|---|---|---|
| `si_inventory_util` | TechVaultInventoryUtil | REST API utility, client callable |

---

## Naming Conventions

| Component | Pattern | Example |
|---|---|---|
| Business Rule | `TVR [Action]` | `TVR Auto Number` |
| Client Script | `TVR [type] [Description]` | `TVR onLoad Role Visibility` |
| Script Include | `TechVault[Name]` | `TechVaultInventoryUtil` |
| Notification | `TVR [Event] — [Recipient]` | `TVR Request Submitted — Notify Manager` |
| Key (`$id`) | prefix + underscore + name | `br_auto_number`, `cs_role_visibility` |
| Server function | camelCase | `autoGenerateNumber` |

---

## Build & Deploy

```bash
now build    # compile TypeScript, generate dist/
now deploy   # push to ServiceNow instance
now status   # check deployment status
```

---

## Data Model Quick Reference

See `docs/data-model.md` for full specs.

**Main table:** `x_2015976_techva_0_request`
**Key fields:** `number`, `state`, `requested_by`, `item`, `quantity`, `business_justification`, `manager_approval`, `assigned_to`, `opened_at`, `closed_at`

**State values:** `draft` → `pending_approval` → `pending_it_review` → `in_progress` → `fulfilled` → `closed` | `cancelled`

---

## Table Creation Pattern

Tables are created via Fluent API — **no manual PDI setup needed**.

See `docs/tables.md` for full table definitions.

**Column helpers** (import from `@servicenow/sdk/core`):

```typescript
import { Table, StringColumn, IntegerColumn, BooleanColumn,
         DateTimeColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const my_table = Table({
    $id: Now.ID['table_my_table'],
    name: 'x_2015976_techva_0_my_table',
    label: 'My Table',
    extends: 'task',   // optional — inherit from base table
    schema: {
        my_field: StringColumn({ label: 'My Field', maxLength: 255, mandatory: true }),
        ref_field: ReferenceColumn({ label: 'Reference', reference: 'sys_user' }),
        state: ChoiceColumn({ label: 'State', choices: [{ label: 'Open', value: 'open' }] }),
    },
})
```

**Build order for TechVault tables:**

1. `category.now.ts` — no dependencies
2. `item.now.ts` — references category
3. `request.now.ts` — references item, extends task
4. `approval-log.now.ts` — references request

---

## Getting Live SDK Docs (Important for Claude Code)

If you need accurate API signatures, run this in terminal:

```bash
npx @servicenow/sdk explain Table
npx @servicenow/sdk explain BusinessRule
npx @servicenow/sdk explain ClientScript
```

Or load full docs:

```bash
# Get the llms-full.txt URL for your SDK version
cat package.json | grep @servicenow/sdk
# Then fetch: https://servicenow.github.io/sdk/{version}/llms-full.txt
```
