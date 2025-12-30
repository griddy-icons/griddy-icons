import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChevronLeftSmallIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChevronLeftSmallIcon.displayName = "ChevronLeftSmall";
var ChevronLeftSmall_default = ChevronLeftSmallIcon;
export {
  ChevronLeftSmall_default as default
};
