# Modern Design Refactoring - Implementation Guide

## Quick Start

All changes are backward compatible. To see the new design:

```bash
npm run dev
```

Then visit `http://localhost:5173`

---

## What Changed

### Visual Changes
1. **Colors** - Modern, accessible color palette replacing retro bright colors
2. **Components** - Card-based design replacing window-frame aesthetic
3. **Typography** - Improved hierarchy and readability
4. **Spacing** - Consistent 8px baseline spacing system
5. **Navigation** - Clean header with responsive menu
6. **Interactions** - Smooth transitions and hover effects

### Component API Changes

#### BaseWindowFrame (formerly window styling)
```vue
<!-- OLD -->
<base-window-frame title="Title" color="pink" size="medium" bg-color="light-pink" height="250px">
  Content
</base-window-frame>

<!-- NEW -->
<base-window-frame 
  title="Title" 
  subtitle="Optional subtitle"
  variant="elevated"
  color="primary"
  padding="lg"
  rounded="lg"
>
  <template #header-action>
    <!-- Optional header action buttons -->
  </template>
  Content
  <template #footer>
    <!-- Optional footer actions -->
  </template>
</base-window-frame>
```

**Color options:** `primary`, `secondary`, `success`, `warning`, `danger`
**Variants:** `default` (border), `elevated` (shadow), `outlined` (thick border)
**Padding:** `sm`, `md`, `lg`
**Rounded:** `sm`, `md`, `lg`

#### BaseStickyNote (now Alert component)
```vue
<!-- OLD -->
<sticky-note bg-color="yellow" tilt="right">
  Content
</sticky-note>

<!-- NEW -->
<alert variant="info" title="Information">
  Content
</alert>
```

**Variants:** `info`, `success`, `warning`, `error`

---

## CSS Variables Quick Reference

### Colors
```css
--mp-indigo: #4f46e5       /* Primary */
--mp-blue: #0ea5e9        /* Secondary */
--mp-cyan: #06b6d4        /* Accent */
--mp-green: #10b981       /* Success */
--mp-purple: #7c3aed      /* Tertiary */
--mp-red: #ef4444         /* Danger */
--mp-yellow: #eab308      /* Warning */
```

### Spacing
```css
--spacing-xs: 0.25rem     /* 4px */
--spacing-sm: 0.5rem      /* 8px */
--spacing-md: 1rem        /* 16px */
--spacing-lg: 1.5rem      /* 24px */
--spacing-xl: 2rem        /* 32px */
--spacing-2xl: 3rem       /* 48px */
```

### Shadows
```css
--shadow-sm: subtle       /* Small UI elements */
--shadow-md: standard     /* Cards, elevated default */
--shadow-lg: prominent    /* Hover state */
--shadow-xl: maximum      /* Focus emphasis */
```

### Transitions
```css
--transition-fast: 150ms  /* Quick feedback */
--transition-base: 200ms  /* Normal interactions */
--transition-slow: 300ms  /* Deliberate changes */
```

### Radii
```css
--radius-sm: 0.375rem    /* 6px - buttons */
--radius-md: 0.5rem      /* 8px - inputs */
--radius-lg: 0.75rem     /* 12px - cards */
--radius-xl: 1rem        /* 16px - large components */
```

---

## Responsive Design Breakpoints

### Mobile First Approach
```css
/* Base styles: < 640px (mobile) */
.element { /* mobile styles */ }

/* Tablet: 640px - 1024px */
@media (min-width: 768px) {
  .element { /* tablet styles */ }
}

/* Desktop: ≥ 1024px */
@media (min-width: 1024px) {
  .element { /* desktop styles */ }
}
```

---

## Accessibility Features

### Focus Styles
All interactive elements have visible focus states:
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Color Contrast
- Normal text: 4.5:1 (WCAG AA)
- Large text: 3:1 (WCAG AA)
- All interactive elements meet standards

### Motion Preferences
Respects user's reduced motion preference:
```css
@media (prefers-reduced-motion: reduce) {
  /* animations disabled */
}
```

---

## Common Patterns

### Making a Button
```vue
<button class="read-more-btn">
  Action Text
  <svg class="icon">
    <use xlink:href="path/to/sprite.svg#icon-name"></use>
  </svg>
</button>

<style scoped>
.read-more-btn {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.read-more-btn:hover {
  background: var(--color-primary-hover);
  transform: translateX(4px);
}
</style>
```

### Card with Title
```vue
<base-window-frame
  title="Card Title"
  variant="elevated"
  color="primary"
  padding="lg"
>
  <p>Card content goes here</p>
</base-window-frame>
```

### Alert/Notice
```vue
<alert variant="info" title="Note">
  Important information for the user
</alert>
```

### Responsive Grid
```vue
<div class="grid">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<style scoped>
.grid {
  display: grid;
  gap: var(--spacing-lg);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
```

---

## Dark Mode Handling

Dark mode is automatically applied based on system preference (`prefers-color-scheme`).

CSS variables automatically update:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0f1117;
    --color-text: #d1d5db;
    /* ... all variables updated ... */
  }
}
```

**No JavaScript needed!** The browser handles the theme automatically.

---

## Migration Guide for Existing Components

### Before (Old Window Frame)
```vue
<base-window-frame 
  title="My Feature" 
  color="orange" 
  size="medium" 
  height="500px"
>
  Content
</base-window-frame>
```

### After (Modern Card)
```vue
<base-window-frame
  title="My Feature"
  variant="elevated"
  color="primary"
  padding="lg"
>
  Content
</base-window-frame>
```

### Color Mapping Guide
| Old | New | Use Case |
|-----|-----|----------|
| `color="pink"` | `color="primary"` | Main actions |
| `color="orange"` | `color="secondary"` | Secondary actions |
| `color="green"` | `color="success"` | Success states |
| `color="blue"` | `color="primary"` | Information |
| `color="yellow"` | `color="warning"` | Warnings |
| `color="red"` | `color="danger"` | Errors |

---

## Files to Update Next

### High Priority
- [ ] `src/components/BurgerMenuDropDown.vue` - Update dropdown styling
- [ ] `src/views/AboutView.vue` - Apply modern card layouts
- [ ] `src/views/BlogsView.vue` - Consistent with blog component
- [ ] `src/views/SpeakingEventsView.vue` - Consistent card design

### Medium Priority
- [ ] `src/components/BaseImageFrame.vue` - Review styling
- [ ] Navigation links styling - Ensure consistency
- [ ] Custom color classes - Remove old color system

### Low Priority (Enhancing)
- [ ] Add animations for page transitions
- [ ] Implement dark mode toggle
- [ ] Add loading states
- [ ] Improve error boundaries

---

## Testing Checklist

### Visual Testing
- [ ] Light mode rendering
- [ ] Dark mode rendering
- [ ] Mobile (< 640px)
- [ ] Tablet (640-1024px)
- [ ] Desktop (> 1024px)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Tab order is logical
- [ ] Focus states visible
- [ ] Color contrast passes WCAG AA
- [ ] Text is resizable

### Browser Support
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers

### Performance
- [ ] No console errors
- [ ] Smooth animations
- [ ] Fast load time
- [ ] No layout shifts

---

## Troubleshooting

### Components look different from expected

**Solution:** Ensure `base.css` is imported before component styles. Check that CSS variables are properly scoped.

### Dark mode not switching

**Solution:** Check browser dark mode preference. Ensure `@media (prefers-color-scheme: dark)` is in `base.css`. Clear browser cache.

### Spacing looks off

**Solution:** Review spacing variables. Common issue is using old hardcoded values (`20px`) instead of variables (`var(--spacing-lg)`).

### Colors not matching design

**Solution:** Use color variables, not hardcoded hex values. Reference the color palette section above.

---

## Design System Rules

### ✅ DO
- Use CSS variables for all design tokens
- Follow the spacing scale (xs, sm, md, lg, xl, 2xl)
- Use color variants (primary, secondary, success, warning, danger)
- Implement focus states
- Test with dark mode
- Use semantic HTML
- Follow mobile-first approach

### ❌ DON'T
- Hardcode colors (use `--mp-*` or `--color-*` variables)
- Use arbitrary spacing values (use spacing scale)
- Skip focus states
- Assume light mode only
- Use non-semantic divs for interactive elements
- Create new colors - extend existing palette

---

## Getting Help

### Reference Files
- Color palette: `src/assets/base.css` (lines 1-50)
- Spacing system: `src/assets/base.css` (lines 51-70)
- Components: `src/components/Base*.vue`
- Examples: Updated components like `TechBlogs.vue`

### Common Tasks

**Add a new color variant:**
```css
/* In base.css */
--mp-pink-dark: #be185d;
```

**Create a new spacing value:**
```css
/* In base.css (if truly needed) */
--spacing-3xl: 4rem;
```

**Style a new component:**
```vue
<template>
  <div class="my-component">
    <h3>Title</h3>
    <p>Content</p>
  </div>
</template>

<style scoped>
.my-component {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all var(--transition-base);
}

.my-component:hover {
  box-shadow: var(--shadow-md);
}
</style>
```

---

## Deployment Notes

- [ ] No breaking changes to component props
- [ ] All components have fallback styling
- [ ] CSS variables are scoped properly
- [ ] Dark mode works without JavaScript
- [ ] Mobile responsive design tested
- [ ] Accessibility audit passed

---

## Questions?

Refer to:
1. **Design tokens:** See `src/assets/base.css`
2. **Component examples:** Check `src/components/`
3. **Layout patterns:** Review `src/views/HomeView.vue`
4. **Styling reference:** Read `DESIGN_REFACTOR.md`
