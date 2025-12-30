import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SmartWatchIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SmartWatchIcon.displayName = "SmartWatch";
var SmartWatch_default = SmartWatchIcon;
export {
  SmartWatch_default as default
};
