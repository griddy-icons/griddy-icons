import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CalendarCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CalendarCheckIcon.displayName = "CalendarCheck";
var CalendarCheck_default = CalendarCheckIcon;
export {
  CalendarCheck_default as default
};
