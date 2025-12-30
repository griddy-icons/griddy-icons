import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TimeUpdateIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TimeUpdateIcon.displayName = "TimeUpdate";
var TimeUpdate_default = TimeUpdateIcon;
export {
  TimeUpdate_default as default
};
