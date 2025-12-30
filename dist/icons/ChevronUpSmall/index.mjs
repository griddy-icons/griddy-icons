import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChevronUpSmallIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChevronUpSmallIcon.displayName = "ChevronUpSmall";
var ChevronUpSmall_default = ChevronUpSmallIcon;
export {
  ChevronUpSmall_default as default
};
