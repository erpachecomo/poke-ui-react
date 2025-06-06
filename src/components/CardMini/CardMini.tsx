import { Badge } from "../Badge";
import type { CardMiniProps } from "./types";
const CardMini: React.FC<CardMiniProps> = ({
  label,
  description,
  img,
  url,
  urlText,
  classNames = {},
  badges = [],
  BadgeComponent, // Default to Badge component if not provided
}) => {
  return (
    <div
      className={`flex flex-col items-center border-1 border-gray-200 rounded-md w-100 poke-card-mini p-4 ${
        classNames.container || ""
      }`}
    >
      {img && (
        <img
          src={img}
          alt={label}
          className={`poke-card-mini-img h-50 w-50 ${classNames.img || ""}`}
        />
      )}
      <div className={`poke-card-mini-content ${classNames.content || ""}`}>
        <h3
          className={`poke-card-mini-label text-center m-4 text-xl ${
            classNames.label || ""
          }`}
        >
          {label}
        </h3>
        <div className="poke-card-mini-badges flex justify-center space-x-2">
          {BadgeComponent}
          {badges.map((badge, index) =>
            typeof badge === "string" ? (
              <Badge key={index} label={badge} />
            ) : (
              <Badge
                key={index}
                label={badge.value}
                className={badge.className}
              />
            )
          )}
        </div>

        <hr className="my-4 border-gray-300 mx-16" />
        <p
          className={`poke-card-mini-description ${
            classNames.description || ""
          }`}
        >
          {description}
        </p>
      </div>
      {url && (
        <a
          href={url}
          className={`poke-card-mini-link text-blue-500 hover:text-blue-700 ${
            classNames.link || ""
          }`}
        >
          {urlText || "Learn more"}
        </a>
      )}
    </div>
  );
};
export default CardMini;
