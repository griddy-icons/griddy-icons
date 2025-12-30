import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlignTextJustifyRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlignTextJustifyRightIcon.displayName = "AlignTextJustifyRight";
var AlignTextJustifyRight_default = AlignTextJustifyRightIcon;
export {
  AlignTextJustifyRight_default as default
};
