import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VolumeOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VolumeOffIcon.displayName = "VolumeOff";
var VolumeOff_default = VolumeOffIcon;
export {
  VolumeOff_default as default
};
