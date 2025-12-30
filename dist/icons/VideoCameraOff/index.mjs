import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VideoCameraOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VideoCameraOffIcon.displayName = "VideoCameraOff";
var VideoCameraOff_default = VideoCameraOffIcon;
export {
  VideoCameraOff_default as default
};
