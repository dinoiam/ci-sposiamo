import React, { useRef } from "react";
import { Star } from "./Star";
import styles from "./style.module.scss";

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getArray(): Array<{ x: number; y: number }> {
  const arr = [];

  // const start = 0;
  const stop = Math.PI * 2; // radians

  const resolution = 20; // how many points to connect
  const step = stop / resolution; // angle increment per point

  for (let i = 0; i < resolution + 1; i++) {
    const angle = step * i;
    const r =
      5 -
      5 * Math.sin(angle) +
      (Math.sin(angle) * Math.sqrt(Math.abs(Math.cos(angle)))) /
        (Math.sin(angle) + 1.4);
    const point = {
      // x: r ,
      // y: r * Math.cos(angle),
      x: r * Math.sin(angle) * 5,
      y: r * Math.cos(angle) * 5,
    };
    arr.push(point); // create an array of points
  }
  return arr;
}

const stars = Array.from({ length: 40 });
// const heartCenter = randomInteger(20, 80);
const heart = getArray();

export const Stars = (): JSX.Element => {
  const startRef = useRef<HTMLDivElement>(null);

  return (
    <div
      data-animation-id="section-stars-wrapper"
      className={styles.stars}
      ref={startRef}
    >
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
      <div
        className={styles.heart}
        style={{
          left: `${randomInteger(20, 80)}%`,
          bottom: `${randomInteger(30, 80)}%`,
          opacity: `${randomInteger(0.4, 1)}`,
        }}
      >
        {heart.map(({ x, y }, id) => {
          return (
            <Star
              key={id}
              style={{
                left: `${y}px`,
                bottom: `${x}px`,
              }}
            />
          );
        })}
      </div>
      <div
        className={styles.heart}
        style={{
          left: `${randomInteger(20, 80)}%`,
          bottom: `${randomInteger(30, 80)}%`,
          opacity: `${randomInteger(0.4, 1)}`,
        }}
      >
        {heart.map(({ x, y }, id) => {
          return (
            <Star
              key={id}
              style={{
                left: `${y}px`,
                bottom: `${x}px`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
