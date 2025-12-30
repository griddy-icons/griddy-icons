import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TicketOffAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TicketOffAltIcon.displayName = "TicketOffAlt";
var TicketOffAlt_default = TicketOffAltIcon;
export {
  TicketOffAlt_default as default
};
