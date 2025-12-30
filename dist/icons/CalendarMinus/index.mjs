import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CalendarMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CalendarMinusIcon.displayName = "CalendarMinus";
var CalendarMinus_default = CalendarMinusIcon;
export {
  CalendarMinus_default as default
};
