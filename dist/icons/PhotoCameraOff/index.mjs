import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PhotoCameraOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PhotoCameraOffIcon.displayName = "PhotoCameraOff";
var PhotoCameraOff_default = PhotoCameraOffIcon;
export {
  PhotoCameraOff_default as default
};
