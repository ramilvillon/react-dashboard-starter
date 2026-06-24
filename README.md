# React + Vite + Tailwind Dashboard Starter

A reusable, feature-colocated dashboard starter built with React, Vite, TypeScript,
Tailwind CSS v4, shadcn/ui, and the TanStack stack (Router, Query, Table).

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (CSS-first, OKLch theme) + **shadcn/ui** (new-york, neutral)
- **TanStack Router** — file-based routing, auth guards via `beforeLoad`
- **TanStack Query** — server-state caching, prefetched in route loaders
- **TanStack Table** — sortable/filterable/paginated data table
- **Recharts** — charts via shadcn chart components
- **Vitest + React Testing Library** — unit/component tests
- **Mock auth + mock data** — backend-agnostic, easy to swap

## Getting started

```bash
npm install
npm run dev
```

Demo login: **demo@example.com** / **password**

## Scripts

| Script | Purpose |
| ------ | ------- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Lint |
| `npm run format` | Format with Prettier |
| `npm run typecheck` | Type-check only |

## Project structure

`routes/` holds routing only and delegates to self-contained vertical slices in
`features/`. Each feature owns its components, API (queries), hooks, and types, and
exposes a public surface via `index.ts`. Cross-feature imports go through that
barrel — never reach into another feature's internals. Shared primitives live in
`components/ui` (shadcn), the app shell in `components/layout`, and cross-cutting
infra (query client, router context, utils) in `lib/`. Mock data and fetchers live
in `data/`.

## Swapping the mock backend

Replace the fetchers in `src/data/` and `src/features/auth/api/mock-auth.ts` with
real API calls. The query options and route loaders stay the same.
