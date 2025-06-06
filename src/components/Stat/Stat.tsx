import type { StatProps } from "./types";

const Stat: React.FC<StatProps> = ({ label, value, maxValue = 100, minValue = 0, classNames, prefixValue = '', suffixValue = '' }) => {

  return (
    <div className={`poke-stat poke-stat-container ${classNames?.container || ''}`}>
      <div className={`flex justify-between text-sm poke-stat-labels-container text-gray-200 ${classNames?.labelsContainer || ''}`}>
        <span className={`font-medium poke-stat-label ${classNames?.label || ''}`}>{label}</span>
        <span className={`font-medium poke-stat-value ${classNames?.value || ''}`}>{prefixValue}{value}{suffixValue}</span>
      </div>
      <div className={`h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden poke-stat-bar ${classNames?.bar || ''}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out bg-white bg-accent poke-stat-bar-fill ${classNames?.barFill || ''}`}
          style={{
            width: `${((value as number) / (maxValue - minValue)) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
export default Stat;
