import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TriangleDashedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TriangleDashedIcon.displayName = "TriangleDashed";
var TriangleDashed_default = TriangleDashedIcon;
export {
  TriangleDashed_default as default
};
