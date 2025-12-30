import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VolumeMinIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VolumeMinIcon.displayName = "VolumeMin";
var VolumeMin_default = VolumeMinIcon;
export {
  VolumeMin_default as default
};
