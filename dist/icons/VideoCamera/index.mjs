import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VideoCameraIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VideoCameraIcon.displayName = "VideoCamera";
var VideoCamera_default = VideoCameraIcon;
export {
  VideoCamera_default as default
};
