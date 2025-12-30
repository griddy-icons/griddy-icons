import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChevronDownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChevronDownIcon.displayName = "ChevronDown";
var ChevronDown_default = ChevronDownIcon;
export {
  ChevronDown_default as default
};
