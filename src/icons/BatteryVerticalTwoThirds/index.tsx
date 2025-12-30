import React, { forwardRef } from "react";
import IconBase from "../../IconBase";
import type { IconProps } from "../../IconBase";
import regular from "./regular";
import filled from "./filled";

const weights = { regular, filled } as const;

const BatteryVerticalTwoThirdsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

BatteryVerticalTwoThirdsIcon.displayName = "BatteryVerticalTwoThirds";
export default BatteryVerticalTwoThirdsIcon;
