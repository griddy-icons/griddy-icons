import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlignTextJustifyLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlignTextJustifyLeftIcon.displayName = "AlignTextJustifyLeft";
var AlignTextJustifyLeft_default = AlignTextJustifyLeftIcon;
export {
  AlignTextJustifyLeft_default as default
};
