import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothImplantCrownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothImplantCrownIcon.displayName = "ToothImplantCrown";
var ToothImplantCrown_default = ToothImplantCrownIcon;
export {
  ToothImplantCrown_default as default
};
