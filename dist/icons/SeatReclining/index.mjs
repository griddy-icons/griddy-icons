import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SeatRecliningIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SeatRecliningIcon.displayName = "SeatReclining";
var SeatReclining_default = SeatRecliningIcon;
export {
  SeatReclining_default as default
};
