import type { Meta, StoryObj } from "@storybook/react-vite";

// import { fn } from 'storybook/test';
import Stat from "./Stat";
import type { StatProps } from "./types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Stat",
  component: Stat,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    maxValue: {
      type: "number",
      table: {
        type: { summary: "number" },
      },
    },
    minValue: {
      type: "number",
      table: {
        type: { summary: "number" },
      },
    },
    prefixValue: {
      type: "string",
      table: {
        type: { summary: "string" },
      },
    },
    suffixValue: {
      type: "string",
      table: {
        type: { summary: "string" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    classNames: {
      container: "w-100 bg-gray-800 rounded-lg p-4",
    },
  },
} satisfies Meta<StatProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    value: 80,
    label: "HP",
  },
};
