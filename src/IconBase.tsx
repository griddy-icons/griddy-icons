import { forwardRef } from "react";
import type { SVGProps, ReactElement } from "react";

export type IconWeight = "regular" | "filled";

export type IconWeightElementMap = Partial<Record<IconWeight, ReactElement>>;

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

export interface IconBaseProps extends IconProps {
  weights: IconWeightElementMap;
}

const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(function IconBase(
  { size = 24, filled, weights, ...rest },
  ref
) {
  const chosen = weights[filled ? "filled" : "regular"] ?? weights.regular;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      {chosen}
    </svg>
  );
});

export default IconBase;
