# CLAUDE.md — confluences-et-frontieres (front-app)

## Stack technique

- **Framework** : Next.js 16.2 (App Router uniquement)
- **UI** : React 19
- **Styling** : Tailwind CSS 4 (via `@tailwindcss/postcss`)
- **Langage** : TypeScript 5 (strict mode)
- **Déploiement** : standalone (`output: "standalone"`)
- **Alias de chemin** : `@/*` → racine du projet

## Internationalisation (i18n)

- **5 langues obligatoires** : `fr`, `en`, `pt`, `it`, `gl`
- **Locale par défaut** : `fr`
- **Aucun texte en dur dans les composants.** Tout texte visible par l'utilisateur doit provenir du dictionnaire.
- Utiliser `getDictionary(lang)` depuis `@/app/[lang]/dictionaries` pour récupérer les traductions.
- Valider la locale avec `hasLocale(locales, lang)` avant tout appel.
- Les fichiers de traduction sont dans `dictionaries/*.json` — les **5 fichiers doivent être mis à jour simultanément** à chaque ajout/modification de clé.
- Structure JSON : objets imbriqués par section (ex. `{ "home": { "title": "..." }, "nav": { "about": "..." } }`).
- Typer le dictionnaire : le type retourné par `getDictionary()` doit refléter la structure JSON exacte.
- Metadata Next.js (`generateMetadata`) : toujours dynamique selon la langue courante.

## Styling — Tailwind first

- **Tailwind en priorité absolue** pour tout le styling.
- CSS custom (`globals.css` ou module CSS) uniquement si Tailwind ne peut pas couvrir le besoin (animations complexes, keyframes spécifiques).
- **Interdit** : CSS-in-JS (styled-components, emotion, etc.), attributs `style` inline.
- Les classes Tailwind sont importées via `@import "tailwindcss"` dans `app/globals.css`.

## Architecture des composants — Atomic Design

Tous les composants vivent dans `components/` et suivent la hiérarchie Atomic Design :

| Niveau | Dossier | Exemples |
|---|---|---|
| **Atoms** | `components/atoms/` | Boutons, inputs, labels, icônes, badges |
| **Molecules** | `components/molecules/` | Champs de formulaire (label + input + erreur), cards, menus déroulants |
| **Organisms** | `components/organisms/` | Header, footer, sections de page, formulaires complets |
| **Templates** | `components/templates/` | Layouts de pages, grilles de contenu |

### Règles de découpage

- Un atom ne dépend que de props et d'autres atoms.
- Une molecule compose des atoms.
- Un organisme compose des molecules et/ou des atoms.
- Un template compose des organismes et définit la mise en page.
- **Les pages (`app/[lang]/*/page.tsx`) ne contiennent pas de logique de présentation** — elles assemblent des templates et passent les données.

### Convention de fichiers

```
components/atoms/Button/
├── Button.tsx
└── index.ts        # re-export
```

## Accessibilité — Norme RGAA

Chaque composant **doit** respecter les critères RGAA suivants :

### Images

- Attribut `alt` obligatoire sur toute balise `<img>` et `<Image>`.
- Image décorative : `alt=""`.
- SVG décoratifs : `aria-hidden="true"`.
- SVG informatifs : `role="img"` + `aria-label="description"`.

### Contraste

- Texte normal : ratio minimum **4.5:1**.
- Grand texte (≥ 24px ou ≥ 18.5px bold) : ratio minimum **3:1**.

### Navigation clavier

- **Tout élément interactif doit être accessible au clavier** (Tab, Entrée, Espace, Échap).
- Ne jamais utiliser `tabindex` avec une valeur positive (`tabindex="0"` ou `tabindex="-1"` uniquement).
- Le focus doit toujours être **visible** (`focus-visible:` en Tailwind).
- Implémenter un **skip link** (`Aller au contenu principal`) en haut de chaque page, pointant vers `<main id="main-content">`.

### Formulaires

- Chaque champ doit avoir un `<label>` associé (via `htmlFor`/`id`).
- Messages d'erreur liés au champ via `aria-describedby`.
- Champs obligatoires : `aria-required="true"`.

### Sémantique HTML

- Utiliser les balises sémantiques : `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<header>`.
- Hiérarchie des titres `<h1>` à `<h6>` sans sauter de niveaux.
- Un seul `<h1>` par page.
- `<main id="main-content">` obligatoire dans le layout.

### Langue

- L'attribut `lang` sur `<html>` doit refléter dynamiquement la locale courante (ex. `lang="fr"`, `lang="en"`).

### Titres de page

- Chaque page doit avoir un `<title>` unique et descriptif (via `generateMetadata`).

### ARIA

- Boutons avec icône uniquement : `aria-label` obligatoire.
- Contenu mis à jour dynamiquement : `aria-live="polite"` (ou `"assertive"` si urgent).
- Pas d'ARIA inutile — si un élément HTML natif suffit, l'utiliser en priorité.

## Rendu — Server Components par défaut

- **Tous les composants sont des Server Components par défaut.** Ne pas ajouter `"use client"` sauf nécessité.
- `"use client"` est nécessaire **uniquement** pour :
  - Gestionnaires d'événements (`onClick`, `onChange`, etc.)
  - Hooks React (`useState`, `useEffect`, `useRef`, etc.)
  - APIs navigateur (`window`, `document`, `localStorage`, etc.)
- **Interdit** : `"use client"` sur les fichiers `page.tsx` et `layout.tsx`.
- Préférer passer des Server Components en `children` d'un Client Component plutôt que de convertir tout un arbre en client.

## Recommandations supplémentaires

- **Images** : toujours utiliser `next/image` (`<Image>`), jamais `<img>` directement.
- **Liens** : toujours utiliser `next/link` (`<Link>`), jamais `<a>` directement pour la navigation interne.
- **Imports React** : ne pas importer `React` (React 19 JSX transform le gère automatiquement). Importer uniquement les hooks nécessaires : `import { useState } from "react"`.
- **Routing** : toutes les routes sont sous `app/[lang]/`. Ne jamais créer de route en dehors de ce segment dynamique.
- **Locale proxy** : le routage de locale est géré par `proxy.ts` — ne pas modifier sans raison.

## Commandes

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Démarrage du serveur de production
npm run lint     # Lint ESLint
```
