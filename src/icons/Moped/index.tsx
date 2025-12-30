import React, { forwardRef } from "react";
import IconBase from "../../IconBase";
import type { IconProps } from "../../IconBase";
import regular from "./regular";
import filled from "./filled";

const weights = { regular, filled } as const;

const MopedIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

MopedIcon.displayName = "Moped";
export default MopedIcon;
