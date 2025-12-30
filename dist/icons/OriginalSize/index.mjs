import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const OriginalSizeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
OriginalSizeIcon.displayName = "OriginalSize";
var OriginalSize_default = OriginalSizeIcon;
export {
  OriginalSize_default as default
};
