import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChevronUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChevronUpIcon.displayName = "ChevronUp";
var ChevronUp_default = ChevronUpIcon;
export {
  ChevronUp_default as default
};
