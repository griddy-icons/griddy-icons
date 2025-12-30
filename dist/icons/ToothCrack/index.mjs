import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothCrackIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothCrackIcon.displayName = "ToothCrack";
var ToothCrack_default = ToothCrackIcon;
export {
  ToothCrack_default as default
};
