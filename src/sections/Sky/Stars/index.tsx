import React, { useRef } from "react";
import { Star } from "./Star";
import "./style.scss";

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Stars = (): JSX.Element => {
  const startRef = useRef<HTMLDivElement>(null);

  return (
    <div className="stars" ref={startRef}>
      {Array.from({ length: 40 }).map((_, id) => {
        return (
          <Star
            key={id}
            id={id}
            style={{
              left: `${randomInteger(2, 98)}%`,
              bottom: `${randomInteger(2, 98)}%`,
              opacity: `${randomInteger(0.4, 1)}`,
            }}
          />
        );
      })}
    </div>
  );
};
