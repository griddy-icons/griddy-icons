import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ImageCopyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ImageCopyIcon.displayName = "ImageCopy";
var ImageCopy_default = ImageCopyIcon;
export {
  ImageCopy_default as default
};
