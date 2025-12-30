import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlarmOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlarmOffIcon.displayName = "AlarmOff";
var AlarmOff_default = AlarmOffIcon;
export {
  AlarmOff_default as default
};
