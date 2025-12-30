import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SeatChildIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SeatChildIcon.displayName = "SeatChild";
var SeatChild_default = SeatChildIcon;
export {
  SeatChild_default as default
};
