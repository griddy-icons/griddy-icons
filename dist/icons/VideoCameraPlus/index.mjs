import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VideoCameraPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VideoCameraPlusIcon.displayName = "VideoCameraPlus";
var VideoCameraPlus_default = VideoCameraPlusIcon;
export {
  VideoCameraPlus_default as default
};
