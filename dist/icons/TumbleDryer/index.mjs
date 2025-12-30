import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TumbleDryerIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TumbleDryerIcon.displayName = "TumbleDryer";
var TumbleDryer_default = TumbleDryerIcon;
export {
  TumbleDryer_default as default
};
