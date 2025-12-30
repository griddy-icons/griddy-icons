import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChevronLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChevronLeftIcon.displayName = "ChevronLeft";
var ChevronLeft_default = ChevronLeftIcon;
export {
  ChevronLeft_default as default
};
