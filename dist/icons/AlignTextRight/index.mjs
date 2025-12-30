import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlignTextRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlignTextRightIcon.displayName = "AlignTextRight";
var AlignTextRight_default = AlignTextRightIcon;
export {
  AlignTextRight_default as default
};
