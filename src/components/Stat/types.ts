export type StatProps = {
  label: string;
  value: number | string;
  prefixValue?: string;
  suffixValue?: string;
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