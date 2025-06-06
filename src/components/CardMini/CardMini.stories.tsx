import type { Meta, StoryObj } from "@storybook/react-vite";

import CardMini from "./CardMini";
import type { CardMiniProps } from "./types";
import gengar from "../../stories/assets/gengar.json";
import React from "react";

const meta = {
  title: "CardMini",
  component: CardMini,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    classNames: {
      label: "capitalize",
    },
  },
} satisfies Meta<CardMiniProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: `${gengar.name} #${gengar.id}`,
    description: gengar.pokedex_entry,
    url: "https://pokeapi.co/api/v2/pokemon/gengar",
    urlText: "PokeAPI URL",
    img: gengar.sprites.other["official-artwork"].front_default,
    badges: [
      {
        value: gengar.types[0].type.name,
        className: "bg-gray-500 text-white uppercase",
      },
      {
        value: gengar.types[1].type.name,
        className: "bg-purple-500 text-white uppercase",
      },
    ],
  },
};

export const BadgesAsImages: Story = {
  args: {
    label: `${gengar.name} #${gengar.id}`,
    description: gengar.pokedex_entry,
    img: gengar.sprites.other["official-artwork"].front_default,
    BadgeComponent: (
      <>
        <img className="w-24" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-and-shining-pearl/8.png'} alt={gengar.types[0].type.name} />
        <img className="w-24" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-and-shining-pearl/4.png'} alt={gengar.types[1].type.name} />
      </>
    ),
  },
};
