import React, { forwardRef } from "react";
import IconBase from "../../IconBase";
import type { IconProps } from "../../IconBase";
import regular from "./regular";
import filled from "./filled";

const weights = { regular, filled } as const;

const BanknoteDollarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

BanknoteDollarIcon.displayName = "BanknoteDollar";
export default BanknoteDollarIcon;
