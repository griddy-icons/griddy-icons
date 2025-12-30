import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CalendarCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CalendarCancelIcon.displayName = "CalendarCancel";
var CalendarCancel_default = CalendarCancelIcon;
export {
  CalendarCancel_default as default
};
