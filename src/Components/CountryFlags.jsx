import React from "react";

const CountryFlags = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>
          <img
            src={`/assets/svg/${country.code}.svg`}
            alt={country.name}
            onError={(e) => {
              console.error(`Failed to load image for ${country.name}: ${e.target.src}`);
            }}
          />
          <span>{country.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CountryFlags;
