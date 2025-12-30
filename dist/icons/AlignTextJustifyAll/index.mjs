import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlignTextJustifyAllIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlignTextJustifyAllIcon.displayName = "AlignTextJustifyAll";
var AlignTextJustifyAll_default = AlignTextJustifyAllIcon;
export {
  AlignTextJustifyAll_default as default
};
