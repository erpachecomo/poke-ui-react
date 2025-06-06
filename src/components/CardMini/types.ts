export type CardMiniProps = {
  label: string;
  description: string;
  img?: string;
  url?: string;
  urlText?: string;
  classNames?: {
    container?: string;
    img?: string;
    content?: string;
    label?: string;
    description?: string;
    link?: string;
  };
  badges?: {value: string, className?: string}[] | string[] ;  
  BadgeComponent?: React.JSX.Element;
};
