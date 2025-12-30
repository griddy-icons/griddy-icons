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
declare const IconBase: import("react").ForwardRefExoticComponent<Omit<IconBaseProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
export default IconBase;
