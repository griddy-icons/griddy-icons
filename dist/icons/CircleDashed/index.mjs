import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CircleDashedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CircleDashedIcon.displayName = "CircleDashed";
var CircleDashed_default = CircleDashedIcon;
export {
  CircleDashed_default as default
};
