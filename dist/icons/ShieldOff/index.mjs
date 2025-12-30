import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShieldOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShieldOffIcon.displayName = "ShieldOff";
var ShieldOff_default = ShieldOffIcon;
export {
  ShieldOff_default as default
};
