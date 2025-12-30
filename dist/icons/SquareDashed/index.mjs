import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SquareDashedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SquareDashedIcon.displayName = "SquareDashed";
var SquareDashed_default = SquareDashedIcon;
export {
  SquareDashed_default as default
};
