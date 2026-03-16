# 👁 Ghost Lens

**Behavioral idle-detection contextual help overlay for React and Web Components.**

Ghost Lens detects when users are lost — no button clicks required. A configurable idle timer triggers a kinetic "Clear Curtain" sweep revealing contextual tooltips keyed to `data-ghost` attributes. The moment a user moves their mouse or types, everything vanishes.

[![npm version](https://badge.fury.io/js/ghost-lens.svg)](https://www.npmjs.com/package/ghost-lens)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## Install

```bash
npm install ghost-lens
```

---

## React

```jsx
import { GhostLens } from 'ghost-lens';

export default function App() {
  return (
    <GhostLens idleDelay={3000}>
      <YourApp />
    </GhostLens>
  );
}
```

Then add `data-ghost` to any element:

```jsx
<button data-ghost="Click to save your changes to the cloud">
  Save
</button>

<nav data-ghost="Navigate between sections of your project">
  ...
</nav>
```

### React Hook

```jsx
import { useGhostLens } from 'ghost-lens';

function Dashboard() {
  const { activate, deactivate } = useGhostLens({ idleDelay: 4000 });

  return <button onClick={activate}>Show Help</button>;
}
```

### ghost() Helper

```jsx
import { ghost } from 'ghost-lens';

<button {...ghost('Click to submit the form')}>Submit</button>
```

---

## Web Component

```html
<script type="module">
  import 'ghost-lens/web-component';
</script>

<ghost-lens idle-delay="3000"></ghost-lens>

<button data-ghost="Click to submit the form">Submit</button>
```

---

## Vanilla JS

```js
import { GhostLensEngine } from 'ghost-lens';

const lens = new GhostLensEngine(null, {
  idleDelay: 3000,
  onActivate: () => console.log('Lens active'),
  onDeactivate: () => console.log('Lens dismissed'),
});

// Manual control
lens.activate();
lens.deactivate();
lens.destroy();
```

---

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `idleDelay` | `number` | `3000` | ms of idle before lens activates |
| `curtainDuration` | `number` | `600` | ms for the curtain sweep animation |
| `accentColor` | `string` | `'#00c8ff'` | Primary accent color |
| `tooltipBg` | `string` | `'rgba(0,18,30,0.92)'` | Tooltip background |
| `tooltipBorder` | `string` | `'rgba(0,200,255,0.4)'` | Tooltip border color |
| `tooltipColor` | `string` | `'#a8f0ff'` | Tooltip text color |
| `zIndex` | `number` | `9999` | Overlay z-index |
| `badgeText` | `string` | `'GHOST LENS'` | Badge title text |
| `badgeSubtext` | `string` | `'Augmentation Active'` | Badge subtitle |
| `disabled` | `boolean` | `false` | Disable the lens |
| `onActivate` | `function` | `null` | Callback on activation |
| `onDeactivate` | `function` | `null` | Callback on deactivation |

---

## How It Works

1. Ghost Lens listens for `mousemove`, `keydown`, `click`, `scroll`, and `touchstart` events globally
2. After `idleDelay` ms of no activity, the lens activates
3. A "Clear Curtain" gradient sweeps across the viewport (kinetic HUD power-up effect)
4. Tooltips appear at the real-time bounding box coordinates of every `[data-ghost]` element
5. Any user activity immediately dismisses everything — zero friction
6. Users can permanently disable via "Disable Ghost Lens Forever" (stored in localStorage)

---

## User Respect

Ghost Lens is designed with users in mind:
- "Disable Ghost Lens Forever" persists to `localStorage` — no dark patterns
- No analytics or tracking by default
- Dismisses instantly on any activity — never in the way

---

## License

MIT © Tom Ashby / xdrabbit
