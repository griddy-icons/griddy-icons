import React, { forwardRef } from "react";
import IconBase from "../../IconBase";
import type { IconProps } from "../../IconBase";
import bold from "./bold";
import regular from "./regular";

const weights = { bold, regular } as const;

const ArrowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
	<IconBase ref={ref} {...props} weights={weights} />
));

ArrowRight.displayName = "ArrowRight";
export default ArrowRight;
