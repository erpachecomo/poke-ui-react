import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from ".";

// Simple color mapping for Pokémon types
const typeColors: Record<string, string> = {
  Normal: "bg-gray-400 text-gray-900",
  Fire: "bg-orange-500 text-white",
  Water: "bg-blue-500 text-white",
  Grass: "bg-green-500 text-white",
  Electric: "bg-yellow-400 text-yellow-900",
  Ice: "bg-cyan-300 text-cyan-900",
  Fighting: "bg-red-700 text-white",
  Poison: "bg-purple-500 text-white",
  Ground: "bg-yellow-700 text-white",
  Flying: "bg-indigo-300 text-indigo-900",
  Psychic: "bg-pink-400 text-pink-900",
  Bug: "bg-lime-500 text-lime-900",
  Rock: "bg-yellow-800 text-white",
  Ghost: "bg-violet-700 text-white",
  Dragon: "bg-indigo-700 text-white",
  Dark: "bg-gray-800 text-white",
  Steel: "bg-gray-500 text-white",
  Fairy: "bg-pink-200 text-pink-900",
};
const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The text to display in the badge",
      defaultValue: "Fire",
    },
    className: {
      control: "text",
      description: "Custom class name",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Badge> = {
  args: {
    label: "Fire",
    className: typeColors["Fire"],
  },
};

export const AllTypes: StoryObj<typeof Badge> = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {[
        "Normal",
        "Fire",
        "Water",
        "Grass",
        "Electric",
        "Ice",
        "Fighting",
        "Poison",
        "Ground",
        "Flying",
        "Psychic",
        "Bug",
        "Rock",
        "Ghost",
        "Dragon",
        "Dark",
        "Steel",
        "Fairy",
      ].map((label) => (
        <Badge key={label} label={label} className={typeColors[label]} />
      ))}
    </div>
  ),
};
