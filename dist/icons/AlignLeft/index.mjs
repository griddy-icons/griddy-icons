import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlignLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlignLeftIcon.displayName = "AlignLeft";
var AlignLeft_default = AlignLeftIcon;
export {
  AlignLeft_default as default
};
