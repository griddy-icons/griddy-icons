import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PhotoCameraIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PhotoCameraIcon.displayName = "PhotoCamera";
var PhotoCamera_default = PhotoCameraIcon;
export {
  PhotoCamera_default as default
};
