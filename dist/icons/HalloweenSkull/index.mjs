import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenSkullIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenSkullIcon.displayName = "HalloweenSkull";
var HalloweenSkull_default = HalloweenSkullIcon;
export {
  HalloweenSkull_default as default
};
