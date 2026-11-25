import type { SVGProps } from "react";

// "J6" wordmark, measured from Arial 900 at 100px (x: -1..131.4, y: -73..1).
export function J6Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="-1 -73 132.4 74" xmlns="http://www.w3.org/2000/svg">
      <text
        x={0}
        y={0}
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight={900}
        fontSize={100}
        letterSpacing={-2}
        fill="currentColor"
      >
        J6
      </text>
    </svg>
  );
}
