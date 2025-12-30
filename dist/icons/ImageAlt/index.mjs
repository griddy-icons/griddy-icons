import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ImageAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ImageAltIcon.displayName = "ImageAlt";
var ImageAlt_default = ImageAltIcon;
export {
  ImageAlt_default as default
};
