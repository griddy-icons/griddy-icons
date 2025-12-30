import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CarbonDioxideIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CarbonDioxideIcon.displayName = "CarbonDioxide";
var CarbonDioxide_default = CarbonDioxideIcon;
export {
  CarbonDioxide_default as default
};
