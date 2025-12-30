import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TrendUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TrendUpIcon.displayName = "TrendUp";
var TrendUp_default = TrendUpIcon;
export {
  TrendUp_default as default
};
