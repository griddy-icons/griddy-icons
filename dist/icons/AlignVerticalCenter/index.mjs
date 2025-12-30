import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlignVerticalCenterIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlignVerticalCenterIcon.displayName = "AlignVerticalCenter";
var AlignVerticalCenter_default = AlignVerticalCenterIcon;
export {
  AlignVerticalCenter_default as default
};
