# React + Vite + Tailwind Dashboard Starter — Design

**Date:** 2026-06-24
**Status:** Approved (pending implementation plan)

## Purpose

A reusable, opinionated starter template for building dashboard applications. The
goal is a clean foundation with good structure and conventions that can be cloned
for multiple future dashboard projects. It ships with rich demo features that
demonstrate the intended patterns by example, so anyone cloning it inherits the
conventions rather than reading docs.

## Goals

- Reusable template, not a one-off app.
- Demonstrate the common dashboard patterns (auth, data tables, charts, settings)
  through working demo features.
- Establish a feature-colocated structure that scales to large projects.
- Backend-agnostic: mock data/auth that is easy to swap for a real backend.

## Non-Goals

- A specific business domain (this is a template).
- A real backend or real auth provider (mock only; designed to be swapped).
- Exhaustive test coverage (a representative harness, not 100%).

## Tech Stack

| Concern       | Choice                                              |
| ------------- | --------------------------------------------------- |
| Build tool    | Vite + React + TypeScript                           |
| Styling       | Tailwind CSS (v4)                                   |
| Components    | shadcn/ui (Radix + Tailwind, owned in-repo)         |
| Routing       | TanStack Router (type-safe, file-based)             |
| Server state  | TanStack Query                                      |
| Tables        | TanStack Table (via shadcn data-table)              |
| Charts        | Recharts (via shadcn chart components)              |
| Theming       | Light / dark / system via CSS variables + toggle    |
| Auth          | Mock auth (localStorage token) + route guards       |
| Testing       | Vitest + React Testing Library                      |
| Lint / format | ESLint + Prettier                                   |

## Project Structure (feature-colocated)

```
src/
  routes/                   # routing ONLY — thin; delegates to features
    __root.tsx              # root layout (providers, devtools)
    _auth.tsx               # public auth layout
    _auth/login.tsx
    _app.tsx                # protected layout (sidebar + topbar); beforeLoad guard
    _app/index.tsx          # Overview — imports from features/dashboard
    _app/users/index.tsx    # Data table — imports from features/users
    _app/settings.tsx       # Settings — imports from features/settings
    _app/$.tsx              # 404 / not-found catch-all
  features/
    auth/                   # vertical slice: login, useAuth, guard
      components/
      api/
      hooks/
      types.ts
      index.ts              # public surface — imported by routes & other features
    dashboard/              # stat cards + charts
    users/                  # TanStack Table page
    settings/               # settings form
  components/
    ui/                     # shadcn primitives ONLY
    layout/                 # app shell (AppSidebar, AppTopbar, ThemeToggle)
  lib/                      # cross-cutting infra: query client, router, utils
  hooks/                    # ONLY hooks shared across 3+ features
  data/                     # mock data + mock fetch functions (simulated latency)
```

### Structural rules (what makes it scale)

- **A feature is self-contained** — its components, API, hooks, and types are
  colocated. Deleting the feature folder deletes the feature.
- **Cross-feature imports go through the feature's `index.ts`** (its public API),
  never deep into another feature's internals. Boundaries stay enforceable.
- **Top-level `components`/`hooks`/`lib` stay minimal** — promote something there
  only when 2-3+ features genuinely share it. Default to colocating.
- **`routes/` stays thin** — a route file wires a layout + a feature; it holds no
  business logic.

## Data Flow

- **TanStack Query** is the server-state layer. Each feature's `api/` holds
  `queryOptions` and mutation hooks. Mock fetchers in `data/` simulate latency so
  loading and error states are real and demonstrable.
- **TanStack Router loaders** call `queryClient.ensureQueryData` so routes
  prefetch on navigation; Query owns the cache. Data is ready when the route
  renders.
- **Auth guard** lives in `_app.tsx`'s `beforeLoad`, redirecting unauthenticated
  users to `/login`.
- **Theme state** via a small provider (system/light/dark) that writes a class on
  `<html>` and persists to `localStorage`.

## Error Handling

- Router `errorComponent` per route, plus a root error boundary for uncaught
  errors.
- Query errors surface in-component (error states on stat cards and tables).
- A 404 catch-all route (`_app/$.tsx`) for unknown paths.
- Mock auth failures (bad login) show inline form errors.

## Demo Features

Each is modeled as a vertical slice to demonstrate the structure.

- **auth** — login page, mock credential check, `useAuth`, route guard via
  `beforeLoad`. Token stored in `localStorage`. Designed for easy swap to a real
  provider.
- **dashboard** — Overview page: stat cards plus two Recharts charts (an area
  chart and a bar chart) using shadcn chart components.
- **users** — Data table page: TanStack Table with sorting, filtering, and
  pagination, styled via shadcn's data-table patterns.
- **settings** — form with the theme toggle and profile fields (local only, no
  backend).

## Testing

- **Vitest + React Testing Library** for unit and component tests.
- Representative example tests wired and passing — a component test, the auth
  guard logic, and a query hook — to demonstrate the harness, not exhaustive
  coverage.
- Type-checking via `tsc --noEmit`; linting/formatting via ESLint + Prettier.
  All exposed as npm scripts.

## Tooling / Scripts

- `dev`, `build`, `preview` (Vite)
- `test`, `test:watch` (Vitest)
- `lint`, `format` (ESLint, Prettier)
- `typecheck` (`tsc --noEmit`)

## Open Questions

None outstanding. Library versions to be pinned during implementation against
current docs.
