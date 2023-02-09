import React, { useRef } from "react";
import { Star } from "./Star";
import styles from "./style.module.scss";

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const stars = Array.from({ length: 40 });

export const Stars = (): JSX.Element => {
  const startRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.stars} ref={startRef}>
      {stars.map((_, id) => {
        return (
          <Star
            key={id}
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
