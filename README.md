# Poke UI React

A customizable React component library for building Pokédex-style applications and similar projects. This library aims to provide flexible, themeable UI components inspired by Pokémon stats and interfaces.

## Features
- ⚡️ Built with React, Vite, and Tailwind CSS
- 🧩 Modular, reusable components
- 🎨 Easy to style and extend
- 🧪 TypeScript support for type safety

## Check it out our storybook!
[Storybook/poke-ui-react](https://erpachecomo.github.io/poke-ui-react)

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

## Customization
- Built with Tailwind CSS for easy theming.
- Override styles using the `classNames` prop or by extending Tailwind config.

## Roadmap
- Add more components (e.g., TypeBadge, PokemonCard, ProgressBar)
- Improved accessibility and documentation

## Contributing
Pull requests and suggestions are welcome! Please open an issue to discuss your ideas.

## License
MIT

 This repository `poke-ui-react` is not affiliated with "The Pokémon Company" and does not own or claim any rights to any Nintendo trademark or the Pokémon trademark.