import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChevronDownSmallIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChevronDownSmallIcon.displayName = "ChevronDownSmall";
var ChevronDownSmall_default = ChevronDownSmallIcon;
export {
  ChevronDownSmall_default as default
};
