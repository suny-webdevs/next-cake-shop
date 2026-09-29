# next-cake-shop

A Next.js App Router application scaffolded inside the `cake-project` monorepo. Reuses the existing project's Tailwind CSS design tokens, Shadcn UI component patterns, and CSS conventions.

## What was added

- `next-cake-shop/` — standalone Next.js 15 app (TypeScript, App Router)
- `app/` symlink at repository root pointing to `next-cake-shop/app`

### Design system reuse

| Concern                | Source                | Integration                                                                    |
| ---------------------- | --------------------- | ------------------------------------------------------------------------------ |
| CSS variables & tokens | `src/index.css`       | Copied verbatim into `next-cake-shop/app/globals.css`                          |
| `cn()` utility         | `src/lib/utils.js`    | Ported to `next-cake-shop/lib/utils.ts`                                        |
| Shadcn UI components   | `src/components/ui/*` | Re-implemented as TSX in `next-cake-shop/components/ui/` (button, card, badge) |
| Path alias `@/*`       | `jsconfig.json`       | Mirrored in `tsconfig.json` paths                                              |

No new UI libraries, CSS resets, or theme systems were introduced.

## Routing

The App Router mirrors the source project's navigation structure:

| Path     | File                 | Description                                         |
| -------- | -------------------- | --------------------------------------------------- |
| `/`      | `app/page.tsx`       | Homepage with featured cakes and service highlights |
| `/cakes` | `app/cakes/page.tsx` | Full cake catalog with category badges              |

Additional routes (e.g. `/gifts`, `/about`) can be added as `app/<route>/page.tsx` without conflicting with the existing Vite app.

## Commands

```bash
# From repository root
cd next-cake-shop

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

## Verifying Tailwind / Shadcn usage

1. Run `npm run dev` and open `http://localhost:3000`.
2. The homepage uses `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-accent` — all resolved via the CSS custom properties in `app/globals.css`.
3. Cards, Buttons, and Badges are Shadcn-style components (`components/ui/card.tsx`, `button.tsx`, `badge.tsx`) using `class-variance-authority` + `tailwind-merge`, identical to the root project's pattern.

## TypeScript ↔ JavaScript

This scaffold ships as TypeScript. To convert to plain JavaScript:

1. Rename `.tsx` → `.jsx` and `.ts` → `.js` for all files under `app/`, `components/`, `lib/`.
2. Replace `tsconfig.json` with:
   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": { "@/*": ["./*"] }
     }
   }
   ```
3. Remove `typescript` and `@types/*` from `devDependencies` in `package.json`.
4. Remove type annotations from component props and utility functions.

If the root project switches to TypeScript, the existing `tsconfig.json` already aligns with the `@/*` alias convention used in the root `jsconfig.json`.
