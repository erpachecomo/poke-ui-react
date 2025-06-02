export type StatProps = {
  label: string;
  value: number | string;
  maxValue?: number;
  minValue?: number;
  classNames?: {
    container?: string;
    labelsContainer?: string;
    label?: string;
    value?: string;
    bar?: string;
    barFill?: string;
  };
};