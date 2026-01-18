# Copilot Instructions for mariamdevportfolio

## Project Overview
A personal portfolio website built with **Vue 3**, **TypeScript**, **Vite**, **Pinia** (state management), and **Vue Router**. The site showcases Mariam's professional profile, blog articles from Dev.to, and speaking events from Sessionize.

## Architecture

### Component Structure
- **Page Components** (`src/views/`): Full-page views routed via Vue Router (HomeView, AboutView, BlogsView, SpeakingEventsView)
- **Reusable Components** (`src/components/`): Modern card components (BaseWindowFrame, BaseStickyNote/Alert) and feature components (ProfilePicWindow, TechBlogs, ContactMeWindow, CertificationsWindow)
- **Design Pattern**: Components use a modern card-based design with CSS variables for theming

### Data Flow & Services
- **State**: Pinia store (`src/stores/techBlogs.ts`) manages Dev.to blog articles via `useTechBlogsStore`
- **Services**:
  - `devTo.service.ts`: Fetches articles from Dev.to API for username `ms_74`
  - `sessonize.service.ts`: Fetches speaking events; falls back to local JSON (`src/assets/data/sessionizeEvents.json`) if API fails
- **Type Safety**: TypeScript interfaces defined in `src/types/dev.to.d.ts` for Dev.to API responses

### Styling System
- **CSS Variables**: Comprehensive design tokens (42+ variables) for colors, spacing, shadows, transitions
- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, 1024px
- **Dark Mode**: Automatic support via `@media (prefers-color-scheme: dark)`
- **Accessibility**: WCAG AA compliant contrast ratios, proper focus states, semantic HTML

## Modern Design System (January 2026)

### Color Palette
**Primary Colors:**
- `--mp-indigo: #4f46e5` - Primary actions, links
- `--mp-blue: #0ea5e9` - Secondary emphasis
- `--mp-cyan: #06b6d4` - Accents
- `--mp-green: #10b981` - Success states
- `--mp-purple: #7c3aed` - Tertiary

**Semantic Colors:**
- `--color-primary`, `--color-secondary`, `--color-text`, `--color-border`, etc.
- Light and dark mode variants automatic via CSS variables

### Spacing Scale
```
--spacing-xs: 0.25rem (4px)    --spacing-lg: 1.5rem (24px)
--spacing-sm: 0.5rem (8px)     --spacing-xl: 2rem (32px)
--spacing-md: 1rem (16px)      --spacing-2xl: 3rem (48px)
```

### Component Variants
- **BaseWindowFrame** (Card): `variant="elevated|default|outlined"`, `color="primary|secondary|success|warning|danger"`
- **BaseStickyNote** (Alert): `variant="info|success|warning|error"`
- Flexible `padding` and `rounded` props for sizing

## Critical Developer Workflows

### Build & Development
```sh
npm run dev              # Start Vite dev server (http://localhost:5173)
npm run build            # Type-check + minify for production
npm run type-check       # Vue-tsc type checking
npm run format           # Prettier formatting
npm run lint             # ESLint fix
```

### Testing
```sh
npm run test:unit                    # Vitest unit tests
npm run test:e2e:dev                 # Cypress E2E against dev server
npm run test:e2e                     # Cypress E2E against production build
```

### CI/CD Considerations
- Build command includes both type-checking and minification (`run-p` runs in parallel)
- Production deployment uses the built output from `npm run build`

## Project-Specific Patterns & Conventions

### Component Naming
- **Base Components**: `Base*.vue` for reusable UI primitives (e.g., `BaseWindowFrame.vue`, `BaseStickyNote.vue`)
- **Feature Components**: Named descriptively (e.g., `ProfilePicWindow.vue`, `TechBlogs.vue`)

### Card Component Pattern
All cards now use the modern BaseWindowFrame with semantic props:
```vue
<base-window-frame
  title="Title"
  subtitle="Optional"
  variant="elevated"
  color="primary"
  padding="lg"
>
  <template #header-action><!-- Actions --></template>
  Content
  <template #footer><!-- Footer --></template>
</base-window-frame>
```

### API Integration
- **External APIs**: Dev.to and Sessionize (both have fallback/error handling)
- **Graceful Degradation**: Sessionize service returns local JSON copy on fetch failure
- **CORS-friendly**: Uses public APIs with no authentication required

### Pinia Store Pattern
Store in `src/stores/techBlogs.ts` uses composition API:
- `ref` for state (e.g., `blogs`, `currentBlog`)
- Async functions for API calls (e.g., `fetchBlogs()`, `getBlogById()`)
- No mutations—direct state modifications in async functions

### Router Setup
- Lazy-loaded route: About view uses dynamic `import()` for code-splitting
- Default/catch-all route redirects to HomeView
- Named routes for navigation consistency

### View Layout Pattern
All views follow this structure for consistency:
```vue
<div class="view-page">
  <div class="page-container">
    <div class="page-header">
      <h1>Title</h1>
      <p class="subtitle">Subtitle</p>
    </div>
    <!-- Content cards -->
  </div>
</div>
```

## Integration Points & Cross-Component Communication

### Dev.to Blog Integration
1. `TechBlogs.vue` component calls `useTechBlogsStore().fetchBlogs()`
2. Store fetches articles via `devTo.service.ts` → Dev.to API endpoint
3. Articles displayed with metadata (title, date, cover image, links)
4. **Entry points**: `src/views/BlogsView.vue` (grid layout) and `src/components/TechBlogs.vue` (carousel)

### Sessionize Speaking Events Integration
1. `SpeakingEventsView.vue` calls `fetchMySpeakingEvents()` from `sessonize.service.ts`
2. Service attempts API call; on failure, returns local JSON fallback
3. **Fallback location**: `src/assets/data/sessionizeEvents.json`

## Key Files Reference
- **Entry**: `src/main.ts` (Pinia + Router setup)
- **Root Component**: `src/App.vue` (Navigation + RouterView)
- **Router Definition**: `src/router/index.ts`
- **Store**: `src/stores/techBlogs.ts`
- **Services**: `src/services/devTo.service.ts`, `src/services/sessonize.service.ts`
- **Styles**: `src/assets/base.css` (design tokens), `src/assets/main.css` (layout utilities)
- **Types**: `src/types/dev.to.d.ts`
- **Documentation**: `DESIGN_REFACTOR.md`, `DESIGN_IMPLEMENTATION.md`, `COMPLETION_CHECKLIST.md`

## Debugging Tips
- Check browser console for API errors (Dev.to, Sessionize)
- If blogs don't load: Verify Dev.to API is accessible and username `ms_74` is correct
- If speaking events fail: Check fallback JSON in `src/assets/data/sessionizeEvents.json` exists
- Use `npm run type-check` to catch TypeScript issues before building
- Dev server hot-reloads on `.vue`, `.ts`, `.css` changes
- Test dark mode via browser DevTools (Cmd+Shift+P → "Preferences: Color Theme" or system preference)

## Tooling
- **Package Manager**: npm (v6+)
- **Node Version**: v20 recommended (see `@tsconfig/node20`)
- **IDE Support**: VSCode + Volar extension recommended
- **Linting**: ESLint + Prettier (opinionated formatting)
- **Design System**: 42 CSS custom properties for consistency

## Recent Updates (January 2026)

### Modern Design Refactoring Complete ✅
- All components updated to modern card-based design
- Navigation header redesigned for clean, professional look
- BurgerMenuDropDown updated with modern transitions
- All views refactored with consistent card layouts:
  - **AboutView**: Multi-card layout with sections for professional background, credentials, and community
  - **BlogsView**: Responsive grid of blog cards with rich metadata
  - **SpeakingEventsView**: Separated current sessions and past events with improved table design
- Dark mode support implemented throughout
- Mobile-first responsive design
- WCAG AA accessibility compliance

### Files Affected
- ✅ `src/assets/base.css` - Complete design token system
- ✅ `src/assets/main.css` - Modern layout utilities
- ✅ All component files - Card design system
- ✅ All view files - Consistent layouts
- ✅ `src/App.vue` - Modern navigation
- ✅ Documentation files created

See `DESIGN_REFACTOR.md` for comprehensive overview of design changes.
