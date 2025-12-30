import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlignHorizontalCenterIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlignHorizontalCenterIcon.displayName = "AlignHorizontalCenter";
var AlignHorizontalCenter_default = AlignHorizontalCenterIcon;
export {
  AlignHorizontalCenter_default as default
};
