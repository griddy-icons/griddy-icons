import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ImageOffAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ImageOffAltIcon.displayName = "ImageOffAlt";
var ImageOffAlt_default = ImageOffAltIcon;
export {
  ImageOffAlt_default as default
};
