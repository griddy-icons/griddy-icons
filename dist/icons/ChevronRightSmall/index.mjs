import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChevronRightSmallIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChevronRightSmallIcon.displayName = "ChevronRightSmall";
var ChevronRightSmall_default = ChevronRightSmallIcon;
export {
  ChevronRightSmall_default as default
};
