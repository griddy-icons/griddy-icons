import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlignTextLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlignTextLeftIcon.displayName = "AlignTextLeft";
var AlignTextLeft_default = AlignTextLeftIcon;
export {
  AlignTextLeft_default as default
};
