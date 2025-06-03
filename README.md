# Poke UI React

A customizable React component library for building Pokédex-style applications and similar projects. This library aims to provide flexible, themeable UI components inspired by Pokémon stats and interfaces.

## Features
- ⚡️ Built with React, Vite, and Tailwind CSS
- 🧩 Modular, reusable components
- 🎨 Easy to style and extend
- 🧪 TypeScript support for type safety

## Getting Started

### Installation

```
npm install poke-ui-react
# or
yarn add poke-ui-react
```

### Usage

Import the styles and components you need:

```tsx
import 'poke-ui-react/lib/poke-ui-react.css';
import { Stat } from 'poke-ui-react';

function Example() {
  return (
    <Stat label="HP" value={60} />
  );
}
```

## Components

### Stat
Displays a stat bar with a label and value, ideal for Pokémon stats or similar data.

**Props:**
- `label` (string): The name of the stat (e.g., "HP", "Attack").
- `value` (number): The stat value (e.g., 60).
- `classNames?` (object): Optional. Custom class names for styling sub-elements (e.g., `{ barFill: "custom-animation" }`).

**Example:**
```tsx
<Stat label="Attack" value={80} classNames={{ barFill: "my-animation" }} />
```

## Customization
- Built with Tailwind CSS for easy theming.
- Override styles using the `classNames` prop or by extending Tailwind config.

## Roadmap
- Add more components (e.g., TypeBadge, PokemonCard, ProgressBar)
- Improved accessibility and documentation
- Storybook integration

## Contributing
Pull requests and suggestions are welcome! Please open an issue to discuss your ideas.

## License
MIT

 This repository `poke-ui-react` is not affiliated with "The Pokémon Company" and does not own or claim any rights to any Nintendo trademark or the Pokémon trademark.