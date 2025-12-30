import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SteakGrilledIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SteakGrilledIcon.displayName = "SteakGrilled";
var SteakGrilled_default = SteakGrilledIcon;
export {
  SteakGrilled_default as default
};
