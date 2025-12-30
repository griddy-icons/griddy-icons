import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CalendarLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CalendarLeftIcon.displayName = "CalendarLeft";
var CalendarLeft_default = CalendarLeftIcon;
export {
  CalendarLeft_default as default
};
