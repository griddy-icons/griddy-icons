import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CalendarPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CalendarPlusIcon.displayName = "CalendarPlus";
var CalendarPlus_default = CalendarPlusIcon;
export {
  CalendarPlus_default as default
};
