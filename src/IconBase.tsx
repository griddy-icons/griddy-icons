import React, { forwardRef, useContext } from "react";
import type { SVGProps, ReactElement } from "react";
import { IconContext } from "./IconContext";
import type { IconWeight } from "./IconContext";

export type IconWeightElementMap = Partial<Record<IconWeight, ReactElement>>;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
	color?: string;
	size?: number | string;
	weight?: IconWeight;
	mirrored?: boolean;
}

export interface IconBaseProps extends IconProps {
	weights: IconWeightElementMap;
}

const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(function IconBase(
	{ color, size, weight, mirrored, weights, style, ...rest },
	ref
) {
	const context = useContext(IconContext);
	const finalColor = color ?? context.color ?? "currentColor";
	const finalSize = size ?? context.size ?? 24;
	const finalWeight = weight ?? context.weight ?? "regular";
	const finalMirrored = mirrored ?? context.mirrored ?? false;

	const chosen = weights[finalWeight] ?? weights.regular ?? weights.bold ?? Object.values(weights)[0];

	const transform = finalMirrored ? "scale(-1,1)" : undefined;
	const mergedStyle = finalMirrored
		? { ...(style ?? {}), transformOrigin: "center", transform: "scaleX(-1)" }
		: style;

	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			width={finalSize}
			height={finalSize}
			viewBox="0 0 256 256"
			fill={finalColor}
			{...(transform ? { transform } : {})}
			style={mergedStyle}
			{...rest}
		>
			{chosen}
		</svg>
	);
});

export default IconBase;


