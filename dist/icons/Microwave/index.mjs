import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MicrowaveIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MicrowaveIcon.displayName = "Microwave";
var Microwave_default = MicrowaveIcon;
export {
  Microwave_default as default
};
