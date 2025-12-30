import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CarbonOffsetIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CarbonOffsetIcon.displayName = "CarbonOffset";
var CarbonOffset_default = CarbonOffsetIcon;
export {
  CarbonOffset_default as default
};
