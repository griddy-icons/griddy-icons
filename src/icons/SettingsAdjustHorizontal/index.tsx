import React, { forwardRef } from "react";
import IconBase from "../../IconBase.js";
import type { IconProps } from "../../IconBase.js";
import regular from "./regular.js";
import filled from "./filled.js";

const weights = { regular, filled } as const;

const SettingsAdjustHorizontalIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

SettingsAdjustHorizontalIcon.displayName = "SettingsAdjustHorizontal";
export default SettingsAdjustHorizontalIcon;
