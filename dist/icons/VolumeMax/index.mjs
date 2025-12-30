import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VolumeMaxIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VolumeMaxIcon.displayName = "VolumeMax";
var VolumeMax_default = VolumeMaxIcon;
export {
  VolumeMax_default as default
};
