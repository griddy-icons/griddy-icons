import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CalendarDatesIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CalendarDatesIcon.displayName = "CalendarDates";
var CalendarDates_default = CalendarDatesIcon;
export {
  CalendarDates_default as default
};
