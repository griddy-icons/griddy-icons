import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VolumeCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VolumeCancelIcon.displayName = "VolumeCancel";
var VolumeCancel_default = VolumeCancelIcon;
export {
  VolumeCancel_default as default
};
