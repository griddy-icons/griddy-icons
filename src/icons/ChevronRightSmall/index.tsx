import React, { forwardRef } from "react";
import IconBase from "../../IconBase";
import type { IconProps } from "../../IconBase";
import regular from "./regular";
import filled from "./filled";

const weights = { regular, filled } as const;

const ChevronRightSmallIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

ChevronRightSmallIcon.displayName = "ChevronRightSmall";
export default ChevronRightSmallIcon;
