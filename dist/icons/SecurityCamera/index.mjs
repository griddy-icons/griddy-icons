import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SecurityCameraIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SecurityCameraIcon.displayName = "SecurityCamera";
var SecurityCamera_default = SecurityCameraIcon;
export {
  SecurityCamera_default as default
};
