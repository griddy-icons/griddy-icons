import React, { forwardRef } from "react";
import IconBase from "../../IconBase";
import type { IconProps } from "../../IconBase";
import bold from "./bold";
import regular from "./regular";

const weights = { bold, regular } as const;

const AnalyzeVoice = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
	<IconBase ref={ref} {...props} weights={weights} />
));

AnalyzeVoice.displayName = "AnalyzeVoice";
export default AnalyzeVoice;
